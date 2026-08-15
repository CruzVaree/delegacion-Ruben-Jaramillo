document.addEventListener("DOMContentLoaded", function () {
  // Coordenadas 
  const lat = 18.834375617287048;
  const lng = -99.23937601976901;
  // Inicializar el mapa centrado en la ubicación
  const map = L.map("map").setView([lat, lng], 17);

  // Capa de Mapa Satelital
  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 25,
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    },
  ).addTo(map);

  // Añadir marcador de punto de la  delegacion
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      "<b>Delegación Rubén Jaramillo</b><br>Mariano Matamoros esq. Niño Artillero",
    )
    .openPopup();
});
