let products = {
    nombre : "motorola",
    precio : 100,
    descripcion : "pepepipo",
    aumentarPrecio: () => {
        return "el precio aumento"
    }
}




let containerProduct = document.createElement("div")
document.body.append(containerProduct)

//for(let i = 0; i < products.length; i++){
   // const productCard = document.createElement("div")
   // productCard.innerHTML = `<h2>${products[i].title}</h2> <h3>${products[i].descripcion}</h3>
    //<h4>${products[i].precio}</h4> <img src="" alt="" />`
   // productCard.className = "card"

    //containerProduct.appendChild(productCard)
//}

products.forEach((elemento)=>{
    const productCard = document.createElement("div")
   productCard.innerHTML = `<h2>${products[i].title}</h2> <h3>${products[i].descripcion}</h3>
    <h4>${products[i].precio}</h4> <img src="" alt="" />`
    productCard.className = "card"
    containerProduct.appendChild(productCard)
})