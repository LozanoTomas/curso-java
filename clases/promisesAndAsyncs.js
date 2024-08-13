// asincronia y promesas

const saludar = ()=>{
    alert("hola pepito")
}

console.log("iniciar");

let saludarAsincrono = setTimeout(()=>{
    saludar()
}, 2000) // ejecutar un callback despues de cierto tiempo 

let user = null

if (!user){
    clearTimeout(saludarAsincrono)
}

console.log("finalizar");

let contador = 0

let intervalo = setInterval(()=>{
    console.log("se ejecuta cada 2 segundos");
    contador ++
    console.log(contador);
    if (contador === 5) {
        clearInterval(intervalo)
    }
}, 2000)

// como crear promesas 
// las promesas son el resultado de algo ---> fetching 

// crear --> esto no lo van a hacer
// manejar --> esto siempre

// let x --> dame los productos 
// let x --> crear y simular la promesa 

// 2 funciones (primero lo bueno, segundo lo malo)
let obtenerProductos = new Promise((resolve, reject)=>{
    let rol = "admin"
    if(rol === "admin"){
        resolve("se resuelve exitosamente")
    }else{
        reject({message: "algo salio mal"})
    }
})

console.log(obtenerProductos);

// manejar ---> si se resuelve .then y si no se resuelve .catch

obtenerProductos.then((respuesta)=>{
    console.log("entra en el then");
    console.log(respuesta);
})
.catch((respuesta)=>{
    console.log("entra en el catch");
    console.log(respuesta);
})
.finally(()=>{
    console.log("se termino el manejo de la promesa");
})





const obtenerUsuarios = new Promise ((resolve, reject)=>{
    resolve("todo salio ok")
})

obtenerUsuarios.then((respuesta)=>{
    alert(respuesta)
})
.catch((error)=>{
    alert(error)
})


// Async - await

const obtenerCategorias = new Promise((resolve, reject)=>{
    let estaLogueado = false
    if(estaLogueado){
        resolve("las categorias")
    }else{
        reject("primero inicia sesion")
    }
})

const manejarCategorias = async () => {
    try {
        let categorias = await obtenerCategorias
        console.log("salio bien", categorias);
    } catch (error) {
        console.log("salio mal", error);
    }
}
manejarCategorias()

// dame algo --> de donde
// endpoint --> https://mibackend.com/products1 
// endpoint --> https://mibackend.com/users
// endpoint --> https://mibackend.com/orders