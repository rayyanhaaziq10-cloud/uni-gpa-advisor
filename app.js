/* ================================
   Uni GPA Advisor - Main JavaScript
   ================================ */

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', function() {
  setActiveNavLink();
  setupFAQAccordion();
});

// Function to highlight active nav link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    
    // Check if link matches current page
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Function to setup FAQ accordion
function setupFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = this.classList.contains('active');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').classList.remove('active');
        item.querySelector('.faq-answer').classList.remove('active');
      });
      
      // Toggle current FAQ if it wasn't active
      if (!isActive) {
        this.classList.add('active');
        faqItem.querySelector('.faq-answer').classList.add('active');
      }
    });
  });
}

// Smooth scroll for anchor links
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

// Mobile menu toggle (if implemented in future)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
}
