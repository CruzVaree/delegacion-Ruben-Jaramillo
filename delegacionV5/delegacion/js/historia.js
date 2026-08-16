document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".acordeon-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const contenido = item.querySelector(".acordeon-contenido");
      const activo = item.classList.contains("activo");

      document.querySelectorAll(".acordeon-item").forEach((otroItem) => {
        if (otroItem !== item) {
          otroItem.classList.remove("activo");

          const otroContenido =
            otroItem.querySelector(".acordeon-contenido");

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

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("menu-abierto");

    const icono = menuToggle.querySelector("i");

    if (nav.classList.contains("menu-abierto")) {
      icono.classList.remove("fa-bars");
      icono.classList.add("fa-xmark");
    } else {
      icono.classList.remove("fa-xmark");
      icono.classList.add("fa-bars");
    }
  });

  nav.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      nav.classList.remove("menu-abierto");

      const icono = menuToggle.querySelector("i");

      icono.classList.remove("fa-xmark");
      icono.classList.add("fa-bars");
    });
  });

  window.addEventListener("resize", () => {
    const activo = document.querySelector(
      ".acordeon-item.activo .acordeon-contenido"
    );

    if (activo) {
      activo.style.maxHeight = activo.scrollHeight + "px";
    }

    if (window.innerWidth > 900) {
      nav.classList.remove("menu-abierto");

      const icono = menuToggle.querySelector("i");

      icono.classList.remove("fa-xmark");
      icono.classList.add("fa-bars");
    }
  });
});

//siganme en github como CruzVaree JAJAJA
//La voy a adaptar a celulares 15/08/6 vamos a ver cuanto me toma esto
