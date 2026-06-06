let hoteles = document.querySelector("#hoteles")

async function  traerHoteles() {
    try{
       let response = await fetch("./stays.json")
       let data = await response.json()
       return data
    } catch(error){
      console.log("ups",error)
    }
    
}
let dataHoteles = await traerHoteles()
traerHoteles( dataHoteles )
console.log(dataHoteles[2])


function  mostrarHoteles(grupoDeHoteles){
    for (let i = 0; i <grupoDeHoteles.length; i++) {
            hoteles.innerHTML+=`<div class="mt-6">
        <img  class="rounded-3xl" src=${grupoDeHoteles[i].photo} alt="imagen del hotel">
        <div class="mt-2">
          <div class="flex justify-between">
          <p class="text-[#a39b99] font-semibold">${grupoDeHoteles[i].type}
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
    mostrarHoteles(dataHoteles);