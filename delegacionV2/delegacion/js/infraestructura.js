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
