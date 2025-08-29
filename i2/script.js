document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelector('.arrow');

    if (arrow) {
        arrow.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});