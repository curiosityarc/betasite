document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Handle tab navigation
    const tabLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all tabs
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('show', 'active');
                // Reset AOS animations when switching tabs
                content.querySelectorAll('[data-aos]').forEach(el => {
                    el.classList.remove('aos-animate');
                });
            });

            // Add active class to clicked tab
            link.classList.add('active');
            
            // Show corresponding content
            const target = document.querySelector(link.dataset.bsTarget);
            if (target) {
                target.classList.add('show', 'active');
                // Trigger AOS animations in the newly active tab
                target.querySelectorAll('[data-aos]').forEach(el => {
                    el.classList.add('aos-animate');
                });
            }
        });
    });

    // Handle URL hash for direct tab access
    const hash = window.location.hash;
    if (hash) {
        const targetTab = document.querySelector(`[data-bs-target="${hash}"]`);
        if (targetTab) {
            targetTab.click();
        }
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

    // Update URL hash when switching tabs
    const tabs = document.querySelectorAll('[data-bs-toggle="pill"]');
    tabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function (e) {
            const targetId = e.target.dataset.bsTarget;
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        });
    });
}); 