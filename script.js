
        // // Funkcija za učitavanje i aktiviranje navigacije
        // function loadAndActivateNavbar() {
        //     fetch('navbar.html')
        //         .then(response => response.text())
        //         .then(data => {
        //             document.getElementById('navbar-placeholder').innerHTML = data;

        //             // Logika za aktiviranje linka
        //             const currentPath = window.location.pathname; // Dobijamo putanju npr. "/home.html"
        //             const navLinks = document.querySelectorAll('nav a'); // Dohvatamo sve navigacione linkove

        //             navLinks.forEach(link => {
        //                 // Proveravamo da li href linka odgovara putanji trenutne stranice
        //                 // Koristimo .endsWith() jer currentPath može uključivati i root direktorijum
        //                 if (currentPath.endsWith(link.getAttribute('href'))) {
        //                     link.classList.add('active'); // Dodajemo klasu 'active'
        //                 } else {
        //                     link.classList.remove('active'); // Uklanjamo klasu 'active' sa ostalih
        //                 }
        //             });
        //         })
        //         .catch(error => console.error('Error loading navbar:', error));
        // }

        // // Pozivamo funkciju kada se stranica učita
        // document.addEventListener('DOMContentLoaded', loadAndActivateNavbar);

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
