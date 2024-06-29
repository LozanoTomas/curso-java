//Crear un algoritmo con un condicional.
//Crear un algoritmo utilizando un ciclo.

// dar la bienvenida al cliente
// preguntar que producto quiere comprar y calcular su respectivo precio
// preguntar si quiere llevar algo mas 
// preguntar si tiene un cupon de descuento
// realizar la compra 

// valores de los productos:
// fideos = 120 pesos
// arroz = 100 pesos
// carne = 200 pesos
// agua = 50 pesos
// cocacola = 80 pesos
// sprite = 75 pesos
// leche = 90 pesos
// yogurt = 30 pesos
// helado = 130 pesos
// mayonesa = 80 pesos
// ketchup = 85 pesos
// mostaza = 60 pesos

// impuestos del supermercado = 130 pesos

let saludo = nombreYApellido => "Hola! " + nombreYApellido + ", bienvenido a Virtual Supermarket"

let bienvenida = saludo(prompt("Porfavor ingrese su Nombre y Apellido"))
console.log(bienvenida);

let productos = agregarAlCarrito => {
    let impuestoDelSupermercado = 100
    switch (agregarAlCarrito){
        case "fideos":
            return impuestoDelSupermercado + 120 
        case "arroz":
            return impuestoDelSupermercado + 100
        case "carne":
            return impuestoDelSupermercado + 200
        case "agua":
            return impuestoDelSupermercado + 50
        case "cocaCola":
            return impuestoDelSupermercado + 80
        case "sprite":
            return impuestoDelSupermercado + 75
        case "leche":
            return impuestoDelSupermercado + 90
        case "yogurt":
            return impuestoDelSupermercado + 30
        case "helado":
            return impuestoDelSupermercado + 130
        case "mayonesa":
            return impuestoDelSupermercado + 80
        case "ketchup":
            return impuestoDelSupermercado + 85
        case "mostaza":
            return impuestoDelSupermercado + 60
        default:
            return "producto no disponible"
    }
}

//let resultadoCuenta = "El total a pagar son " + productos(prompt("Que producto/s desea agregar a su carrito?")) + " pesos."
//console.log(resultadoCuenta);



//let preguntaAutomatica = prompt("Desea agregar más productos al carrito?")

let total = 0
let continuar = true

while (continuar) {
    let producto = prompt("¿Qué producto desea agregar a su carrito?")
    let resultado = productos(producto)

    if (typeof resultado === "number") {
        total += resultado;
        console.log(`El costo de ${producto} son ${resultado} pesos.`)
    } else {
        console.log(resultado)
    }

    continuar = confirm("¿Desea agregar otro producto?")
    
}

console.log(`El total a pagar es de ${total} pesos.`)

// si tiene cupon se restan 100 pesos
    // si no tiene se queda como esta
    let preg = prompt("tiene un cupon de descuento?")
   
    if(preg === "si" || preg  === "no"){
        preg === "si" ? total -= 100 : total === total
    } else {
        alert("cupon no valido")
    }

// si el total de la compra no pasa de los 200 pesos se cobraran 40 pesos de mas por impuesto pais.

if(total <= 200){
    alert("el precio es muy bajo, se le cobraran impuestos pais")
}else {
    console.log(`El total a pagar es de ${total} pesos.`)
}

for(let pago = total; pago <= 200; pago++){
    let ultimo = pago += 40
    console.log(ultimo);
}

alert("los productos han sido comprados correctamente")