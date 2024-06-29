//console.log("algo");

// inicializacion, condicion, modificador

//for( let i = 1 ; i <= 10 ; i++ ){
    //console.log(i);
//}

//let numero = prompt("ingresa el numero")
// mostrar la tabla de multiplicar de ese numero


//numero = Number(numero)
//console.log(typeof numero);

//for( let i = 1 ; i <= 10; i++){
    //let texto = `${numero} * ${i} = ${numero * i}`;
    //console.log(texto);
//}

// template literals
// ``

//let inicio = Number(prompt("ingresa el numero inicial"))
//let fin= Number(prompt("ingresa el numero final"))

//for(let i = inicio; i <= fin; i++) {
    //let res = i % 2 === 0 ? `el ${i} es par` : `el ${i} es impar`
    //console.log(res);
//}

// while
// mostrar por consola los numeros del 1-10
let palabra = "juancito"
while(palabra !== "pepe"){
    console.log(palabra);
    palabra = prompt("ingresa una palabra")
}


// do while
// mostrar los numeros desde A hasta B
// porlomenos mostrar 1 vez el console log

let a = 12
let b = 7

do{
    console.log(a);
    a++ 
}while( a <= b )

