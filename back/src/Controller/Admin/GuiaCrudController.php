<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\QueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\SearchDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ColorField;
use Symfony\Component\Validator\Constraints\NotBlank;
use EasyCorp\Bundle\EasyAdminBundle\Field\CountryField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TelephoneField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FilterCollection;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class GuiaCrudController extends AbstractCrudController
{

    public static function getEntityFqcn(): string
    {
        return User::class;
    }   

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Guías')
        ->setEntityLabelInSingular('Guía');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('nombre')->setLabel('Nombre')
                ->setCustomOption('constraints', [
                    new NotBlank([
                        'message' => 'Please fill in the Name field.',
                    ]),
                ]),
            TextField::new('apellidos')->setLabel('Apellidos')
                ->setCustomOption('constraints', [
                    new NotBlank([
                        'message' => 'Please fill in the Last Name field.',
                    ]),
                ]),
            TextField::new('email')->setLabel('E-Mail')
                ->setCustomOption('constraints', [
                    new NotBlank([
                        'message' => 'Please fill in the E-Mail field.',
                    ]),
                ]),
            TextField::new('password')->setLabel('Contraseña')->setFormType(PasswordType::class)->onlyWhenCreating(),
            TelephoneField::new('telefono')
                ->setCustomOption('constraints', [
                    new NotBlank([
                        'message' => 'Please fill in the Password field.',
                    ]),
                ]),
            CountryField::new('pais')
                ->setCustomOption('constraints', [
                    new NotBlank([
                        'message' => 'Please fill in the Country field.',
                    ]),
                ]),
            DateTimeField::new('fecha_registro')->setLabel('Fecha de registro')->setFormat('d/M/Y - H:m')->hideOnForm(),
            ColorField::new('color', 'Color')

        ];

        return parent::configureFields($pageName);
    }

    public function createIndexQueryBuilder(SearchDto $searchDto, EntityDto $entityDto, FieldCollection $fields, FilterCollection $filters): QueryBuilder
    {
        // Filtra los usuarios por el rol 'ROLE_GUIA'.
        return parent::createIndexQueryBuilder($searchDto, $entityDto, $fields, $filters)
            ->andWhere('entity.roles LIKE :role')
            ->setParameter('role', '%"ROLE_GUIA"%');
    }
}
