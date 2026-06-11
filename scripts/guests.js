// Variables que guardan la cantidad de adultos y niños seleccionados. 
// Se usa "ninos" sin ñ para evitar problemas en nombres de variables.
let adultos = 0;
let ninos = 0;

/**
 * Devuelve el total de huéspedes seleccionados.
 * Se usa "export" porque filtros.js necesita conocer cuántos huéspedes hay para poder filtrar los hoteles.
 */
export function obtenerTotalHuespedes() {
  return adultos + ninos;
}
/** * Configura los botones de huéspedes. 
 * 
 * Esta función: 
 * 1. Suma o resta adultos. 
 * 2. Suma o resta niños. 
 * 3. Actualiza los contadores en pantalla. 
 * 4. Ejecuta filtrarHoteles() cada vez que cambia la cantidad de huéspedes. 
 * 
 * @param {Function} filtrarHoteles - Función que filtra los hoteles. */

export function configurarGuests(filtrarHoteles) {
  // Texto donde se muestra el total de huéspedes.
  let textoHuespedes = document.querySelector("#textoHuespedes");

  let menosAdultos = document.querySelector("#menosAdultos");
  let contadorAdultos = document.querySelector("#contadorAdultos");
  let masAdultos = document.querySelector("#masAdultos");

  let menosNinos = document.querySelector("#menosNinos");
  let contadorNinos = document.querySelector("#contadorNinos");
  let masNinos = document.querySelector("#masNinos");
 /**
  * Actualiza en pantalla la cantidad de adultos, niños 
  * y el total de huéspedes seleccionados. 
  */
  function actualizarHuespedes() {
    contadorAdultos.textContent = adultos;
    contadorNinos.textContent = ninos;

    let totalHuespedes = adultos + ninos;

    if (totalHuespedes === 0) {
      textoHuespedes.textContent = "Add guests";
    } else {
      textoHuespedes.textContent = totalHuespedes + " guests";
    }
  }
  // Suma un adulto.
  masAdultos.addEventListener("click", function () {
    adultos++;
    actualizarHuespedes();
    filtrarHoteles();
  });
  // Resta un adulto, pero evita que el contador baje de 0.
  menosAdultos.addEventListener("click", function () {
    if (adultos > 0) {
      adultos--;
      actualizarHuespedes();
      filtrarHoteles();
    }
  });
  // Suma un niño.
  masNinos.addEventListener("click", function () {
    ninos++;
    actualizarHuespedes();
    filtrarHoteles();
  });
  // Resta un niño, pero evita que el contador baje de 0.
  menosNinos.addEventListener("click", function () {
    if (ninos > 0) {
      ninos--;
      actualizarHuespedes();
      filtrarHoteles();
    }
  });
}