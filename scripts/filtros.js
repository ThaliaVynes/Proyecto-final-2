import { obtenerTotalHuespedes } from "./guests.js";

export function configurarFiltros(dataHoteles, mostrarHoteles) {
  let inputUbicacion = document.querySelector("#inputUbicacion");
  let inputUbicacionGrande = document.querySelector("#inputUbicacionGrande");

  function filtrarHoteles() {
    let textoBusqueda = inputUbicacionGrande.value || inputUbicacion.value;
    let totalHuespedes = obtenerTotalHuespedes();

    let hotelesFiltrados = dataHoteles;

    if (textoBusqueda.trim() !== "") {
      hotelesFiltrados = hotelesFiltrados.filter(
        hotel => hotel.city.toLowerCase().includes(textoBusqueda.toLowerCase().trim())
      );
    }

    if (totalHuespedes > 0) {
      hotelesFiltrados = hotelesFiltrados.filter(
        hotel => hotel.maxGuests >= totalHuespedes
      );
    }

    mostrarHoteles(hotelesFiltrados);
  }

  inputUbicacion.addEventListener("input", filtrarHoteles);
  inputUbicacionGrande.addEventListener("input", filtrarHoteles);

  return filtrarHoteles;
}
