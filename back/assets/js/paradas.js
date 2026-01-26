document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.description-container');
    const cardsContainer = document.querySelector('.cards__reservas');
    const tabletBreakpoint = 848;
    let currentExpandedCard = null;

    function updateLayout() {
        if (window.innerWidth > tabletBreakpoint) {
            cardsContainer.classList.toggle('single-column', currentExpandedCard !== null);
        }
    }

    function closeCurrentCard() {
        if (currentExpandedCard) {
            const { container, descriptionBlock, resumen, showLink, hideLink } = currentExpandedCard;
            
            descriptionBlock.classList.remove('description-visible');
            descriptionBlock.classList.add('description-hidden');
            resumen.classList.remove('description-resumen-hidden');
            showLink.classList.remove('is-hidden');
            hideLink.classList.add('is-hidden');
            
            currentExpandedCard = null;
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    containers.forEach(function (container) {
        const showLink = container.querySelector('.show-link');
        const hideLink = container.querySelector('.hide-link');
        const parentLi = container.closest('li');
        const descriptionBlock = parentLi?.previousElementSibling?.querySelector('.description-hidden');
        const resumen = parentLi?.previousElementSibling?.querySelector('.description-resumen');
        const card = container.closest('.card__reservas');

        if (!descriptionBlock || !resumen || !card) return;

        showLink.addEventListener('click', function (e) {
            e.preventDefault();
            
            closeCurrentCard();
            
            currentExpandedCard = { container, descriptionBlock, resumen, showLink, hideLink, card };
            
            descriptionBlock.classList.add('description-visible');
            descriptionBlock.classList.remove('description-hidden');
            resumen.classList.add('description-resumen-hidden');
            showLink.classList.add('is-hidden');
            hideLink.classList.remove('is-hidden');
            
            updateLayout();
            
            // Scroll a la card al abrir
            const cardPosition = card.getBoundingClientRect().top;
            const offsetPosition = cardPosition + window.pageYOffset - 20;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });

        hideLink.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (currentExpandedCard && currentExpandedCard.container === container) {
                closeCurrentCard();
                updateLayout();
                scrollToTop(); // Scroll al inicio al cerrar
            }
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth <= tabletBreakpoint) {
            cardsContainer.classList.remove('single-column');
        } else {
            updateLayout();
        }
    });
});