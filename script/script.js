function loadAndActivateNavbar() {
  fetch('./components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      const currentPath = window.location.pathname.split('/').pop(); // samo ime fajla
      const navLinks = document.querySelectorAll('nav a');

      let activeSet = false;

      navLinks.forEach((link, index) => {
        const linkHref = link.getAttribute('href');
        if (currentPath === linkHref) {
          link.classList.add('active');
          activeSet = true;
        } else {
          link.classList.remove('active');
        }
      });

      // Ako nijedan link nije match, stavi active na prvi tab
      if (!activeSet && navLinks.length > 0) {
        navLinks[0].classList.add('active');
      }
    })
    .catch(error => console.error('Error loading navbar:', error));
}

document.addEventListener('DOMContentLoaded', loadAndActivateNavbar);
