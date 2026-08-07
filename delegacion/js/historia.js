document.addEventListener('DOMContentLoaded', () => {
  const acordeonHeaders = document.querySelectorAll('.acordeon-header');

  acordeonHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const contenido = item.querySelector('.acordeon-contenido');
      const estaActivo = item.classList.contains('activo');

      // Opcional: Cerrar las demás secciones al abrir una nueva
      document.querySelectorAll('.acordeon-item').forEach((otroItem) => {
        if (otroItem !== item) {
          otroItem.classList.remove('activo');
          const otroContenido = otroItem.querySelector('.acordeon-contenido');
          otroContenido.style.maxHeight = null;
        }
      });

      // Alternar la sección actual
      if (estaActivo) {
        item.classList.remove('activo');
        contenido.style.maxHeight = null;
      } else {
        item.classList.add('activo');
        // Asigna la altura real del texto dinámicamente para una transición fluida
        contenido.style.maxHeight = contenido.scrollHeight + 'px';
      }
    });
  });
});