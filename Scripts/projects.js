document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        projectItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
    
    // Animate projects on scroll
    const animateProjects = function() {
      const projects = document.querySelectorAll('.project-item');
      
      projects.forEach((project, index) => {
        const projectPosition = project.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (projectPosition < screenPosition) {
          project.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        }
      });
    };
    
    // Initial animation
    animateProjects();
    
    // Animate on scroll
    window.addEventListener('scroll', animateProjects);
  });

<script>
        // Mobile Navigation Toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            const navList = document.querySelector('nav ul');
            
            mobileMenu.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                navList.classList.toggle('active');
            });
            
            // Close menu when clicking on a link (for single page applications)
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        mobileMenu.setAttribute('aria-expanded', 'false');
                        navList.classList.remove('active');
                    }
                });
            });
            
            // Project filter functionality
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectItems = document.querySelectorAll('.project-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active state
                    filterButtons.forEach(btn => {
                        btn.classList.remove('active');
                        btn.setAttribute('aria-selected', 'false');
                    });
                    this.classList.add('active');
                    this.setAttribute('aria-selected', 'true');
                    
                    // Filter projects
                    const filterValue = this.getAttribute('data-filter');
                    projectItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });
    </script>
