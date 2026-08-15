document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('activo');
    });

    // Cerrar menú al presionar un enlace en móviles
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('activo');
      });
    });
  }
});