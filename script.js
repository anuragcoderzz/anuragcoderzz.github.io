document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for name
    const nameElement = document.getElementById('name');
    const taglineElement = document.getElementById('tagline');
    const nameText = nameElement.textContent;
    const taglineText = taglineElement.textContent;
    nameElement.textContent = '';
    taglineElement.textContent = '';

    let i = 0;
    function typeName() {
        if (i < nameText.length) {
            nameElement.textContent += nameText.charAt(i);
            i++;
            setTimeout(typeName, 100);
        } else {
            i = 0;
            typeTagline();
        }
    }

    function typeTagline() {
        if (i < taglineText.length) {
            taglineElement.textContent += taglineText.charAt(i);
            i++;
            setTimeout(typeTagline, 50);
        }
    }

    typeName();

    // Scroll animation for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});

// Add visible class for animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .hidden {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease-out;
    }
    .visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(styleSheet);