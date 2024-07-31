console.log(false);
console.log(true);



if ([]){
    console.log("entro");
}

let numero = 15
let nombre = "juan"

let seCumpleAnd = numero > 5 && nombre === "juan" && "pepe" && 15 && [] && "hola"

if (seCumpleAnd){
    console.log("entra por el and");
}else{
    console.log("no se cumple");
}

let seCumpleElOr = numero > 20 || "pepe" || 0 || NaN

//if (seCumpleElOr){
    //console.log(seCumpleElOr);
//}else{
    //console.log("no" seCumpleElOr);
//}

console.log(0 || null || "casa" || {} || 15 || "juancito" || []);

// && devuelve el ultimo truthy o primer falsy 
// || devuelve el ultimo falsy o el primer truthy

// admin || owner || comprador 
let rol = "admin"

// dar acceso a modificar los productos 

let leDoyAcceso = rol === "owner" || rol === "admin"

if(leDoyAcceso){
    console.log("tenes acceso a modificar los productos");
}else {
    console.log("no te doy acceso");
}

let tieneEntrada = false 
let edad = 21 


// dar acceso a un boliche 
let puede = tieneEntrada === true && edad >= 18

if(puede){
    console.log("entraste");
}else{
    console.log("no entraste");
}

// operador ?? (nullish)
let a = null
let b = "pepe"
let nullish = a ?? b
console.log(nullish);

// optional chaining 

let persona = {
    nombre: "pepe",
    edad: 20,
}

console.log(persona.apellido);