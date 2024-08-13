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
    Swal.fire({
      icon: "error",
      title: "Producto eliminado",
      text: "El producto ha sido eliminado del carrito.",
    });
  }
};

renderProducts(carrito);

const finalizarCompra = () => {
  Swal.fire({
    title: "¿Confirmar compra?",
    text: "¿Estás seguro de que deseas finalizar la compra?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, confirmar",
    cancelButtonText: "No, cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      carrito = [];
      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderProducts(carrito);

      Swal.fire({
        position: "middle",
        icon: "success",
        title: "La compra se realizó con éxito",
        showConfirmButton: true,
        timer: 1500
      });
    } else {
      Swal.fire({
        position: "middle",
        icon: "info",
        title: "La compra fue cancelada",
        showConfirmButton: true,
        timer: 1500
      });
    }
  });
};

const botonFinalizarCompra = document.getElementById("finalizar-compra");
if (botonFinalizarCompra) {
  botonFinalizarCompra.addEventListener("click", finalizarCompra);
}