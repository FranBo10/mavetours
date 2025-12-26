<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Validator\Constraints\NotBlank;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CountryField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TelephoneField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }   

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Usuarios')
        ->setEntityLabelInSingular('Usuario');
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
            TextField::new('avatar')->setLabel('Avatar')
            ->setCustomOption('constraints', [
                new NotBlank([
                    'message' => 'Please fill in the Avatar field.',
                ]),
            ]),
             DateField::new('fechaNacimiento')->setLabel('Fecha de Nacimiento')
                ->setFormTypeOptions([
                    'widget' => 'single_text',  // Esto hace que el campo se vea como un campo de fecha.
                    'required' => true,
                ]),
            ChoiceField::new('roles')->setLabel('Rol')->setChoices([
                'Usuario'  => 'ROLE_USER',
                'Admin' => 'ROLE_ADMIN',
                'Guia' => 'ROLE_GUIA',
            ])
            ->allowMultipleChoices(true)
            ->setRequired(true)
            ->setFormTypeOptions([
                'multiple' => true,
                'expanded' => true,
            ])->setTemplatePath('admin/field/roles.html.twig')->allowMultipleChoices(),
            DateTimeField::new('fecha_registro')->setLabel('Fecha de registro')->setFormat('d/M/Y - H:m')->hideOnForm(),
        ];
    }
}
