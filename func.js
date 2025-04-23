document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark/Light Theme Toggle
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    // Basic Scroll Animations (Example - Fade In)
    const sections = document.querySelectorAll('section'); // Or specific sections
    const fadeInOptions = {
        threshold: 0.2 // Adjust as needed
    };

    const fadeInOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add a class to trigger the animation
                observer.unobserve(entry.target); // Stop observing after animating
            }
        });
    }, fadeInOptions);

    sections.forEach(section => {
        fadeInOnScroll.observe(section);
    });

      // Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon'); // Make sure this ID exists in your HTML
    const navlist = document.querySelector('nav ul'); // Adjust selector if needed

    if (menuIcon && navlist) {
        menuIcon.addEventListener('click', () => {
            navlist.classList.toggle('active');
        });
    }
});
