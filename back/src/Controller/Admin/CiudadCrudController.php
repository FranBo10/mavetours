<?php

namespace App\Controller\Admin;

use App\Entity\Ciudad;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CountryField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CiudadCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Ciudad::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Ciudades')
            ->setEntityLabelInSingular('Ciudad');
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield TextField::new('nombre');
        yield TextField::new('slug');

        yield CountryField::new('pais')
            ->setRequired(true)
            ->setColumns(6);

        yield AssociationField::new('destino')
            ->setRequired(false)
            ->setColumns(6);

        yield ImageField::new('imagen')
            ->setBasePath('uploads/images/ciudades')
            ->setUploadDir('public/uploads/images/ciudades')
            ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
            ->setRequired(false);

        yield TextareaField::new('descripcion', 'Descripción EN')->onlyOnForms();
        yield TextareaField::new('descripcion_es', 'Descripción ES')->onlyOnForms();
        yield TextareaField::new('descripcion_fr', 'Descripción FR')->onlyOnForms();

        yield BooleanField::new('isActive', 'Activo');
    }
}
