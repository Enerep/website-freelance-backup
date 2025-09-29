document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.card');

    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('is-visible');
        }, 600 * (index + 1)); 
    });

});

//console.log("test1");