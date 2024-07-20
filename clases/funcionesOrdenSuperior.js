// copia por valor vs copia por referencia

let a = 1
let b = a

console.log(a);
console.log(b);

a += 7

console.log(a);
console.log(b);

let persona = {
    nombre: "pepe",
    edad: 22
}

let persona2 = persona

console.log(persona);
console.log(persona2);

persona.nombre = "juancito"

console.log(persona);
console.log(persona2);

persona2.edad = 55

console.log(persona);
console.log(persona2);

const productos = [
    {id: 1, nombre: "manzanas", stock: 10},
    {id: 2, nombre: "peras", stock: 5},
    {id: 3, nombre: "bananas", stock: 15},
    {id: 4, nombre: "uvas", stock: 8},
    {id: 5, nombre: "naranjas", stock: 2},
    {id: 6, nombre: "kiwis", stock: 4},
    {id: 7, nombre: "frutillas", stock: 7},
]

// encontar un producto en base al id y retornarlo 
// si no lo encuentra retornar false 

const encontrar = (identificador)=>{
    for(let i = 0; i < productos.length; i++){
        if(productos[i].id === identificador){
            return productos[i]
        }
    }
    return false
}

let productoEncontrado = encontrar(Number(prompt("escribi")))
console.log(productoEncontrado);

// encontrar un elemento por id y sumarle 10 unidades 

//const encontarYsumar = (iden)=>{
    //let x = encontrar(iden)
    //miProducto.stock += 10
//}

//encontarYsumar(4)

//console.log(productos);