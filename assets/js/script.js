// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Page Loader
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('loader').classList.add('hidden');
        }, 1000);
    });
    
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('hidden');
        // Small delay to allow display:block to apply before adding active class for animation
        setTimeout(() => {
            mobileMenu.classList.add('active');
        }, 10);
    });
    
    closeMobileMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        // Wait for animation to finish before hiding
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    });
    
    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            // Wait for animation to finish before hiding
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    });
    
    // Smooth Scrolling
    const navLinksSmooth = document.querySelectorAll('a[href^="#"]');
    navLinksSmooth.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                faqItem.querySelector('.faq-answer').style.display = 'none';
                faqItem.querySelector('.faq-question i').classList.remove('fa-chevron-up');
                faqItem.querySelector('.faq-question i').classList.add('fa-chevron-down');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
    
    // Form Submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50';
            successMessage.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-check-circle mr-3"></i>
                    <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
            `;
            document.body.appendChild(successMessage);
            
            // Remove message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
    
    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarLogo = document.querySelector('.navbar .text-xl');
    const mobileMenuBtnIcon = document.querySelector('#mobileMenuBtn i');
    
    // Set initial text colors to white
    navLinks.forEach(link => {
        link.style.color = '#ffffff';
    });
    if (navbarLogo) {
        navbarLogo.style.color = '#ffffff';
    }
    if (mobileMenuBtnIcon) {
        mobileMenuBtnIcon.style.color = '#ffffff';
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            navbar.style.backdropFilter = 'blur(10px)';
            
            // Change text colors to black when scrolled
            navLinks.forEach(link => {
                link.style.color = '#333333';
            });
            if (navbarLogo) {
                navbarLogo.style.color = '#333333';
            }
            if (mobileMenuBtnIcon) {
                mobileMenuBtnIcon.style.color = '#333333';
            }
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
            navbar.style.backdropFilter = 'none';
            
            // Change text colors to white when at top
            navLinks.forEach(link => {
                link.style.color = '#ffffff';
            });
            if (navbarLogo) {
                navbarLogo.style.color = '#ffffff';
            }
            if (mobileMenuBtnIcon) {
                mobileMenuBtnIcon.style.color = '#ffffff';
            }
        }
    });
    
    // Particles Background
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }
    
    // Button Hover Effects
    const buttons = document.querySelectorAll('.btn-glow');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Service Cards Hover Effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    // Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center z-40 transition-all duration-300';
    scrollToTopBtn.style.cssText = `
        background: var(--primary-color);
        color: white;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
            scrollToTopBtn.style.transform = 'translateY(20px)';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Active Navigation Link
    const sections = document.querySelectorAll('section[id]');
    const navLinksActive = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksActive.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Pricing Cards Animation on Hover
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(26, 115, 232, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        });
    });
    
    // Trust Items Animation
    const trustItems = document.querySelectorAll('.trust-item');
    trustItems.forEach((item, index) => {
        item.style.animationDelay = (index * 0.1) + 's';
    });
    
    // Form Input Focus Effects
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Social Links Hover Effect
    const socialLinks = document.querySelectorAll('a[href*="facebook"], a[href*="twitter"], a[href*="instagram"], a[href*="linkedin"]');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('TechNest website initialized successfully!');
});