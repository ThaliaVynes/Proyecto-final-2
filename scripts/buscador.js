/**
 * Esta función:
 * 1. Abre el buscador grande al hacer click en el buscador pequeño.
 * 2. Cierra el buscador grande al hacer click en la X.
 * 3. Muestra el panel de huéspedes al hacer click en la zona Guests.
 */
export function configurarBuscador() {
   // Selecciona el buscador pequeño que aparece en el header.
  const buscadorPequeno = document.querySelector("#buscadorPequeno");
   // Selecciona el panel grande de búsqueda.
  const buscadorGrande = document.querySelector("#buscadorGrande");
  // Selecciona el botón X para cerrar el panel grande.
  const cerrarBuscador = document.querySelector("#cerrarBuscador");

  const botonBuscarGrande = document.querySelector("#botonBuscarGrande");

  botonBuscarGrande.addEventListener("click", cerrarBuscadorGrande);

  

  /**
   * Muestra el buscador grande quitando la clase "hidden".
   */
  function mostrarBuscadorGrande() {
    buscadorGrande.classList.remove("hidden");
  }
  /**
   * Oculta el buscador grande agregando la clase "hidden".
   */
  function cerrarBuscadorGrande() {
    buscadorGrande.classList.add("hidden");
  }
   // Cuando se hace click en el buscador pequeño, se abre el buscador grande.
  buscadorPequeno.addEventListener("click", mostrarBuscadorGrande);
  // Cuando se hace click en la X, se cierra el buscador grande.
  cerrarBuscador.addEventListener("click", cerrarBuscadorGrande);

  // Selecciona la zona Guests dentro del buscador grande.
  let zonaGuests = document.querySelector("#zonaGuests");
   // Selecciona el panel donde están los botones de adultos y niños.
  let panelGuests = document.querySelector("#panelGuests");
   // Selecciona el contenedor de resultados/sugerencias de ubicación.
  let resultadosUbicacion = document.querySelector("#resultadosUbicacion");
  
   /**
   * Muestra el panel de huéspedes y oculta las sugerencias de ubicación.
   */
  function mostrarPanelGuests() {
    panelGuests.classList.remove("hidden");
    resultadosUbicacion.classList.add("hidden");
  }
   // Cuando se hace click en Guests, se muestra el panel de adultos y niños.
  zonaGuests.addEventListener("click", mostrarPanelGuests);
}