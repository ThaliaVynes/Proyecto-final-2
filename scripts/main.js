/**
 * Archivo principal del proyecto.
 *
 * Este archivo se encarga de conectar todos los módulos:
 * - api.js: trae la información de los hoteles.
 * - render.js: muestra los hoteles en pantalla.
 * - buscador.js: controla la apertura y cierre del buscador.
 * - filtros.js: filtra hoteles por ubicación y huéspedes.
 * - guests.js: controla adultos y niños.
 */

import { traerHoteles } from "./api.js";
import { mostrarHoteles } from "./render.js";
import { configurarBuscador } from "./buscador.js";
import { configurarFiltros } from "./filtros.js";
import { configurarGuests } from "./guests.js";

// Trae la información de los hoteles desde stays.json.
const dataHoteles = await traerHoteles();
// Muestra todos los hoteles al cargar la página.
mostrarHoteles(dataHoteles);
// Activa el comportamiento del buscador.
configurarBuscador();
// Configura los filtros y guarda la función filtrarHoteles.
const filtrarHoteles = configurarFiltros(dataHoteles, mostrarHoteles);

// Activa los botones de huéspedes y conecta el filtro.
configurarGuests(filtrarHoteles);