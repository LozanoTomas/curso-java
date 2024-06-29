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

let siVieneConUnAdulto = true

if(edad >= 18){
    console.log("podes entrar");
}else if(edad < 18 && siVieneConUnAdulto){
    console.log("puede entrar con el adulto");
}else{
    console.log("no puede entrar");
}

// and --> && evaluar que ambas condiciones se cumplan (se queda con el primer falsy o el ultimo true)
// or --> || evaluar que almenos una condicion se cumpla (se queda con el primer truthy o el ultimo falsy)

//console.log( true || true || false || true);

let x = true && true && false && true
console.log(x);
let y = false || false || true || false
console.log(y);

//""--> falsy
//0-->falsy
//"wadwa"-->truthy
//125-->truthy

// mostrar por consola, el dia correspondiente
// 1 --> lunes
// 2 --> martes 

//let dia = prompt("ingresa el numero de dia")

//if(dia==="1"){
    //console.log("lunes")
//}else if(dia==="2"){
    //console.log("martes")
//}else if(dia==="3"){
    //console.log("miercoles")
//}else if(dia==="4"){
    //console.log("jueves")
//}else if(dia==="5"){
    //console.log("viernes")
//}else if(dia==="6"){
    //console.log("sabado")
//}else if(dia==="7"){
    //console.log("domingo")
//}else {
    //console.log("el numero no es valido")
//}

// switch case
let dia = prompt("ingresa el numero de dia")

switch(dia){
    case "1":
        console.log("lunes")
        break
    case "2":
        console.log("martes")
        break
    case "3":
        console.log("miercoles")
        break
    case "4":
        console.log("jueves")
        break
    case "5":
        console.log("viernes")
        break
    case "6":
        console.log("sabado")
        break
    case "7":
        console.log("domingo")
        break
    default:
        console.log("numero no valido")
}

// ternario y cuando tenga unicamente 2 caminos


//if (edad >= 18){
    //console.log("mayor")
//}else {
    //console.log("menor")
//}

// condicion ? lo que quiero hacer cuando es true : lo que quiero hacer cuando es false 

edad >= "18" ? console.log("mayor") : console.log("menor")

// subway


// si elige pan comun -->sumo 2
// si elige pan arabe -->sumo 5
let sandwich = 100
let pan = prompt("que pan prefieres?")
let extra = prompt("que extra quieres?")

if(pan === "comun" || pan === "arabe") {
pan === "comun" ? sandwich = sandwich + 2 : sandwich += 5
}else {
    alert('pan incorrecto')
}
//if(pan === "comun"){
    //sandwich = sandwich + 2
//}else{
    //sandwich += 5
//}

switch(extra){
    case "carne":
        sandwich += 10
    break
    case "pollo":
        sandwich += 5
    break
    case "verdura":
        sandwich += 2
    break
    case "queso":
        sandwich += 10
    break
    case "panceta":
        sandwich += 10
    break
    default:
        alert("extra no valido")
}

console.log("el precio de su sandwich es de " + sandwich)

// extra carne 10
// extra pollo 5
// extra verdura 2
// extra queso x2 -->10
// extra panceta x2 -->10
