// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Function for Discover More button
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Add animation on scroll for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards for animation
document.querySelectorAll('.project-card, .skill-card').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(element);
});

// Add hover effect to project links
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('mouseover', function() {
    this.style.transform = 'translateX(5px)';
  });
  link.addEventListener('mouseout', function() {
    this.style.transform = 'translateX(0)';
  });
});

// Mobile menu toggle functionality (if you add mobile menu)
const navLinks = document.querySelector('.nav-links');
const menuButton = document.querySelector('.menu-toggle');

if (menuButton) {
  menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
}

// Add scroll to top button functionality
const scrollTopButton = document.querySelector('.scroll-top-btn');
if (scrollTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });
  
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Log page load
console.log('Portfolio loaded successfully!');

// Initialize tooltips or any other features
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is fully loaded and parsed');
  
  // You can add more initialization code here
  // For example: initialize tooltips, load external data, etc.
});

// Prevent default form submission if contact form exists
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}
