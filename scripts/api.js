

 export async function  traerHoteles() {
    try{
       let response = await fetch("./stays.json")
       let data = await response.json()
       return data
    } catch(error){
      console.log("ups",error)
    }
    
}
// let dataHoteles = await traerHoteles()