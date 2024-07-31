let impuestoDelSupermercado = 100

const productos = [
    {nombre: "fideos", precio: impuestoDelSupermercado + 120, id: 1, stock: 5, category: "comidas", cantidad: 0, image: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2540661_f.jpg"},
    {nombre: "arroz", precio: impuestoDelSupermercado + 100, id: 2, stock: 10, category: "comidas", cantidad: 0, image: "https://http2.mlstatic.com/D_751946-MLA71242422338_082023-C.jpg}"},
    {nombre: "carne", precio: impuestoDelSupermercado + 200, id: 3, stock: 2, category: "comidas", cantidad: 0, image: "https://st2.depositphotos.com/2515395/47306/i/450/depositphotos_473062154-stock-photo-pork-bone-steak-vacuum-commercial.jpg"},
    {nombre: "agua", precio: impuestoDelSupermercado + 50, id: 4, stock: 4, category: "bebidas", cantidad: 0, image: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg"},
    {nombre: "cocaCola", precio: impuestoDelSupermercado + 80, id: 5, stock: 6, category: "bebidas", cantidad: 0, image: "https://ardiaprod.vtexassets.com/arquivos/ids/298976/Gaseosa-CocaCola-Sabor-Original-2-25-Lt-_2.jpg?v=638503264498200000"},
    {nombre: "sprite", precio: impuestoDelSupermercado + 75, id: 6, stock: 1, category: "bebidas", cantidad: 0, image: "https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-08-25-at-11-08-571-f2321c146eb51f1dac16299005725116-640-0.jpeg"},
    {nombre: "leche", precio: impuestoDelSupermercado + 90, id: 7, stock: 2, category: "lacteos", cantidad: 0,  image: "https://www.casa-segal.com/wp-content/uploads/2019/07/leche-entera-ilolay-1-litro-almacen-casa-segal-mendoza-600x600.jpg"},
    {nombre: "yogurt", precio: impuestoDelSupermercado + 30, id: 8, stock: 7, category: "lacteos", cantidad: 0, image: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3261690_f.jpg"},
    {nombre: "helado", precio: impuestoDelSupermercado + 130, id: 9, stock: 10, category: "lacteos", cantidad: 0, image: "https://aloharte.com.ar/wp-content/uploads/2023/03/1-kg-de-helado.png"},
    {nombre: "mayonesa", precio: impuestoDelSupermercado + 80, id: 10, stock: 5, category: "aderezos", cantidad: 0, image: "https://carrefourar.vtexassets.com/arquivos/ids/359572/7791866001203_E02.jpg?v=638258195033770000"},
    {nombre: "ketchup", precio: impuestoDelSupermercado + 85, id: 11, stock: 3, category: "aderezos", cantidad: 0, image: "https://ardiaprod.vtexassets.com/arquivos/ids/267177/Ketchup-Natura-250-Gr-_1.jpg?v=638322461219630000"},
    {nombre: "mostaza", precio: impuestoDelSupermercado + 60, id: 12, stock: 1, category: "aderezos", cantidad: 0, image: "https://carrefourar.vtexassets.com/arquivos/ids/359577/7791866004211_E02.jpg?v=638258197250870000"},
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const sumar = (id) => {
    const producto = productos.find(producto => producto.id === id);
        if (producto && producto.cantidad < producto.stock) {
            producto.cantidad++;
            actualizarCantidad(id);
        }
    };
      
const restar = (id) => {
    const producto = productos.find(producto => producto.id === id);
        if (producto && producto.cantidad > 0) {
            producto.cantidad--;
            actualizarCantidad(id);
        }
    };
      
const actualizarCantidad = (id) => {
    const producto = productos.find(producto => producto.id === id);
    const cantidadElemento = document.getElementById(`cantidad-${id}`);
    if (cantidadElemento) {
        cantidadElemento.innerText = `Cantidad: ${producto.cantidad}`;
    }
};

const renderProducts = (arrayProductos) => {
    let containerProducts = document.getElementById("products-container");
    containerProducts.innerHTML = "";

    arrayProductos.forEach((producto) => {
        let productCard = document.createElement("div");
        productCard.className = "producto";
        productCard.innerHTML = `<img class="imagen" src=${producto.image} />
            <h3 class="todo">${producto.nombre}</h3>
            <p class="todo" id="stock-${producto.id}">Stock: ${producto.stock}</p>
            <p class="todo">$${producto.precio}</p>
            <p class="todo" id="cantidad-${producto.id}">Cantidad: ${producto.cantidad}</p>
            <button onclick="sumar(${producto.id})">Sumar</button>
            <button onclick="restar(${producto.id})">Restar</button>
            <button onclick="agregarAlCarrito(${producto.id})">
            Agregar al carrito</button>
        `;
        containerProducts.appendChild(productCard);
      });
    };

    renderProducts(productos);

    const agregarAlCarrito = (id) => {
        const producto = productos.find(producto => producto.id === id);
        if (producto && producto.cantidad > 0) {
            carrito.push({ ...producto, cantidad: producto.cantidad });
            producto.stock -= producto.cantidad; 
            producto.cantidad = 0; 
            localStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarCantidad(id); 
            actualizarStock(id); 
        }
    };

    const actualizarStock = (id) => {
        const producto = productos.find(producto => producto.id === id);
        if (producto) {
          const stockElemento = document.querySelector(`#stock-${id}`);
          if (stockElemento) {
            stockElemento.innerText = `Stock: ${producto.stock}`;
          }
        }
      };
      

      const inputSearch = document.getElementById("search");
      if (inputSearch) {
        inputSearch.addEventListener("input", (evento) => {
          let value = evento.target.value.toLowerCase();
          let arrayFiltrado = productos.filter((producto) =>
            producto.category.toLowerCase().includes(value)
          );
          renderProducts(arrayFiltrado);
        });
      }