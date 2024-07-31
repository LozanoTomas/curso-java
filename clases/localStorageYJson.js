let prueba = [
    {nom: "yeye", pi: "nico cuca"}
]



let botonDeLocalStorage = document.getElementById("local-Btn")
botonDeLocalStorage.addEventListener("click", ()=>{
    localStorage.setItem("tareas", JSON.stringify)
})

//localStorage.setItem() // --> guardar info
   //localStorage.getItem() // --> obtener info
   // localStorage.removeItem() // --> eliminar info
    //localStorage.clear() // --> limpiar info

let botonDeObtener = document.getElementById("local-Btn-Get")
botonDeObtener.addEventListener("click", ()=>{
    
    let frase = localStorage.getItem("frase")
    console.log("frase");
})

let btnRemove = document.getElementById("local-Btn-Remove")
btnRemove.addEventListener("click", ()=>{
    localStorage.removeItem("frase")
})

let btnClear = document.getElementById("local-Btn-Clear")
btnClear.addEventListener("click", ()=>{
    localStorage.clear("frase")
})

