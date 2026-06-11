/**
 * Importa la función obtenerTotalHuespedes desde guests.js.
 * Esta función devuelve la suma de adultos + niños.
 */
import { obtenerTotalHuespedes } from "./guests.js";

/**
 * Configura los filtros de búsqueda por ubicación y huéspedes.
 *
 * @param {Array} dataHoteles - Lista completa de hoteles.
 * @param {Function} mostrarHoteles - Función que pinta los hoteles en pantalla.
 * @returns {Function} Devuelve filtrarHoteles para que pueda usarse en guests.js.
 */
export function configurarFiltros(dataHoteles, mostrarHoteles) {
  // Input del buscador pequeño.
  const inputUbicacion = document.querySelector("#inputUbicacion");

  // Input del buscador grande.
  const inputUbicacionGrande = document.querySelector("#inputUbicacionGrande");

  // Contenedor donde se mostrarán las sugerencias de ubicación.
  const resultadosUbicacion = document.querySelector("#resultadosUbicacion");

  /**
   * Filtra los hoteles según ubicación y cantidad de huéspedes.
   */
  function filtrarHoteles() {
    // Toma el valor del input grande o, si está vacío, toma el valor del input pequeño.
    const textoBusqueda = inputUbicacionGrande.value.trim();

    // Obtiene el total de huéspedes desde guests.js.
    const totalHuespedes = obtenerTotalHuespedes();

    // Comienza usando la lista completa de hoteles.
    let hotelesFiltrados = dataHoteles;

    // Si el usuario escribió una ubicación, filtra por ciudad.
    if (textoBusqueda.trim() !== "") {
  hotelesFiltrados = hotelesFiltrados.filter(hotel => {
    const ubicacionCompleta = `${hotel.city}, ${hotel.country}`.toLowerCase();
    return ubicacionCompleta.includes(textoBusqueda.toLowerCase().trim());
  });
}

    // Si hay huéspedes seleccionados, muestra hoteles con capacidad suficiente.
    if (totalHuespedes > 0) {
      hotelesFiltrados = hotelesFiltrados.filter(hotel => hotel.maxGuests >= totalHuespedes
      );
    }

    // Muestra en pantalla los hoteles filtrados.
    mostrarHoteles(hotelesFiltrados);
  }

  /**
   * Muestra sugerencias de ubicación mientras el usuario escribe.
   */
  function mostrarSugerenciasUbicacion() {
    // Obtiene el texto escrito en el input grande.
    const textoBusqueda = inputUbicacionGrande.value.toLowerCase().trim();

    // Limpia sugerencias anteriores.
    resultadosUbicacion.innerHTML = "";

    // Si el input está vacío, oculta las sugerencias.
    if (textoBusqueda === "") {
      resultadosUbicacion.classList.add("hidden");
      return;
    }

    // Array para guardar ciudades únicas.
    const ciudades = [];

    // Recorre los hoteles para encontrar ciudades que coincidan con lo escrito.
    for (let i = 0; i < dataHoteles.length; i++) {
      const ciudadCompleta = `${dataHoteles[i].city}, ${dataHoteles[i].country}`;

      if (
        ciudadCompleta.toLowerCase().includes(textoBusqueda) &&
        !ciudades.includes(ciudadCompleta)
      ) {
        ciudades.push(ciudadCompleta);
      }
    }

    // Si no hay coincidencias, oculta el contenedor.
    if (ciudades.length === 0) {
      resultadosUbicacion.classList.add("hidden");
      return;
    }

    // Muestra el contenedor de sugerencias.
    resultadosUbicacion.classList.remove("hidden");

    // Pinta cada ciudad encontrada como opción.
    for (let i = 0; i < ciudades.length; i++) {
      resultadosUbicacion.innerHTML += `
        <p class="cursor-pointer mb-4 text-[#4f4f4f] opcionUbicacion">
          📍 ${ciudades[i]}
        </p>
      `;
    }

    // Selecciona las opciones creadas dinámicamente.
    const opcionesUbicacion = document.querySelectorAll(".opcionUbicacion");

    // Agrega evento click a cada sugerencia.
    opcionesUbicacion.forEach(function (opcion) {
      opcion.addEventListener("click", function () {
        const ciudadSeleccionada = opcion.textContent.replace("📍", "").trim();

        // Autocompleta los dos inputs con la ciudad seleccionada.
        inputUbicacionGrande.value = ciudadSeleccionada.split(",")[0];
        inputUbicacion.value = ciudadSeleccionada.split(",")[0];

        // Oculta las sugerencias.
        resultadosUbicacion.classList.add("hidden");

        // Ejecuta el filtro con la ciudad seleccionada.
        filtrarHoteles();
      });
    });
  }

  // Ejecuta el filtro cada vez que el usuario escribe en el buscador pequeño.
  inputUbicacion.addEventListener("input", filtrarHoteles);

  // En el buscador grande, muestra sugerencias y también filtra.
  inputUbicacionGrande.addEventListener("input", function () {
  inputUbicacion.value = inputUbicacionGrande.value; 
  
    mostrarSugerenciasUbicacion();
    filtrarHoteles();
  });

  // Devuelve la función para que guests.js pueda usarla al cambiar huéspedes.
  return filtrarHoteles;
}