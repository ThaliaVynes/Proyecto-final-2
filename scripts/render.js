 /**
 * Selecciona el contenedor donde se mostrarán las cards de hoteles.
 * En el HTML existe una section con id="hoteles".
 */
  const hoteles = document.querySelector("#hoteles")

  /**
 * Función que renderiza/muestra las cards de hoteles en la página.
 *
 * Se usa "export" porque esta función será utilizada en main.js
 * y también por el filtro cuando necesite mostrar hoteles filtrados.
 *
 * @param {Array} grupoDeHoteles - Array de hoteles que se van a mostrar.
 */
 export function  mostrarHoteles(grupoDeHoteles){
  // Limpia el contenedor antes de pintar nuevas cards.
       hoteles.innerHTML = "";
  // Recorre el array de hoteles.
    for (let i = 0; i <grupoDeHoteles.length; i++) {
      // Agrega una card por cada hotel.
            hoteles.innerHTML+=
            `<div class="mt-6">
        <img  class="rounded-3xl w-full h-60 object-cover" src=${grupoDeHoteles[i].photo} alt="imagen del hotel">
        <div class="mt-2">
          <div class="flex justify-between">
          <p class="text-[#a39b99] font-semibold">${grupoDeHoteles[i].superHost 
              ? `<span class="border border-black rounded-xl px-2 py-1 text-xs  mr-2 text-black">SUPER HOST</span>` 
              : ""} ${grupoDeHoteles[i].type}
           ${grupoDeHoteles[i].beds ? `.${grupoDeHoteles[i].beds} beds` : ""}</p>
          <div class="flex items-center gap-1">
          <img class=" w-5 fill-orange-500" src="./imagenes/icon/star.svg" alt="Estrella">
          <span class="text-[#a39b99] font-semibold">${grupoDeHoteles[i].rating}</span>
          </div>
          </div>
          <p class="text-[#313130] font-semibold mt-3 ">${grupoDeHoteles[i].title}</p>

        </div>
      </div>`

    }
    }      
     
      