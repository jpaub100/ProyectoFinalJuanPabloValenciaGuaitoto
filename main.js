document.addEventListener("DOMContentLoaded", function () {
  let offset = 0;

  const compraForm = document.getElementById("compraForm");
  if (compraForm) {
    compraForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const presupuesto = parseInt(
        document.getElementById("presupuesto").value
      );
      const cantidad = parseInt(document.getElementById("cantidad").value);
      const direccion = document.getElementById("direccion").value;
      const entrega = document.querySelector('input[name="entrega"]:checked');

      if (
        nombre &&
        presupuesto > 0 &&
        cantidad > 0 &&
        cantidad <= 20 &&
        direccion &&
        entrega
      ) {
        alert("Compra registrada correctamente");
        window.location.href = "productos.html";
      } else {
        alert("Por favor, completa todos los campos correctamente.");
      }
    });
  }

  const productosLista = document.getElementById("productosLista");
  if (productosLista) {
    function cargarProductos() {
      const limite = 15;
      const nuevosProductos = productos.slice(offset, offset + limite);

      nuevosProductos.forEach((producto) => {
        const productoElemento = document.createElement("div");
        productoElemento.className = "producto";
        productoElemento.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p>Precio: $${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productosLista.appendChild(productoElemento);
      });

      offset += limite;
    }

    cargarProductos();

    function aplicarFiltros() {
      const categoria = document.getElementById("categoria").value;
      const tipo = document.getElementById("tipo").value;

      productosLista.innerHTML = "";

      productos
        .filter(
          (p) =>
            (categoria === "todos" || p.categoria === categoria) &&
            (tipo === "todos" || p.tipo === tipo)
        )
        .forEach((producto) => {
          const productoElemento = document.createElement("div");
          productoElemento.className = "producto";
          productoElemento.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
          `;
          productosLista.appendChild(productoElemento);
        });
    }

    document
      .getElementById("filtrar")
      .addEventListener("click", aplicarFiltros);
    document
      .getElementById("limpiarFiltros")
      .addEventListener("click", function () {
        document.getElementById("categoria").value = "todos";
        document.getElementById("tipo").value = "todos";
        productosLista.innerHTML = "";
        offset = 0;
        cargarProductos();
      });

    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        cargarProductos();
      }
    });

    window.agregarAlCarrito = function (id) {
      const producto = productos.find((p) => p.id === id);
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      const productoEnCarrito = carrito.find((item) => item.id === producto.id);
      if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
      } else {
        carrito.push({ ...producto, cantidad: 1 });
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert(`Producto "${producto.nombre}" agregado al carrito`);
    };

    const irAlCarritoBtn = document.createElement("button");
    irAlCarritoBtn.textContent = "Ir al Carrito";
    irAlCarritoBtn.className = "ir-al-carrito";
    irAlCarritoBtn.onclick = () => {
      window.location.href = "carrito.html";
    };
    document.body.appendChild(irAlCarritoBtn);
  }

  const cargarCarrito = () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoItems = document.getElementById("carritoItems");
    const totalProductos = document.getElementById("totalProductos");
    const costoDomicilio = document.getElementById("costoDomicilio");
    const totalCompra = document.getElementById("totalCompra");
    let totalCantidad = 0;
    let totalPrecio = 0;
    const cargoDomicilio = 5000;

    carritoItems.innerHTML = "";

    carrito.forEach((producto) => {
      const totalProducto = producto.precio * producto.cantidad;
      totalCantidad += producto.cantidad;
      totalPrecio += totalProducto;

      const productoElemento = document.createElement("tr");
      productoElemento.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.descripcion}</td>
        <td>$${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>$${totalProducto.toFixed(2)}</td>
      `;
      carritoItems.appendChild(productoElemento);
    });

    totalProductos.textContent = `Total de productos: ${totalCantidad}`;
    costoDomicilio.textContent = `Cargo por domicilio: $${cargoDomicilio}`;
    totalCompra.textContent = `Total de la compra: $${(
      totalPrecio + cargoDomicilio
    ).toFixed(2)}`;
  };

  cargarCarrito();

  const ejecutarCompra = document.getElementById("ejecutarCompra");
  if (ejecutarCompra) {
    ejecutarCompra.addEventListener("click", function () {
      const nombreTarjeta = document.getElementById("nombreTarjeta").value;
      const numeroTarjeta = document.getElementById("numeroTarjeta").value;
      const fechaExpiracion = document.getElementById("fechaExpiracion").value;
      const codigoSeguridad = document.getElementById("codigoSeguridad").value;

      if (
        nombreTarjeta &&
        numeroTarjeta &&
        fechaExpiracion &&
        codigoSeguridad
      ) {
        new Promise((resolve) => {
          setTimeout(() => {
            resolve("Compra realizada con éxito");
          }, 2000);
        }).then((mensaje) => {
          alert(mensaje);
          localStorage.removeItem("carrito");
          window.location.href = "index.html";
        });
      } else {
        alert("Por favor, completa todos los campos de la tarjeta.");
      }
    });
  }
});
