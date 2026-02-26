<?php

namespace App\Controller\Admin;

use App\Entity\Circuito;
use App\Form\EtapaFormType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CircuitoCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Circuito::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Circuito')
            ->setEntityLabelInPlural('Circuitos')
            ->setDefaultSort(['orden' => 'ASC', 'id' => 'DESC'])
            ->setSearchFields(['titulo', 'slug', 'continente']);
    }

    public function configureFields(string $pageName): iterable
    {
        // ✅ Destino como entidad (AssociationField)
        yield \EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField::new('destino')
            ->setRequired(true)
            ->setColumns(12);

        yield TextField::new('titulo')->setColumns(12);
        yield TextField::new('slug')
            ->setHelp('Ej: francia-belgica-paises-bajos-5-dias')
            ->setColumns(12);

        yield ImageField::new('imagen')
            ->setBasePath('uploads/images/destinos')
            ->setUploadDir('public/uploads/images/destinos')
            ->setRequired(false)
            ->setColumns(12);

        yield TextEditorField::new('descripcion', 'Descripción EN')->hideOnIndex()->setColumns(6);
        yield TextEditorField::new('descripcionEs', 'Descripción ES')->hideOnIndex()->setColumns(6);
        yield TextEditorField::new('descripcionFr', 'Descripción FR')->hideOnIndex()->setColumns(6);

        yield MoneyField::new('precio')->setCurrency('EUR')->hideOnIndex()->setColumns(3);
        yield IntegerField::new('stock')->hideOnIndex()->setColumns(3);
        yield IntegerField::new('orden')->setHelp('Orden')->setColumns(3);
        yield BooleanField::new('isActive')->setColumns(3);

        // ✅ Colección embebida de ETAPAS (tu “itinerario”)
        yield CollectionField::new('etapas')
            ->setLabel('Itinerario (etapas / días)')
            ->setEntryType(EtapaFormType::class)
            ->allowAdd()
            ->allowDelete()
            ->renderExpanded(true)
            ->setFormTypeOption('by_reference', false) // MUY importante para OneToMany
            ->hideOnIndex()
            ->setColumns(12);
    }
}
