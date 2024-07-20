// array --> coleccion 

// los arrays tienen elementos / los objetos tienen propiedades y metodos

let numerosDeLaSuerte = [2, 5, 12]
let palabras = ["casa", "coco", "pipo"]

// trabajan por posiciones ---> empiezan en 0
console.log(palabras[2]);

//let nombre = "pepe"

//console.log(nombre[0]);

// propiedad ---> length

console.log(palabras.length);

// siempre la ultima posicion de un array es la longitud - 1 

console.log(palabras[0]);
console.log(palabras[palabras.length - 1]);

//console.log(nombre.length);

let numeros = [5, 2, 7, 4, 9]

//numeros[1] = 15

console.log("aca empieza wacho");

for(let i = 0; i < numeros.length ; i++){
    //console.log(numeros[i]);
    numeros[i] += 10
}

console.log(numeros);

// arrays de objetos

let telefonos = [
    {
        nombre: "motorola",
        precio: 30,
        stock: 3,
    },
    {
        nombre: "samsung",
        precio: 20,
        stock: 1,
    },
    {
        nombre: "iphone",
        precio: 100,
        stock: 5,
    },
]

class telefono {
    constructor(nombre,precio,stock){
        (this.nombre = nombre), (this.precio = precio), (this.stock = stock)
    }
}

const agregarTelefono = ()=>{
    let nombre = prompt("ingrese el nombre")
    let precio = Number(prompt("ingrese el precio"))
    let stock = Number(prompt("ingrese el numero de stock"))

    let telefonoNuevo = new telefono("xiaomi", 200, 7)

    telefonos.push(telefonoNuevo)
}


let continuar = confirm("quieres agregar otro?")

while(continuar){
    agregarTelefono()
    continuar = confirm("agregas otro pa?")
}

let calcularVentaTotal = ()=>{
// devolver el total que ganaria
    let valorTotal = 0
    for(let i = 0; i < telefonos.length; i++){
        valorTotal += telefonos[i].precio * telefonos[i].stock
    }
    //valorTotal += telefonos[0].precio * telefonos[0].stock
    //valorTotal += telefonos[1].precio * telefonos[1].stock
    //valorTotal += telefonos[2].precio * telefonos[2].stock
    return valorTotal
}

let totalVendido = calcularVentaTotal()

console.log(totalVendido);

//for(let i = 0; i < telefonos.length; i++){
    //console.log(telefonos[i])
    //console.log("--------");
//}
    
//let seguimos = confirm("queres agregar otro telefono?")
//console.log(seguimos);

//while(seguimos){

//}

let frase = "hola loquito"

console.log(frase.length);
let fraseMayuscula = frase. toUpperCase()
console.log(frase);
console.log(fraseMayuscula);