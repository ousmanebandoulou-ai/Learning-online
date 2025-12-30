// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        // Simple validation
        if (!email || !password) {
            showError('Veuillez remplir tous les champs');
            return;
        }

        // Simulate login (in real app, this would be an API call)
        // Store user data in localStorage
        const userData = {
            email: email,
            name: email.split('@')[0],
            role: 'student'
        };

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to dashboard or home
        window.location.href = 'dashboard.html';
    });
}

// Register Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const role = document.getElementById('role').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;

        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');

        // Validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            showError('Veuillez remplir tous les champs obligatoires');
            return;
        }

        if (password !== confirmPassword) {
            showError('Les mots de passe ne correspondent pas');
            return;
        }

        if (password.length < 6) {
            showError('Le mot de passe doit contenir au moins 6 caractères');
            return;
        }

        if (!terms) {
            showError('Veuillez accepter les conditions d\'utilisation');
            return;
        }

        // Simulate registration (in real app, this would be an API call)
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            role: role
        };

        // Store in localStorage (simulating database)
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.find(u => u.email === email);
        
        if (userExists) {
            showError('Cet email est déjà utilisé');
            return;
        }

        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', 'true');

        // Show success message
        errorMessage.style.display = 'none';
        successMessage.textContent = 'Inscription réussie ! Redirection...';
        successMessage.style.display = 'block';

        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    });
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Hide after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
}

// Check if user is logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // Update navigation
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            // Add logout button or update menu
        }
    }
}

// Initialize auth check
document.addEventListener('DOMContentLoaded', checkAuth);

