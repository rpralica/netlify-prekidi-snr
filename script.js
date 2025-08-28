

        // Funkcija za učitavanje i aktiviranje navigacije
function loadAndActivateNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Aktiviranje trenutne stranice
            const currentPath = window.location.pathname;
            const navLinks = document.querySelectorAll('nav a');

            navLinks.forEach(link => {
                if (currentPath.endsWith(link.getAttribute('href'))) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Poziv funkcije kada se stranica učita
document.addEventListener('DOMContentLoaded', loadAndActivateNavbar);
