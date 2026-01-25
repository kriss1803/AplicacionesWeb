// Arreglo de productos
const productos = [
  {
    nombre: "Bongo's Chun",
    precio: 3.75,
    descripcion: "Hamburguesa con 125gr de carne, queso cheddar, vegetales y salsa de la casa"
  },
  {
    nombre: "Bongo's Crack",
    precio: 5.25,
    descripcion: "Hamburguesa con 250gr de carne, queso cheddar, salsa de tocino, vegetales y salsa de la casa"
  },
  {
    nombre: "Bongo's Especial",
    precio: 5.75,
    descripcion: "Hamburguesa con 250gr de carne, queso cheddar, jamón, chorizo, huevo, vegetales y salsa de la casa"
  }
];

// Referencias al DOM
const listaProductos = document.getElementById("lista_productos");
const btnAgregar = document.getElementById("btn_agregar");

// Función para renderizar productos
function renderizarProductos() {
  listaProductos.innerHTML = "";
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - Precio: $${producto.precio} - Descripción: ${producto.descripcion}`;
    listaProductos.appendChild(li);
  });
}

// Evento para agregar un nuevo producto
btnAgregar.addEventListener("click", () => {
  const nombre = prompt("Ingrese el nombre del producto:");
  const precio = prompt("Ingrese el precio del producto:");
  const descripcion = prompt("Ingrese una descripción del producto:");

  if (nombre && precio && descripcion) {
    const nuevoProducto = {
      nombre: nombre,
      precio: precio,
      descripcion: descripcion
    };
    productos.push(nuevoProducto);
    renderizarProductos();
  } else {
    alert("Debe completar todos los campos para agregar el producto.");
  }
});

// Renderizar productos al cargar la página
renderizarProductos();