document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});
