// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script pour la vidéo
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Optionnel: Lecture automatique en mute
        video.muted = true;
        video.setAttribute('playsinline', '');
        
        // Gestion du placeholder pendant le chargement
        video.addEventListener('waiting', () => {
            video.previousElementSibling.style.display = 'block';
        });
        
        video.addEventListener('canplay', () => {
            video.previousElementSibling.style.display = 'none';
        });
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    // For this example, we'll just log it and show an alert
    console.log({name, email, phone, subject, message});
    
    alert('Merci pour votre message, ' + name + '! Nous vous contacterons bientôt.');
    
    // Reset form
    this.reset();
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        const productPrice = this.parentElement.querySelector('.product-price').textContent;
        
        alert(productName + ' (' + productPrice + ') a été ajouté à votre panier.');
        
        // Here you would typically add the product to a cart array or send to server
        // For this example, we'll just increment a cart counter if it exists
        const cartCounter = document.querySelector('.cart-counter');
        if (cartCounter) {
            let count = parseInt(cartCounter.textContent) || 0;
            cartCounter.textContent = count + 1;
        }
    });
});

// Mobile menu toggle (could be added if needed)
// You would need to add a hamburger menu icon for mobile first