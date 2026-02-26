<?php

namespace App\Controller\Admin;

use App\Entity\Etapa;
use App\Repository\CiudadRepository;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CountryField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class EtapaCrudController extends AbstractCrudController
{
    public function __construct(private readonly CiudadRepository $ciudadRepository) {}

    public static function getEntityFqcn(): string
    {
        return Etapa::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();

        yield AssociationField::new('circuito')->setRequired(true);

        yield IntegerField::new('diaNumero')
            ->setLabel('Día')
            ->setHelp('Número del día dentro del circuito.');

        yield IntegerField::new('orden')
            ->setHelp('Orden de visualización.');

        yield TextField::new('titulo')->setRequired(false);

        yield CountryField::new('pais')
            ->setRequired(true)
            ->setHelp('Selecciona el país. Guarda y vuelve a editar para ver ciudades filtradas.');

        // Obtenemos las ciudades de la BD filtradas por país de la etapa
        $etapa = $this->getContext()?->getEntity()?->getInstance();
        $pais = $etapa instanceof Etapa ? $etapa->getPais() : null;

        $choices = [];
        if ($pais && $pageName === Crud::PAGE_EDIT) {
            $ciudades = $this->ciudadRepository->findByPais($pais);
            foreach ($ciudades as $ciudad) {
                $choices[$ciudad->getNombre()] = $ciudad->getNombre();
            }
        }

        yield ChoiceField::new('ciudad')
            ->setChoices($choices)
            ->autocomplete()
            ->setRequired(false)
            ->setHelp(
                $pageName === Crud::PAGE_EDIT
                    ? 'Ciudades filtradas por país.'
                    : 'Selecciona el país, guarda, y vuelve a editar para ver ciudades filtradas.'
            );

        yield TextareaField::new('descripcion')
            ->setNumOfRows(6);

        yield TextField::new('transporte')
            ->setRequired(false);
    }
}
