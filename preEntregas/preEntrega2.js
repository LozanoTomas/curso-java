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

//let saludo = nombreYApellido => "Hola! " + nombreYApellido + ", bienvenido a Virtual Supermarket"

//let bienvenida = saludo(prompt("Porfavor ingrese su Nombre y Apellido"))
//alert(bienvenida);

let impuestoDelSupermercado = 100

//let productos = agregarAlCarrito => {
    //let impuestoDelSupermercado = 100
    //switch (agregarAlCarrito){
        //case "fideos":
            //return impuestoDelSupermercado + 120 
        //case "arroz":
            //return impuestoDelSupermercado + 100
        //case "carne":
            //return impuestoDelSupermercado + 200
        //case "agua":
            //return impuestoDelSupermercado + 50
        //case "cocaCola":
           // return impuestoDelSupermercado + 80
        //case "sprite":
            //return impuestoDelSupermercado + 75
        //case "leche":
            //return impuestoDelSupermercado + 90
        //case "yogurt":
            //return impuestoDelSupermercado + 30
        //case "helado":
            //return impuestoDelSupermercado + 130
        //case "mayonesa":
           // return impuestoDelSupermercado + 80
        //case "ketchup":
           // return impuestoDelSupermercado + 85
        //case "mostaza":
            //return impuestoDelSupermercado + 60
       // default:
            //return alert("producto no disponible")
    //}
//}

const productos = [
    {nombre: "fideos", precio: impuestoDelSupermercado + 120, id: 1, stock: 5},
    {nombre: "arroz", precio: impuestoDelSupermercado + 100, id: 2, stock: 10},
    {nombre: "carne", precio: impuestoDelSupermercado + 200, id: 3, stock: 2},
    {nombre: "agua", precio: impuestoDelSupermercado + 50, id: 4, stock: 4},
    {nombre: "cocaCola", precio: impuestoDelSupermercado + 80, id: 5, stock: 6},
    {nombre: "sprite", precio: impuestoDelSupermercado + 75, id: 6, stock: 1},
    {nombre: "leche", precio: impuestoDelSupermercado + 90, id: 7, stock: 2},
    {nombre: "yogurt", precio: impuestoDelSupermercado + 30, id: 8, stock: 7},
    {nombre: "helado", precio: impuestoDelSupermercado + 130, id: 9, stock: 10},
    {nombre: "mayonesa", precio: impuestoDelSupermercado + 80, id: 10, stock: 5},
    {nombre: "ketchup", precio: impuestoDelSupermercado + 85, id: 11, stock: 3},
    {nombre: "mostaza", precio: impuestoDelSupermercado + 60, id: 12, stock: 1},
]

//let resultadoCuenta = "El total a pagar son " + productos(prompt("Que producto/s desea agregar a su carrito?")) + " pesos."
//console.log(resultadoCuenta);


//let preguntaAutomatica = prompt("Desea agregar más productos al carrito?")

let total = 0
let continuar = true

while (continuar) {

    const buscar = (identificador)=>{
        return productos.find(producto => producto.id === identificador) || false;
    }
    
    let productoEncontrado = buscar(Number(prompt("Ingrese el id del producto que desea")))
    
    
    let resultado = productoEncontrado

    if (productoEncontrado) {
        if (productoEncontrado.stock > 0) {
            total += productoEncontrado.precio;
            productoEncontrado.stock -= 1; // disminuye el stock
            console.log(`El costo de ${productoEncontrado.nombre} son ${productoEncontrado.precio} pesos, Quedan ${productoEncontrado.stock} en stock.`)
        }else {
            alert(`No hay stock de ${productoEncontrado.nombre}.`);
        }
        
    } else {
        alert("Producto no encontrado. Por favor, ingrese un ID válido.")
    }

    continuar = confirm("¿Desea agregar otro producto? Ingrese el id correspondiente.")
    
}

console.log(`El total a pagar es de ${total} pesos.`)

// si tiene cupon se restan 100 pesos
    // si no tiene se queda como esta
    let preg = prompt("tiene un cupon de descuento? (si/no)")
   
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

const variados = document.querySelectorAll(".producto")

variados.forEach(producto =>{
    let numero = 0
    const contador = producto.querySelector(".conta")
    const btnSumar = producto.querySelector(".btn-sumar")
    const btnRestar = producto.querySelector(".btn-restar")

    btnSumar.addEventListener("click", ()=>{
        numero ++
        contador.innerText = numero
    })

    btnRestar.addEventListener("click", ()=>{
        numero --
        contador.innerText = numero
    })
})