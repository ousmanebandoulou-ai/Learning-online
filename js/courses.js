// Sample courses data - Mathématiques, Physique et Chimie
const courses = [
    // Mathématiques
    {
        id: 1,
        title: 'Mathématiques - Niveau Terminale',
        description: 'Cours complet de mathématiques pour le niveau terminale avec exercices pratiques, résolutions de problèmes et préparation aux examens.',
        category: 'Mathématiques',
        level: 'Terminale',
        price: 15000,
        duration: 40,
        isOnline: true,
        isHome: true
    },
    {
        id: 2,
        title: 'Mathématiques - Niveau Première',
        description: 'Cours de mathématiques pour le niveau première avec explications détaillées et exercices progressifs.',
        category: 'Mathématiques',
        level: 'Première',
        price: 14000,
        duration: 35,
        isOnline: true,
        isHome: true
    },
    {
        id: 3,
        title: 'Mathématiques - Niveau Seconde',
        description: 'Cours de mathématiques pour le niveau seconde avec bases solides et méthodes de résolution.',
        category: 'Mathématiques',
        level: 'Seconde',
        price: 13000,
        duration: 30,
        isOnline: true,
        isHome: true
    },
    {
        id: 4,
        title: 'Mathématiques - Algèbre Avancée',
        description: 'Cours approfondi d\'algèbre avec équations complexes, polynômes et systèmes d\'équations.',
        category: 'Mathématiques',
        level: 'Avancé',
        price: 18000,
        duration: 45,
        isOnline: true,
        isHome: false
    },
    // Physique
    {
        id: 5,
        title: 'Physique - Mécanique',
        description: 'Cours approfondi de mécanique avec cinématique, dynamique, énergie et résolutions d\'exercices complexes.',
        category: 'Physique',
        level: 'Terminale',
        price: 16000,
        duration: 35,
        isOnline: true,
        isHome: true
    },
    {
        id: 6,
        title: 'Physique - Électricité et Magnétisme',
        description: 'Maîtrisez l\'électricité et le magnétisme avec circuits électriques, champs magnétiques et induction.',
        category: 'Physique',
        level: 'Terminale',
        price: 17000,
        duration: 38,
        isOnline: true,
        isHome: true
    },
    {
        id: 7,
        title: 'Physique - Optique et Ondes',
        description: 'Cours complet sur l\'optique géométrique, les ondes mécaniques et électromagnétiques avec expériences.',
        category: 'Physique',
        level: 'Première',
        price: 15000,
        duration: 32,
        isOnline: true,
        isHome: true
    },
    {
        id: 8,
        title: 'Physique - Thermodynamique',
        description: 'Apprenez les principes de la thermodynamique, les gaz parfaits et les transformations thermodynamiques.',
        category: 'Physique',
        level: 'Avancé',
        price: 18000,
        duration: 40,
        isOnline: true,
        isHome: false
    },
    // Chimie
    {
        id: 9,
        title: 'Chimie - Chimie Organique',
        description: 'Maîtrisez la chimie organique avec les composés carbonés, réactions organiques et mécanismes réactionnels.',
        category: 'Chimie',
        level: 'Terminale',
        price: 17000,
        duration: 36,
        isOnline: true,
        isHome: true
    },
    {
        id: 10,
        title: 'Chimie - Chimie Générale',
        description: 'Cours complet de chimie générale avec atomes, liaisons chimiques, équilibres et réactions acido-basiques.',
        category: 'Chimie',
        level: 'Première',
        price: 15000,
        duration: 34,
        isOnline: true,
        isHome: true
    },
    {
        id: 11,
        title: 'Chimie - Cinétique et Équilibres',
        description: 'Étudiez la cinétique chimique, les équilibres chimiques et les facteurs influençant les réactions.',
        category: 'Chimie',
        level: 'Terminale',
        price: 16000,
        duration: 35,
        isOnline: true,
        isHome: true
    },
    {
        id: 12,
        title: 'Chimie - Solutions et Dosages',
        description: 'Apprenez à préparer des solutions, effectuer des dosages et maîtriser les calculs de concentrations.',
        category: 'Chimie',
        level: 'Seconde',
        price: 14000,
        duration: 30,
        isOnline: true,
        isHome: true
    }
];

// Render courses
function renderCourses(filter = 'all') {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';

    let filteredCourses = courses;

    if (filter !== 'all') {
        if (filter === 'mathematiques') {
            filteredCourses = courses.filter(course => 
                course.category.toLowerCase() === 'mathématiques'
            );
        } else if (filter === 'physique') {
            filteredCourses = courses.filter(course => 
                course.category.toLowerCase() === 'physique'
            );
        } else if (filter === 'chimie') {
            filteredCourses = courses.filter(course => 
                course.category.toLowerCase() === 'chimie'
            );
        } else if (filter === 'online') {
            filteredCourses = courses.filter(course => course.isOnline);
        } else if (filter === 'home') {
            filteredCourses = courses.filter(course => course.isHome);
        }
    }

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.setAttribute('data-online', course.isOnline);
        courseCard.setAttribute('data-home', course.isHome);

        courseCard.innerHTML = `
            <div class="course-image">
                <i class="fas fa-book"></i>
            </div>
            <div class="course-content">
                <div class="course-badges">
                    <span class="badge badge-category">${course.category}</span>
                    ${course.isOnline ? '<span class="badge badge-online">En Ligne</span>' : ''}
                    ${course.isHome ? '<span class="badge badge-home">À Domicile</span>' : ''}
                </div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-info">
                    <div class="course-price">${course.price.toLocaleString()} FCFA</div>
                    <div class="course-duration">
                        <i class="fas fa-clock"></i>
                        ${course.duration}h
                    </div>
                </div>
                <div class="course-actions">
                    <a href="course-detail.html?id=${course.id}" class="btn-course btn-view">Voir Détails</a>
                    ${course.isHome ? `<a href="booking.html?courseId=${course.id}" class="btn-course btn-book">Réserver</a>` : ''}
                </div>
            </div>
        `;

        coursesGrid.appendChild(courseCard);
    });
}

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderCourses(filter);
        });
    });

    // Check URL parameter for filter
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'online' || type === 'home') {
        const filterBtn = document.querySelector(`[data-filter="${type}"]`);
        if (filterBtn) {
            filterBtn.click();
        }
    }
});

