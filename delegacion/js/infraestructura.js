document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los botones de las tarjetas
  const botones = document.querySelectorAll(".boton-desplegar");

  botones.forEach((boton) => {
    boton.addEventListener("click", function () {
      const tarjetaActual = this.parentElement;
      const contenidoActual = tarjetaActual.querySelector(".contenido");

      // Cierra las demás tarjetas para dejar solo una abierta
      document.querySelectorAll(".tarjeta").forEach((tarjeta) => {
        if (tarjeta !== tarjetaActual) {
          tarjeta.classList.remove("activo");
          tarjeta.querySelector(".contenido").style.maxHeight = null;
        }
      });

      // Abre o cierra la tarjeta seleccionada
      if (tarjetaActual.classList.contains("activo")) {
        tarjetaActual.classList.remove("activo");
        contenidoActual.style.maxHeight = null;
      } else {
        tarjetaActual.classList.add("activo");
        contenidoActual.style.maxHeight = contenidoActual.scrollHeight + "px";
      }
    });
  });
});