document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".acordeon-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const contenido = item.querySelector(".acordeon-contenido");
      const activo = item.classList.contains("activo");

      document.querySelectorAll(".acordeon-item").forEach((otroItem) => {
        if (otroItem !== item) {
          otroItem.classList.remove("activo");

          const otroContenido = otroItem.querySelector(".acordeon-contenido");

          otroContenido.style.maxHeight = null;
        }
      });

      if (activo) {
        item.classList.remove("activo");
        contenido.style.maxHeight = null;
      } else {
        item.classList.add("activo");
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      }
    });
  });

  window.addEventListener("resize", () => {
    const activo = document.querySelector(
      ".acordeon-item.activo .acordeon-contenido",
    );

    if (activo) {
      activo.style.maxHeight = activo.scrollHeight + "px";
    }
  });
});

//siganme en github como CruzVaree JAJAJA
//La voy a adaptar a celulares 15/08/6 vamos a ver cuanto me toma esto
