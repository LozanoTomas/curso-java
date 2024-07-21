//let numero = Number(prompt("ingresa un numero del 0-50"))

//if( numero <= 50 ){
    //console.log("el numero esta entre el 0-50");
//}else {
    //console.log("sos un pelotudo");
//}

// quiero saber si el numero es menor a 10

for(let i = 0; i < productos.length; i++){
    if(productos[i].id === identificador){
        return productos[i]
    }
}
return false