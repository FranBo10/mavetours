<?php

namespace App\Controller\Admin;

use App\Entity\Evento;
use App\Entity\Imagenes;
use App\Entity\DetallesEvento;
use App\Entity\ObservacionGuia;
use App\Service\PictureService;
use App\Repository\TourRepository;
use App\Form\ImagenesFormType;
use App\Repository\EventoRepository;
use App\Form\ObservacionGuiaFormType;
use App\Service\ObservacionGuiaService;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\BlogCategoriaRepository;
use App\Repository\ObservacionGuiaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    #[Route('/admin/guia/{_locale}', name: 'guia', requirements: ['_locale' => 'en|es|fr|pt'], defaults: ['_locale' => 'es'])]
    public function guia(Request $request, EventoRepository $eventoRepository, TourRepository $tourRepository, BlogCategoriaRepository $blogCategoriaRepository, ObservacionGuiaService $observacionGuiaService, ObservacionGuiaRepository $observacionGuiaRepository, PictureService $pictureService): Response
{
    $events = $eventoRepository->findAll();
    $tours = $tourRepository->findAll();
    $categoria = $blogCategoriaRepository->findOneBy(['id' => 1]);  
    $locale = $request->getLocale();
    $visitas = [];

    foreach ($events as $event) {
        $locale = $request->getLocale();
        $tour = $event->getTour();
        $reservas = $event->getReservas();
        $observaciones = $event->getObservacionesGuia();
        $imagenes = $event->getImagenes();
        
        // Localization logic
        $tourTitle = $tour->getTitulo();
        if ($locale === 'es' && $tour->getTituloEs()) {
            $tourTitle = $tour->getTituloEs();
        } elseif ($locale === 'fr' && $tour->getTituloFr()) {
            $tourTitle = $tour->getTituloFr();
        } elseif ($locale === 'pt' && $tour->getTituloPt()) {
            $tourTitle = $tour->getTituloPt();
        }

        // Time format (e.g. 11H)
        $timePrefix = $event->getInicio()->format('H\H');
        
        // Final Title: "11H - Title"
        $displayTitle = $timePrefix . ' - ' . $tourTitle;
        
        // Lock if closed
        $title = $event->isCerrado() ? '🔒' . $displayTitle : $displayTitle;
        $inicio = $event->getInicio()->format('d/m/Y');
        $fin = $event->getInicio()->format('d/m/Y');
        $color = $event->getGuiaColor() ?: 'black';
        $guia = $event->getUser();
        $cerrado = $event->isCerrado();
        $guia_id = $guia ? $guia->getId() : null;
        $nombreGuia = $guia ? $guia->getNombre() : 'Sin guía asignado';
        $apellidosGuia = $guia ? $guia->getApellidos() : '';

        $toursKey = $event->getId() . '_' . $inicio;

        if (!array_key_exists($toursKey, $visitas)) {
            $visitas[$toursKey] = [
                "id" => $event->getId(),
                "titulo" => $title,
                "inicio" => $inicio,
                "fin" => $fin,
                "color" => $color,
                "cerrado" => $cerrado,
                "reservas" => [],
                "observaciones" => [],
                "imagenes" => [],
                "guia" => $nombreGuia . ' ' . $apellidosGuia,
                "guia_id" => $guia_id
            ];
        }

        foreach ($reservas as $reserva) {
            $user = $reserva->getUser();
            $detallesReserva = $reserva->getDetallesReserva();

            if ($user && $detallesReserva) {
                $visitas[$toursKey]["reservas"][] = [
                    "id" => $reserva->getId(),
                    "cantidadAsistentes" => $detallesReserva->getCantidad(),
                    "usuario" => $user->getNombre() . ' ' . $user->getApellidos(),
                    "email" => $user->getEmail(),
                    "telefono" => $user->getTelefono()
                ];
            }
        }

        foreach ($observaciones as $observacion) {
            $autor = $observacion->getAutor();

            if ($autor) {
                $visitas[$toursKey]["observaciones"][] = [
                    "id" => $observacion->getId(),
                    "autor_id" => $autor->getId(),
                    "autor" => $autor->getNombre() . ' ' . $autor->getApellidos(),
                    "avatar" => $autor->getAvatar(),
                    "contenido" => $observacion->getContenido(),
                    "fecha_registro" => $observacion->getFechaRegistro()->format('Y-m-d H:i:s')
                ];
            }
        }

        foreach ($imagenes as $imagen) { 
            $visitas[$toursKey]["imagenes"][] = [
                "imagen_id" => $imagen->getId(),
                "nombre" => $imagen->getNombre(),
            ];
        }
    }

    $data = json_encode(array_values($visitas));

   $imagenes = new Imagenes();
   $imagenesForm = $this->createForm(ImagenesFormType::class);
   $imagenesForm->handleRequest($request);

   if ($imagenesForm->isSubmitted() && $imagenesForm->isValid()) {
    $images = $imagenesForm->get('imagenes')->getData();
    $eventoId = $request->request->get('evento_img_id');
    $evento = $eventoRepository->find($eventoId);

    if ($images) {
        foreach ($images as $image) {
            $folder = 'images';
            $fichier = $pictureService->add($image, $folder, 150, 150);
            $img = new Imagenes();
            $img->setNombre($fichier);
            $evento->addImagenes($img);
            $em->persist($img);
        }
        $em->flush(); // Mover el flush dentro del bucle para asegurar que el ID esté disponible
            // Retornar una respuesta JSON después de persistir la imagen
            return new JsonResponse([
                'success' => true,
                'imagen_id' => $img->getId(), // Usar $img en lugar de $imagenes
                'eventoId' => eventoId,
                'nombre' => $img->getNombre()
            ]);
        }
    }

    if ($imagenesForm->isSubmitted() && !$imagenesForm->isValid()) {
        return new JsonResponse(['success' => false, 'error' => 'Invalid form data'], 400);
   }

    $observacionGuia = new ObservacionGuia();
    $formObservacion = $this->createForm(ObservacionGuiaFormType::class, $observacionGuia);
    $formObservacion->handleRequest($request);

    if ($formObservacion->isSubmitted() && $formObservacion->isValid()) {
        $observacionGuia = $formObservacion->getData();
        $eventoId = $request->request->get('evento_id');
        $evento = $eventoRepository->find($eventoId);

        if ($evento) {
            $observacionGuia->setEvento($evento);
            $observacionGuiaService->persistObservacionGuia($observacionGuia, $this->getUser());
        }

        return new JsonResponse([
            'success' => true,
            'observacion_id' => $observacionGuia->getId(),
            'autor_id' => $this->getUser()->getId(),
            'evento_id' => $eventoId,
            'autor_nombre' => $this->getUser()->getNombre(),
            'autor_apellidos' => $this->getUser()->getApellidos(),
            'autor_avatar' => $this->getUser()->getAvatar(),
            'contenido' => $observacionGuia->getContenido(),
            'fecha_registro' => $observacionGuia->getFechaRegistro()->format('Y-m-d H:i:s'),
        ]);
    }

    if ($formObservacion->isSubmitted() && !$formObservacion->isValid()) {
        return new JsonResponse(['success' => false, 'error' => 'Invalid form data'], 400);
    }

    return $this->render("eventos/guia.html.twig", [
        'data' => $data,
        "eventos" => $events,
        "evento" => $event,
        "tours" => $tours,
        "visitas" => $visitas,
        'categoria' => $categoria,
        'formObservacion' => $formObservacion->createView(),
        'imagenesForm' => $imagenesForm->createView()
    ]);
}

    #[Route('/admin/guia/store/{id}', name: 'store')]
    public function store(Request $request, EntityManagerInterface $em, ValidatorInterface $validator, EventoRepository $eventoRepository, $id)
    {
        // Obtener el evento usando el ID
        $evento = $this->em->getRepository(Evento::class)->find($id);        
    
        // Verificar si el evento existe
        if (!$evento) {
            return new JsonResponse(['error' => 'Evento no encontrado'], 404);
        }
    
        // Obtener y procesar los datos del formulario
        $efectivo = $request->request->get('efectivo');
        $totalAsistentes = $request->request->get('cantidad_asistentes');
        $guia = $request->request->get('user_id');
        $eventoCerrado = $request->request->get('evento_cerrado');       

        $asistentesConfirmados = (int)$totalAsistentes;
        $efectivoFloat = floatval($efectivo);

        // Validar que el efectivo no sea 0
        if ($efectivoFloat == 0) {
            $this->addFlash('danger', 'El valor de efectivo no puede ser 0, introduce una cantidad para cerrar el evento');
            return new JsonResponse(['error' => 'El valor de efectivo no puede ser 0.'], 400);
        }

        // Crear un nuevo objeto DetallesEvento
        $detallesEvento = new DetallesEvento();
    
        // Configurar el objeto DetallesEvento
        $detallesEvento
            ->setUser($this->getUser())
            ->setEvento($evento)
            ->setEfectivo($efectivoFloat)
            ->setTarjeta(0)
            ->setAsistencia(1)
            ->setCantidadAsistentes($asistentesConfirmados);
    
        // Validar el objeto DetallesEvento
        $errors = $validator->validate($detallesEvento);
        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return new JsonResponse(['error' => $errorsString], 400);
        }
    
        // Persistir el objeto DetallesEvento en la base de datos
        $em->persist($detallesEvento);

        // Actualizar el estado de cerrado del evento
        $evento->setCerrado(true);
        $em->persist($evento);

        // $imagenes = $this->em->getRepository(Imagenes::class)->findBy(['evento' => null]);

        // foreach ($imagenes as $imagen) {
        //     $evento->addImagen($imagen);
        //     $imagen->setEvento($evento);
        // }

        $em->flush();
    
        $this->addFlash('success', 'El tour ha sido validado correctamente');
        
        return new JsonResponse(['success' => 'Detalles guardados correctamente'], 200);

    }

//     #[Route('/admin/guia/cambiar-estado/{id}', name: 'cambiar_estado_evento', methods: ['POST'])]
// public function cambiarEstadoEvento(Evento $evento, Request $request, EntityManagerInterface $entityManager): JsonResponse
// {
//     $nuevoEstado = $request->request->get('cerrado');
//     $evento->setCerrado($nuevoEstado == '1');  // Si '1', el evento está cerrado; de lo contrario, está abierto.

//     $entityManager->persist($evento);
//     $entityManager->flush();

//     return new JsonResponse([
//         'success' => true,
//         'estado' => $evento->isCerrado()
//     ]);
// }
    
    #[Route('/admin/api/cities', name: 'admin_api_cities', methods: ['GET'])]
    public function getCities(Request $request, \App\Repository\CiudadRepository $ciudadRepository): JsonResponse
    {
        $country = $request->query->get('country');

        if (!$country) {
            return new JsonResponse([]);
        }

        $ciudades = $ciudadRepository->findByPais($country);

        // Devolvemos {id: nombre} para que el JS pueda usar el ID como value del <option>
        $result = [];
        foreach ($ciudades as $ciudad) {
            $result[(string) $ciudad->getId()] = $ciudad->getNombre();
        }

        return new JsonResponse($result);
    }

}