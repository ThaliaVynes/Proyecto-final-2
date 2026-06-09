import { traerHoteles } from "./api.js";
import { mostrarHoteles } from "./render.js";
import { configurarBuscador } from "./buscador.js";
import { configurarFiltros } from "./filtros.js";
import { configurarGuests } from "./guests.js";

let dataHoteles = await traerHoteles();

mostrarHoteles(dataHoteles);

configurarBuscador();

let filtrarHoteles = configurarFiltros(dataHoteles, mostrarHoteles);

configurarGuests(filtrarHoteles);