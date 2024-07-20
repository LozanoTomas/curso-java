// documento 


// id
let pepe = document.getElementById("title")
console.log(pepe);

// class 
let title = document.getElementsByClassName("title")
console.log(title);

// etiquetas 
let miH3 = document.getElementsByTagName("H3")
console.log(miH3);

// query selector 
let miElemento = document.querySelector(".title") // se queda con la primer coincidencia 
console.log(miElemento);

// quey selector all 
let misElementosTitlle = document.querySelectorAll(".title") // abarca todas las coincidencias 
console.log(misElementosTitlle);

miElemento.innerText = "este es caca"

console.log(miElemento.innerText);

let contenedorDeProductos = document.querySelector(".pepe")
contenedorDeProductos.innerHTML = "<h3>Nuevo h3 </h3>";

// Anchor ---> crear elementos en el DOM
let categorias = document.createElement("div")
categorias.innerHTML = "<h4>este es el nuevo h4</h4>"

document.body.append(categorias)

let tarjeta = document.createElement("h3")
tarjeta.innerText = "esta es mi primer tarjeta"
console.log(tarjeta);
categorias.appendChild(tarjeta)