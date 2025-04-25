document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.querySelector('.blog-search input');
    const searchButton = document.querySelector('.blog-search button');
    
    searchButton.addEventListener('click', function(e) {
      e.preventDefault();
      performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
      }
    });
    
    function performSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm) {
        // Implement your search logic here
        console.log('Searching for:', searchTerm);
        // Filter posts based on search term
      }
    }
    
    // Category filtering
    const categoryLinks = document.querySelectorAll('.blog-categories a');
    
    categoryLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        categoryLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        const category = this.textContent.trim();
        if (category === 'All') {
          // Show all posts
          document.querySelectorAll('.post-card').forEach(post => {
            post.style.display = 'block';
          });
        } else {
          // Filter posts by category
          document.querySelectorAll('.post-card').forEach(post => {
            const postCategory = post.querySelector('.post-category').textContent.trim();
            post.style.display = postCategory === category ? 'block' : 'none';
          });
        }
      });
    });
    
    // Mobile menu toggle (if not in main.js)
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
  });

document.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.nav-links')) {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});
