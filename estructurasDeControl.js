// una respuesta a una pregunta 

let nombre = prompt("ingresa tu nombre")
let edad = Number(prompt("ingresa tu edad"))

// un sistema para una app web que puedan sacar entradas para un recital
// tiene que ser mayor de edad --> 18 o mas años

console.log("inicio")

//if(edad >= 18) { 
    // bloque de codigo
   // alert("gracias por tu compra")
//}else{
    // bloque de codigo 
    //console.log("debes ser mayor de edad");
//}


console.log("fin")

let n1 = "12"
let n2 = 12

//!= es distinto?
//console.log(n1>n2)
//console.log(n1<n2)
//console.log(n1>=n2)
//console.log(n1<=n2)
//console.log(n1==n2) // comparacion simple
//console.log(n1===n2) // comparacion estricta
//console.log(n1 != n2) // cuando sean iguales da true
//console.log(n1 !== n2) // cuando sean iguales da false

let estaLogueado = false

if(estaLogueado) {
    console.log("inicio sesion");
}else{
    console.log("crear cuenta");
}

// 18 o mas --> puedo entrar
// 13 o mas --> puedo entrar con adulto
// -13 --> no puedo entrar 

//let edadd = 21

if(edad >= 18){
    console.log("puede entrar");
}else if(edad >= 13){
    console.log("puede entrar con un adulto");
}else{
    console.log("no puede entrar");
}

// 18 o mas --> puedo entrar
// -18 --> puedo entrar con adulto
// -18 no vengo con adulto --> no puedo entrar 

let siVieneConUnAdulto = false

if(edad >= 18){
    console.log("podes entrar");
}else if(edad < 18 && siVieneConUnAdulto){
    console.log("puede entrar con el adulto");
}else{
    console.log("no puede entrar");
}

// and --> && evaluar que ambas condiciones se cumplan (se queda con el primer falsy o el ultimo true)
// or --> || evaluar que almenos una condicion se cumpla (se queda con el primer truthy o el ultimo falsy)

console.log( true || true || false || true);

let x = true && true && false && true
console.log(x);
let y = false || false || true || false
console.log(y);

//""--> falsy
//0-->falsy
//"wadwa"-->truthy
//125-->truthy