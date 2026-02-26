<?php

namespace App\Controller\Admin;

use App\Entity\Parada;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ParadaCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Parada::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield AssociationField::new('tour', 'Tour')
            ->renderAsNativeWidget()
            ->setColumns(12);

        yield TextField::new('titulo', 'Titulo')
            ->setColumns(12);

        yield IntegerField::new('longitud', "Longitud")->setColumns(6);
        yield IntegerField::new('latitud', "Latitud")->setColumns(6);

        yield TextareaField::new('mapa', 'Direccion de la parada (Google)')
            ->onlyOnForms()
            ->setColumns(12);

        yield TextEditorField::new('contenido', 'Contenido Inglés')->onlyOnForms()->setColumns(12);
        yield TextEditorField::new('contenido_fr', 'Contenido Francés')->onlyOnForms()->setColumns(12);            
        yield TextEditorField::new('contenido_es', 'Contenido Espanol')->onlyOnForms()->setColumns(12);

        yield ImageField::new('imagen', 'Imagen')
            ->setBasePath('uploads/images')
            ->setUploadDir('public/uploads/images/')
            ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
            ->onlyWhenUpdating()
            ->setFormTypeOptions(['required' => false])
            ->setColumns(12);

        yield ImageField::new('imagen', 'Imagen')
            ->setBasePath('uploads/images')
            ->setUploadDir('public/uploads/images/')
            ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
            ->onlyWhenCreating()
            ->setColumns(12);

        yield ImageField::new('imagen', 'Imagen')
            ->setBasePath('uploads/images/')
            ->hideOnForm();
        }
    }
