// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

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

    // Form submission handling
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                involvement: document.getElementById('involvement').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the data to your server
            console.log('Form submitted:', formData);
            
            // Show success message (replace with your actual success handling)
            alert('Thank you for your interest! We will get back to you soon.');
            form.reset();
        });
    }

    // Dynamic form field handling
    const involvementSelect = document.getElementById('involvement');
    if (involvementSelect) {
        involvementSelect.addEventListener('change', function() {
            const messageField = document.getElementById('message');
            let placeholder = 'Please tell us about yourself and your interest in joining Curiosity Arc...';
            
            switch(this.value) {
                case 'researcher':
                    placeholder = 'Please tell us about your research experience and areas of interest...';
                    break;
                case 'partner':
                    placeholder = 'Please tell us about your organization and potential collaboration opportunities...';
                    break;
                case 'supporter':
                    placeholder = 'Please tell us how you would like to support our mission...';
                    break;
            }
            
            messageField.placeholder = placeholder;
        });
    }
}); 