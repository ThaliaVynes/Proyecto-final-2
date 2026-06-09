export function configurarBuscador() {
  let buscadorPequeno = document.querySelector("#buscadorPequeno");
  let buscadorGrande = document.querySelector("#buscadorGrande");
  let cerrarBuscador = document.querySelector("#cerrarBuscador");

  function mostrarBuscadorGrande() {
    buscadorGrande.classList.remove("hidden");
  }

  function cerrarBuscadorGrande() {
    buscadorGrande.classList.add("hidden");
  }

  buscadorPequeno.addEventListener("click", mostrarBuscadorGrande);
  cerrarBuscador.addEventListener("click", cerrarBuscadorGrande);

  let zonaGuests = document.querySelector("#zonaGuests");
  let panelGuests = document.querySelector("#panelGuests");
  let resultadosUbicacion = document.querySelector("#resultadosUbicacion");

  function mostrarPanelGuests() {
    panelGuests.classList.remove("hidden");
    resultadosUbicacion.classList.add("hidden");
  }

  zonaGuests.addEventListener("click", mostrarPanelGuests);
}