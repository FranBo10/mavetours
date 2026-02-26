<?php

namespace App\Controller\Admin;

use App\Entity\Rango;
use App\Entity\Tour;
use App\Entity\Horario;
use Doctrine\ORM\EntityManagerInterface;
use App\Controller\Admin\RangoCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class HorarioCrudController extends AbstractCrudController
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public static function getEntityFqcn(): string
    {
        return Horario::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Horarios')
            ->setEntityLabelInSingular('Horario');
    }

    public function configureAssets(Assets $assets): Assets
    {
        return $assets
            ->addHtmlContentToBody('
                <script>
                document.addEventListener("DOMContentLoaded", function() {
                    // Mostrar/ocultar fecha_tour según checkbox "No disponible"
                    const checkbox = document.querySelector("[name*=activo]");
                    const fechaField = document.getElementById("fecha-no-disponible-wrapper");

                    if (checkbox && fechaField) {
                        function toggleFecha() {
                            fechaField.style.display = checkbox.checked ? "block" : "none";
                        }
                        toggleFecha();
                        checkbox.addEventListener("change", toggleFecha);
                    }
                });
                </script>
            ');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),

            AssociationField::new('tours', 'Tours')
                ->setCrudController(TourCrudController::class)
                ->setRequired(true)
                ->setFormTypeOptions([
                    'multiple' => true,
                ])
                ->formatValue(function ($value, $entity) {
                    $tours = $entity->getTours();
                    $tourTitles = [];
                    foreach ($tours as $tour) {
                        $tourTitles[] = $tour->getTitulo();
                    }
                    return implode(', ', $tourTitles);
                }),

            AssociationField::new('rangos', 'Rangos')
                ->setCrudController(RangoCrudController::class)
                ->setRequired(true)
                ->setFormTypeOptions([
                    'multiple' => true,
                ])
                ->setHelp('Por defecto se seleccionan TODOS los rangos. Desmarca los que no apliquen.')
                ->formatValue(function ($value, $entity) {
                    $rangos = $entity->getRangos();
                    if ($rangos->isEmpty()) {
                        return 'Todos';
                    }
                    $rangoHorarios = [];
                    foreach ($rangos as $rango) {
                        $rangoHorarios[] = $rango->getHoraInicio() . ' - ' . $rango->getHoraFin();
                    }
                    return implode(', ', $rangoHorarios);
                }),

            BooleanField::new('activo', 'No disponible')
                ->setHelp('Marcar para indicar un día concreto como no disponible'),

            DateField::new('fecha_tour', 'Fecha no disponible')
                ->setRequired(false)
                ->setHelp('Indica qué día concreto NO estará disponible este horario')
                ->setFormTypeOptions([
                    'row_attr' => ['id' => 'fecha-no-disponible-wrapper'],
                ]),
        ];
    }

    /**
     * Al crear un nuevo Horario, pre-seleccionar TODOS los Rangos existentes
     */
    public function createEntity(string $entityFqcn)
    {
        $horario = new Horario();

        // Pre-asignar todos los rangos existentes
        $todosLosRangos = $this->em->getRepository(Rango::class)->findAll();
        foreach ($todosLosRangos as $rango) {
            $horario->addRango($rango);
        }

        return $horario;
    }
}
