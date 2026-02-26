<?php

namespace App\Form;

use App\Entity\Etapa;
use App\Repository\CiudadRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EtapaFormType extends AbstractType
{
    private CiudadRepository $ciudadRepository;

    public function __construct(CiudadRepository $ciudadRepository)
    {
        $this->ciudadRepository = $ciudadRepository;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('diaNumero', IntegerType::class, [
                'label' => 'Día Nº',
                'attr' => ['min' => 1],
            ])
            ->add('titulo', TextType::class, [
                'label' => 'Título de la etapa',
            ])
            ->add('descripcion', TextareaType::class, [
                'label' => 'Descripción',
                'attr' => ['rows' => 4],
            ])
            ->add('transporte', TextType::class, [
                'label' => 'Transporte (opcional)',
                'required' => false,
            ]);

        // Campo País usando CountryType de Symfony (lista completa de países)
        $builder->add('pais', CountryType::class, [
            'label' => 'País',
            'placeholder' => 'Selecciona un país',
            'attr' => ['class' => 'country-select'],
        ]);

        // Event Listener para Ciudad - obtiene ciudades de la BD
        $formModifier = function (FormInterface $form, ?string $countryIso2 = null) {
            $choices = [];
            if ($countryIso2) {
                $ciudades = $this->ciudadRepository->findByPais($countryIso2);
                foreach ($ciudades as $ciudad) {
                    $choices[$ciudad->getNombre()] = $ciudad->getNombre();
                }
            }

            $form->add('ciudad', ChoiceType::class, [
                'label' => 'Ciudad',
                'placeholder' => 'Selecciona una ciudad',
                'choices' => $choices,
                'required' => false,
            ]);
        };

        $builder->addEventListener(
            FormEvents::PRE_SET_DATA,
            function (FormEvent $event) use ($formModifier) {
                /** @var Etapa|null $data */
                $data = $event->getData();
                $formModifier($event->getForm(), $data?->getPais());
            }
        );

        $builder->get('pais')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) use ($formModifier) {
                $countryIso2 = $event->getForm()->getData();
                $formModifier($event->getForm()->getParent(), $countryIso2);
            }
        );
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Etapa::class,
        ]);
    }
}
