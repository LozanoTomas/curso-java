let numero = 0

let botonSumar = document.getElementById("btn-sumar")
let contador = document.getElementById("contador")
contador.innerText = numero

//botonSumar.onclick = ()=>{
    //alert("sumando...")
//}

botonSumar.addEventListener("click", ()=>{
    numero ++
    contador.innerText = numero
})

let textoEventos = document.getElementById("eventos")

//textoEventos.addEventListener("click", ()=>{
    //alert("di click en el h3")
//})

//textoEventos.addEventListener("dblclick", ()=>{
    //alert("double kill")
//})

//textoEventos.addEventListener("mouseenter", ()=>{
    //alert("entro")
//})

//textoEventos.addEventListener("mouseleave", ()=>{
    //alert("salgo")
//})

//textoEventos.addEventListener("mousedown", ()=>{
    //alert("AAAA")
//})

//textoEventos.addEventListener("mouseup", ()=>{
    //alert("IIII")
//})




let inputName = document.getElementById("nombre")
let nombreProducto = ""

inputName.addEventListener("input", (event)=>{
    nombreProducto = inputName.value
})

let inputDescripcion = document.getElementById("descripcion")
let descripcionDelProducto = ""

inputDescripcion.addEventListener("input", ()=>{
    descripcionDelProducto = inputDescripcion.value
})

let inputPrecio = document.getElementById("precio")
let precioProducto = ""

inputPrecio.addEventListener("input", ()=>{
    precioProducto = inputPrecio.value
})

let productos = []

let miFormulario = document.querySelector("form")

miFormulario.addEventListener("submit", (event)=>{
    event.preventDefault()
    let producto = {
        nombre: nombreProducto ,
        precio: Number(precioProducto) ,
        descripcion: descripcionDelProducto ,
    }
    productos.push(producto)
    console.log(productos);
    let miTarjeta = document.createElement("div")
    miTarjeta.style = "border: 2px, solid, red"
miTarjeta.innerHTML = `<h2>${producto.nombre}</h2><h3>${producto.descripcion}</h3><h4>${producto.precio}</h4>`
    contenedorProductos.appendChild(miTarjeta)
})

let contenedorProductos = document.querySelector(".container-productos")
console.log(contenedorProductos);


