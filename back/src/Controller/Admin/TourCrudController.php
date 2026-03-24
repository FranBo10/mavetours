<?php

namespace App\Controller\Admin;

use App\Entity\Tour;
use App\Repository\CiudadRepository;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CountryField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TimeField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\BooleanFilter;

class TourCrudController extends AbstractCrudController
{
    public function __construct(
        private readonly CiudadRepository $ciudadRepository,
    ) {}

    public static function getEntityFqcn(): string
    {
        return Tour::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Tours')
            ->setEntityLabelInSingular('Tour');
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(BooleanFilter::new('estado', 'Filtrar por Tours Activos'));
    }


    public function configureAssets(\EasyCorp\Bundle\EasyAdminBundle\Config\Assets $assets): \EasyCorp\Bundle\EasyAdminBundle\Config\Assets
    {
        return $assets->addWebpackEncoreEntry('admin_tour');
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();

        yield AssociationField::new('destino')->setRequired(false);
        yield CountryField::new('pais')
            ->setRequired(true)
            ->setColumns(6)
            ->setHelp('Selecciona el país. Las ciudades se cargarán automáticamente.');

        // En INDEX y DETAIL mostramos el nombre de la ciudad como texto
        if (Crud::PAGE_INDEX === $pageName || Crud::PAGE_DETAIL === $pageName) {
            yield AssociationField::new('ciudad', 'Ciudad');
        } else {
            // En FORM (NEW / EDIT) mostramos el AssociationField como select nativo
            // El JS se encargará de filtrar las opciones según el país seleccionado
            yield AssociationField::new('ciudad', 'Ciudad')
                ->renderAsNativeWidget()
                ->setRequired(false)
                ->setColumns(6)
                ->setHelp('Selecciona el país primero.');
        }

        yield TimeField::new('hora_inicio', 'Inicio')->setFormat('short')->onlyOnForms()
                ->setColumns(4);
        yield TimeField::new('hora_fin', 'Fin')->setFormat('short')->onlyOnForms()
                ->setColumns(4);

        yield ChoiceField::new('duracion', 'Duración')
            ->setChoices($this->generateTimeRangeChoices(0, 0, 10, 0, 15))
            ->onlyOnForms()
            ->setColumns(4);

        yield TextField::new('rango', 'Rango')
            ->hideOnForm()
            ->formatValue(function ($value, $entity) {
                return $entity->getHoraInicio() && $entity->getHoraFin()
                    ? $entity->getHoraInicio()->format('H:i') . ' - ' . $entity->getHoraFin()->format('H:i')
                    : '';
            });

        yield TextField::new('titulo', 'Título EN')
                ->setColumns(4);
        yield TextField::new('titulo_es', 'Título ES')
                ->setColumns(4);
        yield TextField::new('titulo_fr', 'Título FR')
                ->setColumns(4);        
        yield TextField::new('titulo_pt', 'Título PT')
                ->setColumns(4);

        yield TextEditorField::new('descripcion_corta', 'Descripción corta EN')->onlyOnForms();
        yield TextEditorField::new('descripcion_corta_fr', 'Descripción corta FR')->onlyOnForms();
        yield TextEditorField::new('descripcion_corta_es', 'Descripción corta ES')->onlyOnForms();        
        yield TextEditorField::new('descripcion_corta_pt', 'Descripción corta PT')->onlyOnForms();

        yield TextEditorField::new('descripcion_larga', 'Descripción larga EN')->onlyOnForms();
        yield TextEditorField::new('descripcion_larga_fr', 'Descripción larga FR')->onlyOnForms();
        yield TextEditorField::new('descripcion_larga_es', 'Descripción larga ES')->onlyOnForms();
        yield TextEditorField::new('descripcion_larga_pt', 'Descripción larga PT')->onlyOnForms();

        yield ImageField::new('imagen', 'Imagen')
            ->setBasePath('uploads/images/')
            ->setUploadDir('public/uploads/images/')
            ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
            ->setFormTypeOptions(['required' => $pageName === Crud::PAGE_NEW])
            ->onlyOnForms()
            ->setColumns(12);

        yield MoneyField::new('precio', 'Precio')->setCurrency('EUR')->setColumns(3);
        yield IntegerField::new('stock')->setColumns(3);
        yield IntegerField::new('orden')->setColumns(3);
        yield BooleanField::new('estado', 'Activo')->setColumns(3);

        yield TextField::new('comienzo', 'Punto de encuentro')->onlyOnForms()->setColumns(6);
        yield TextField::new('final', 'Punto de llegada')->onlyOnForms()->setColumns(6);

        yield TextareaField::new('mapaComienzo', 'Dirección del mapa comienzo (Google)')->onlyOnForms()->setColumns(6);
        yield TextareaField::new('mapaFinal', 'Dirección del mapa final (Google)')->onlyOnForms()->setColumns(6);
    }

    private function generateTimeRangeChoices($startHour, $startMinute, $endHour, $endMinute, $step): array
    {
        $rangos = [];
        $currentHour = $startHour;
        $currentMinute = $startMinute;

        while ($currentHour < $endHour || ($currentHour == $endHour && $currentMinute <= $endMinute)) {
            $rangos[] = sprintf('%d h %02d m', $currentHour, $currentMinute);
            $currentMinute += $step;

            if ($currentMinute >= 60) {
                $currentHour++;
                $currentMinute = 0;
            }
        }

        $choices = [];
        foreach ($rangos as $rango) {
            $choices[$rango] = $rango;
        }

        return $choices;
    }
}
