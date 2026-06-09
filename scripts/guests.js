let adultos = 0;
let ninos = 0;

export function obtenerTotalHuespedes() {
  return adultos + ninos;
}

export function configurarGuests(filtrarHoteles) {
  let textoHuespedes = document.querySelector("#textoHuespedes");

  let menosAdultos = document.querySelector("#menosAdultos");
  let contadorAdultos = document.querySelector("#contadorAdultos");
  let masAdultos = document.querySelector("#masAdultos");

  let menosNinos = document.querySelector("#menosNinos");
  let contadorNinos = document.querySelector("#contadorNinos");
  let masNinos = document.querySelector("#masNinos");

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

  masAdultos.addEventListener("click", function () {
    adultos++;
    actualizarHuespedes();
    filtrarHoteles();
  });

  menosAdultos.addEventListener("click", function () {
    if (adultos > 0) {
      adultos--;
      actualizarHuespedes();
      filtrarHoteles();
    }
  });

  masNinos.addEventListener("click", function () {
    ninos++;
    actualizarHuespedes();
    filtrarHoteles();
  });

  menosNinos.addEventListener("click", function () {
    if (ninos > 0) {
      ninos--;
      actualizarHuespedes();
      filtrarHoteles();
    }
  });
}