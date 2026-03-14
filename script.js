// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Navbar & Dark Mode
const navbar = document.querySelector('.navbar');
const darkModeToggle = document.getElementById('darkModeToggle');
const icon = darkModeToggle.querySelector('i');

// Check local storage for dark mode
if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Scroll Events: Sticky Nav, Reveal, Skill Bars
function handleScroll() {
    // Sticky Navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Reveal Elements
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            
            // Trigger skill bars if they become visible
            if (reveals[i].classList.contains("skill-category")) {
                let progressBars = reveals[i].querySelectorAll('.progress-line span');
                progressBars.forEach(bar => {
                    let width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }
        }
    }
}

window.addEventListener("scroll", handleScroll);
// Trigger handleScroll once on page load
handleScroll();

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form, so no real message was sent.');
    this.reset();
});
