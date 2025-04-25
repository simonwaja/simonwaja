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