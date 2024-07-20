// objects no se puede modificar la variable cuando es const pero si modificar lo de adentro

// objetos --> pares de clave : valor 
let telefono = {
    nombre : "motorola",
    precio : 100,
    descripcion : "pepepipo",
    aumentarPrecio: () => {
        return "el precio aumento"
    }
}

// dot notation --> 

console.log(telefono. nombre);
console.log(telefono. descripcion);

let x = telefono.aumentarPrecio()

//telefono = {
    //nombre : "iphone",
    //precio : 100,
    //descripcion : "pepepipo",
    //aumentarPrecio: () => {
        //return "el precio aumento"
    //}
//}

//console.log(telefono);

// propiedades --> definen el objeto / caracteristicas / adjetivos 
// metodos --> verbos

// manipulacion 

telefono.nombre = "samsung"
telefono.stock = 15
delete telefono.precio
console.log(telefono);

// this 

const perro = {
    nombre: "jack",
    edad: 3,
    ladrar: function (){
        return "wau wau"
    },
    hablar: function (){
        return "hola mi nombre es " + this.nombre
    },
}

perro.color = "blanco y negro"

let retorno = perro.hablar()
console.log(retorno);

perro.nombre = "pepito";
let retornoDos = perro.hablar()
console.log(retornoDos);

perro.aumentarEdad = function (){
    this.edad = this.edad + 1
}

perro.aumentarEdad()
console.log(perro.edad);

// bracket notation

console.log(perro["nombre"]);

// class - constructor

class Telefono {
    constructor(nombre, precio, stock){
        (this.nombre = nombre), (this.precio = precio), (this.stock = stock);
    }
}

let telefono1 = new Telefono ("motorola", 100, 5)
let telefono2 = new Telefono ("iphone", 200, 10)
let telefono3 = new Telefono ("android", 150, 3)

console.log(telefono1);
console.log(telefono2);
console.log(telefono3);

class producto{
    constructor(nombre, precio, stock, estaDisponible){
        this.nombre = nombre,
        this.precio = precio,
        this.stock = stock,
        this.estaDisponible = estaDisponible;
    } 
    vender(cantidad){
        this.stock = this.stock - cantidad
    }
    chequearDisponibilidad(){
        //this.estaDisponible = this.stock > 0 ? true : false
        this.estaDisponible = this.stock > 0
    }
}

let televisor = new Producto("tele", 100, 5, true)
let mochila = new Producto("mochila", 90, 2, true)

televisor.vender(2)
mochila.vender(2)

console.log(televisor.estaDisponible);