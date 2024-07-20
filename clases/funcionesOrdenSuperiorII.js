//let usuarios = [
    //{
       // telefono: "123456"
   // },
    //{
    //    nombre: "juan",
       // email:"juan@gmail.com",
      //  telefono: "123456",
    //},
    //{
     //   nombre: "maria",
    //    email:"maria@gmail.com",
     //   telefono: "123456",
    //},
//]

// forEach 
// nunca retorna nada 
// tampoco me pide que yo retorne algo adentro

//let arrayForEach = usuarios.forEach((usuario, indice)=>{
   // usuario.id = indice + 1
    //usuario.nombre = 
   // usuario.nombe.charAt(0).toUpperCase() + usuario.nombre.slice(1);
//})

//let palabra = "juancito"
//let corte = palabra.slice(1, 3)
//console.log(corte);

// some --> devuelve siempre un booleano 

//let todosTienenEmail = usuarios.every((usuarios) =>
    //usuarios.email.includes("@")
//)
//console.log(todosTienenEmail);

//let juan = usuarios.find((usuario) => usuario.nombre === "juan")
//console.log(juan.email.includes("@"));

let numeros = [1, 6, 2, 7, 8, 3]

let max = Math.max(...numeros) // spread operator 
let min = Math.min(1, 5, 6, 2)

console.log(max);
console.log(min);

let numero = 5.7

console.log(Math.ceil(numero)); // lo lleva al techo 
console.log(Math.floor(numero)); // lo lleva al piso 
console.log(Math.round(numero)); // lo lleva al entero mas cercano

let elemento1 = "piedra"
let elemento2 = undefined
let numeroRandom = Math.random() * 15 + 1
if(numeroRandom <= 5){
    elemento1 = "piedra"
}else if(numeroRandom <= 10){
    elemento2 = "tijera"
}else{
    elemento2 = "papel"
}

console.log(elemento2);

// reduce ---> reducir un array a su minima expresion
// sort ---> ordenar un array 

let nums = [1, 6, 12, 2, 3, 5]

nums.sort((a, b)=>b - a)

console.log(nums);

let palabras = ["casa", "avion", "abeja", "mariposa"]

let x = palabras.sort((a, b)=> a.localeCompare(b))
console.log(x);

const sumarArray = ()=>{
    let acc = 0
    for(let i = 0; i < nums.length; i++){
        acc += nums[i]
    }
    return acc 
}

// reduce
let numeritos = [1, 6, 12, 2, 3, 5]

let total = numeritos.reduce((acc, elemento)=>{
    return acc + elemento 
})

console.log(total);