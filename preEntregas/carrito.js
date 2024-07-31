let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const renderProducts = (arrayProductos) => {
  let containerCart = document.getElementById("container-cart");
  containerCart.innerHTML = "";

  arrayProductos.forEach((producto) => {
    const totalPorProducto = producto.precio * producto.cantidad;

    // Crear tarjeta de producto
    let productCard = document.createElement("div");
    productCard.className = "producto";
    productCard.innerHTML = `
      <img class="imagen" src=${producto.image} />
      <h3 class="todo">${producto.nombre}</h3>
      <p class="todo">Cantidad: ${producto.cantidad}</p>
      <p class="todo">Precio unitario: $${producto.precio}</p>
      <p class="todo">Total por producto: $${totalPorProducto}</p>
      <button class="eliminar" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
    `;
    containerCart.appendChild(productCard);
  });
};

const eliminarDelCarrito = (id) => {
  const productoIndex = carrito.findIndex(producto => producto.id === id);
  
  if (productoIndex !== -1) {
    carrito.splice(productoIndex, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderProducts(carrito);
  }
};

renderProducts(carrito);