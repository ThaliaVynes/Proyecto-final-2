 
  let hoteles = document.querySelector("#hoteles")

 export function  mostrarHoteles(grupoDeHoteles){
       hoteles.innerHTML = "";
    for (let i = 0; i <grupoDeHoteles.length; i++) {
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
     
      