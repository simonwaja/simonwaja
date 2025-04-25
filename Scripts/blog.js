// blog.js - JavaScript for the blog page

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
            this.querySelector('i').classList.toggle('fa-bars');
        });
    }

    // Blog search functionality
    const blogSearch = document.querySelector('.blog-search');
    if (blogSearch) {
        const searchInput = blogSearch.querySelector('input');
        const searchBtn = blogSearch.querySelector('button');
        
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value.trim());
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value.trim());
            }
        });
    }

    // Category filter functionality
    const categoryLinks = document.querySelectorAll('.blog-categories a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the category to filter by
            const category = this.textContent.trim();
            filterPostsByCategory(category);
        });
    });

    // Initialize lightbox for blog post images (if needed)
    initImageLightbox();

    // Lazy loading for images
    setupLazyLoading();

    // Smooth scrolling for anchor links
    setupSmoothScrolling();
});

// Search function
function performSearch(query) {
    if (!query) return;
    
    console.log(`Searching for: ${query}`);
    // In a real implementation, this would make an AJAX request or filter posts
    alert(`Search functionality would show results for: ${query}\nThis would be implemented with a backend in a real application.`);
    
    // For demo purposes, we'll highlight matching text
    highlightSearchTerms(query);
}

// Highlight search terms in posts
function highlightSearchTerms(query) {
    const posts = document.querySelectorAll('.post-card');
    const regex = new RegExp(query, 'gi');
    
    posts.forEach(post => {
        const textElements = post.querySelectorAll('h2, h3, p');
        let hasMatch = false;
        
        textElements.forEach(el => {
            const originalText = el.textContent;
            const highlightedText = originalText.replace(regex, match => 
                `<span class="search-highlight">${match}</span>`
            );
            
            if (highlightedText !== originalText) {
                el.innerHTML = highlightedText;
                hasMatch = true;
            }
        });
        
        // Show/hide posts based on matches
        post.style.display = hasMatch ? 'block' : 'none';
    });
}

// Filter posts by category
function filterPostsByCategory(category) {
    const posts = document.querySelectorAll('.post-card');
    const featuredPost = document.querySelector('.post-card.featured');
    
    if (category === 'All') {
        // Show all posts
        posts.forEach(post => {
            post.style.display = 'block';
        });
        return;
    }
    
    posts.forEach(post => {
        const postCategory = post.querySelector('.post-category').textContent.trim();
        
        // Always show featured post regardless of category
        if (post.classList.contains('featured')) {
            return;
        }
        
        // Show/hide based on category match
        post.style.display = postCategory === category ? 'block' : 'none';
    });
}

// Initialize image lightbox
function initImageLightbox() {
    const images = document.querySelectorAll('.post-image img');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            // In a real implementation, this would open a lightbox
            console.log('Lightbox would open for:', this.src);
        });
    });
}

// Lazy load images
function setupLazyLoading() {
    const lazyImages = document.querySelectorAll('.post-image img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            // Add data-src attribute to your images in HTML for real lazy loading
            imageObserver.observe(img);
        });
    }
}

// Smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add any additional blog-specific functionality below
// For example: reading time calculation, share buttons, etc.

// Calculate reading time (could be done server-side)
function calculateReadingTime() {
    const posts = document.querySelectorAll('.post-card');
    
    posts.forEach(post => {
        const text = post.querySelector('.post-content').textContent;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 wpm
        
        const readTimeElement = post.querySelector('.post-readtime');
        if (readTimeElement) {
            readTimeElement.textContent = `${readingTime} min read`;
        }
    });
}

// Initialize reading time calculation on page load
calculateReadingTime();
