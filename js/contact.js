const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const messageDiv = document.getElementById('contactMessage');

        // Simple validation
        if (!name || !email || !subject || !message) {
            showMessage('Veuillez remplir tous les champs', 'error');
            return;
        }

        // Simulate form submission
        showMessage('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log('Contact form submitted:', { name, email, subject, message });
    });
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('contactMessage');
    if (messageDiv) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        
        // Hide after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

