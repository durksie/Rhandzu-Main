function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function openModal() {
    document.getElementById('missionModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('missionModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('missionModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});