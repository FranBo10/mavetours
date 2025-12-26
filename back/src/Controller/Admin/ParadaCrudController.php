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
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('titulo', 'Titulo'),            
            TextEditorField::new('contenido', 'Contenido Inglés')->onlyOnForms(),
            TextEditorField::new('contenido_fr', 'Contenido Francés')->onlyOnForms(),
            TextareaField::new('mapa', 'Direccion de la parada (Google)')->onlyOnForms(),
            IntegerField::new('longitud', "Longitud"),
            IntegerField::new('latitud', "Latitud"),
            ImageField::new('imagen', 'Imagen')
            ->setBasePath('uploads/images')
            ->setUploadDir('public/uploads/images/')
            ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
            ->onlyWhenUpdating()
            ->setFormTypeOptions([
                'required' => false
            ]),
             ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images')
                ->setUploadDir('public/uploads/images/')
                ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
                ->onlyWhenCreating(),
            ImageField::new('imagen', 'Imagen')->setBasePath('uploads/images/')->hideOnForm(),
            AssociationField::new('tour', 'Tour')->renderAsNativeWidget(),
            ];
        }
    }
