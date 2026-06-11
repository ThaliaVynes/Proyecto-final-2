/** 
 * Función asincrónica que obtiene la información de los hoteles 
 * desde el archivo stays.json. 
 * 
* Se usa "export" porque esta función será utilizada en main.js.
 */
//  "await": espera hasta que termine esta acción
 export async function  traerHoteles() {
    try{
      // fetch() solicita el archivo JSON que contiene la información de los hoteles.
       const response = await fetch("./stays.json")
       // response.json() convierte la respuesta del archivo JSON en datos JavaScript.
       const data = await response.json()
      // return Devuelve los hoteles para poder usarlos en otra parte del proyecto.
       return data
       // try   → intenta hacer esto catch → si falla, captura el error
    } catch(error){
      console.log("ups",error)
    }
    
}