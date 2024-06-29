
// crear bloques de codigo

// funciones declaradas

// declaracion

//function saludar (){
    // bloque de codigo
    //let nombre = "yoyito"
    //console.log("hola");
//}

// ejecucion, invocar a la funcion, llamarla.

// saludar()

// scope --> el ambiente en donde existe la variable

//let yoyo = 2

//function jeje (){
    // bloque de codigo
    //console.log(yoyo);
//}

//jeje ()

//let nombre = "juan"

//function jeje (){
    // bloque de codigo
    //let nombre = "pepe"
    //console.log(nombre);
//}

//jeje ()

// podemos usar muchas variables con el mismo nombre siempre y cuando no esten en un mismo scope, el log toma la mas cercana.

function saludar (nombre){
    return "hola " + nombre + " como estas?"
}

function sumar (){
    //bloque de codigo
    let n1 = 2
    let n2 = 5
    alert("hola")
    console.log("chau");
    return true
}

let resultado = sumar()

console.log(resultado);

function restar (num1, n2){
    return num1 - n2
}

let resultadoResta1 = restar (10, 3)
let resultadoResta2 = restar (4, 1)
let resultadoResta3 = restar (7)

console.log(resultadoResta1);
console.log(resultadoResta2);
console.log(resultadoResta3);

let saludito = saludar (prompt("escribe tu nombre"))
console.log(saludito);

// funciones expresadas ---> anonimas

let multiplicar = function (n1, n2){
    return n1 * n2
}

let res = multiplicar (3, 5)
console.log(res);

// funciones ---> anonima ---> arrow function

let dividir = (n1, n2)=>{
    return n1 / n2
}

let resultadoDivision = dividir(6, 2)
console.log(resultadoDivision);

let conversor = cantidadPesos => cantidadPesos / 1000

let resultadix = conversor(20000)
console.log(resultadix);

// calcular el impuesto a la patente
// impuesto es de 100 pesos
// depende la marca del auto se le agrega x cantidad de pesos 
// vw --> 30
// audi --> 40
// volvo --> 20
// renault --> 10
// mercedes --> 45

let calImp = (marcaDelAuto) =>{
    let impuestoBase = 100
    switch(marcaDelAuto){
        case "vw":
        return impuestoBase + 30
        case "audi":
        return impuestoBase + 40
        case "volvo":
        return impuestoBase + 20
        case "renault":
        return impuestoBase + 10
        case "mercedes":
        return impuestoBase + 45
        default:
        return "la marca no coincide"
    }
} 

let impuestoTotalPepito = calImp(prompt("escribe tu auto"))
let respuestaMaquina = `has pagado ${impuestoTotalPepito} pesos al estado.`
console.log(respuestaMaquina);

