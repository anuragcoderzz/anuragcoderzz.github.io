document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Typed.js for hero section
    new Typed('.typed-text', {
        strings: ['Anurag Ranjan', 'Software Tester', 'Technical Recruiter'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Isotope for portfolio filtering
    const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
    });

    const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            portfolioFilters.forEach(f => f.classList.remove('filter-active'));
            this.classList.add('filter-active');

            const filterValue = this.getAttribute('data-filter');
            portfolioIsotope.arrange({ filter: filterValue });
        });
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});