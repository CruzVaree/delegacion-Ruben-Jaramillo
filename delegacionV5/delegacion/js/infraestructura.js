document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("menu-abierto");

      const icono = menuToggle.querySelector("i");

      if (mainNav.classList.contains("menu-abierto")) {
        icono.classList.remove("fa-bars");
        icono.classList.add("fa-xmark");

        menuToggle.setAttribute("aria-label", "Cerrar menú");
      } else {
        icono.classList.remove("fa-xmark");
        icono.classList.add("fa-bars");

        menuToggle.setAttribute("aria-label", "Abrir menú");
      }
    });

    const enlaces = mainNav.querySelectorAll("a");

    enlaces.forEach((enlace) => {
      enlace.addEventListener("click", () => {
        mainNav.classList.remove("menu-abierto");

        const icono = menuToggle.querySelector("i");

        icono.classList.remove("fa-xmark");
        icono.classList.add("fa-bars");

        menuToggle.setAttribute("aria-label", "Abrir menú");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        mainNav.classList.remove("menu-abierto");

        const icono = menuToggle.querySelector("i");

        icono.classList.remove("fa-xmark");
        icono.classList.add("fa-bars");

        menuToggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  const botones = document.querySelectorAll(".boton-desplegar");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const tarjeta = boton.parentElement;
      const contenido = tarjeta.querySelector(".contenido");
      const estaAbierta = tarjeta.classList.contains("activo");

      document.querySelectorAll(".tarjeta").forEach((otraTarjeta) => {
        otraTarjeta.classList.remove("activo");

        const otroContenido = otraTarjeta.querySelector(".contenido");

        otroContenido.style.maxHeight = null;
      });

      if (!estaAbierta) {
        tarjeta.classList.add("activo");
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      }
    });
  });
});
