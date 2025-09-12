document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.card');

    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('is-visible');
        }, 400 * (index + 1)); 
    });

});