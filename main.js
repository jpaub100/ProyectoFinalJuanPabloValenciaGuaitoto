document.addEventListener("DOMContentLoaded", function () {
  let offset = 0;
  const limite = 15;
  const cargoDomicilio = 15000;

  const numeroTarjetaInput = document.getElementById("numeroTarjeta");
  const codigoSeguridadInput = document.getElementById("codigoSeguridad");
  const nombreTarjetaInput = document.getElementById("nombreTarjeta");
  const fechaExpiracionInput = document.getElementById("fechaExpiracion");

  if (numeroTarjetaInput) {
    numeroTarjetaInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
      if (this.value.length > 16) {
        this.value = this.value.slice(0, 16);
      }
    });
  }

  if (codigoSeguridadInput) {
    codigoSeguridadInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  }

  if (nombreTarjetaInput) {
    nombreTarjetaInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
      if (this.value.length > 24) {
        this.value = this.value.slice(0, 24);
      }
    });
  }

  if (fechaExpiracionInput) {
    fechaExpiracionInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9/]/g, "");

      if (this.value.length === 2 && !this.value.includes("/")) {
        this.value = this.value + "/";
      }

      if (this.value.length > 5) {
        this.value = this.value.slice(0, 5);
      }
    });
  }

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
      const tipoEntrega = document.getElementById("tipoEntrega").value;

      if (
        nombre &&
        presupuesto > 0 &&
        cantidad > 0 &&
        cantidad <= 20 &&
        direccion &&
        tipoEntrega
      ) {
        localStorage.setItem("presupuesto", presupuesto);
        localStorage.setItem("tipoEntrega", tipoEntrega);
        alert("Compra registrada correctamente");
        window.location.href = "productos.html";
      } else {
        alert("Por favor, completa todos los campos correctamente.");
      }
    });
  }

  window.resetForm = function () {
    document.getElementById("compraForm").reset();
  };

  const productosLista = document.getElementById("productosLista");
  if (productosLista) {
    function cargarProductos() {
      const nuevosProductos = productos.slice(offset, offset + limite);
      nuevosProductos.forEach((producto) => {
        const productoElemento = document.createElement("div");
        productoElemento.className = "producto";
        productoElemento.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
          <h3>${producto.nombre}</h3>
          <p>Marca: ${producto.marca}</p>
          <p>Precio: $${producto.precio}</p>
          <button onclick="verDetalle(${producto.id})">Ver Detalle</button>
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
            <p>Marca: ${producto.marca}</p>
            <p>Precio: $${producto.precio}</p>
            <button onclick="verDetalle(${producto.id})">Ver Detalle</button>
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
      if (
        document.documentElement.scrollHeight -
          window.innerHeight -
          window.scrollY <
        200
      ) {
        cargarProductos();
      }
    });

    window.verDetalle = function (id) {
      const producto = productos.find((p) => p.id === id);
      const detalleContenido = document.getElementById("detalleContenido");
      detalleContenido.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p><strong>${producto.nombre}</strong></p>
        <p>Marca: ${producto.marca}</p>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
        <input type="number" id="cantidadProducto" min="1" max="20" value="1">
      `;
      document.getElementById("detalleProducto").dataset.productId = id;
    };

    document
      .getElementById("agregarAlCarritoDetalle")
      .addEventListener("click", function () {
        const cantidadInput = document.getElementById("cantidadProducto");
        const cantidad = parseInt(cantidadInput.value);

        if (isNaN(cantidad) || cantidad <= 0 || cantidad > 20) {
          alert("Por favor, ingresa una cantidad válida entre 1 y 20.");
          cantidadInput.value = 1;
          return;
        }

        const id = parseInt(
          document.getElementById("detalleProducto").dataset.productId
        );
        const producto = productos.find((p) => p.id === id);

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const totalCantidad =
          carrito.reduce((acc, item) => acc + item.cantidad, 0) + cantidad;

        if (totalCantidad > 20) {
          alert("No puedes agregar más de 20 productos en total al carrito.");
          return;
        }

        const productoEnCarrito = carrito.find(
          (item) => item.id === producto.id
        );

        if (productoEnCarrito) {
          productoEnCarrito.cantidad += cantidad;
        } else {
          carrito.push({ ...producto, cantidad });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`Producto "${producto.nombre}" agregado al carrito`);
      });

    document
      .getElementById("irAlCarritoDetalle")
      .addEventListener("click", function () {
        window.location.href = "carrito.html";
      });
  }

  const cargarCarrito = () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoItems = document.getElementById("carritoItems");
    const subtotalCompra = document.getElementById("subtotalCompra");
    const valorDomicilio = document.getElementById("valorDomicilio");
    const totalCompraConDomicilio = document.getElementById(
      "totalCompraConDomicilio"
    );
    const tipoEntrega = localStorage.getItem("tipoEntrega");
    let totalPrecio = 0;

    carritoItems.innerHTML = "";

    carrito.forEach((producto) => {
      const totalProducto = producto.precio * producto.cantidad;
      totalPrecio += totalProducto;

      const productoElemento = document.createElement("tr");
      productoElemento.classList.add("carrito-producto");
      productoElemento.innerHTML = `
        <td class="producto-imagen"><img src="${producto.imagen}" alt="${
        producto.nombre
      }" width="80"></td>
        <td class="producto-detalle">
          <p><strong>${producto.nombre}</strong></p>
          <p class="producto-descripcion">${producto.descripcion}</p>
          <p>Marca: ${producto.marca}</p>
        </td>
        <td class="producto-precio">$${producto.precio.toFixed(2)}</td>
        <td class="producto-cantidad">${producto.cantidad}</td>
        <td class="producto-subtotal">$${totalProducto.toFixed(2)}</td>
        <td class="producto-eliminar">
          <button class="boton-eliminar" onclick="eliminarDelCarrito(${
            producto.id
          })">🗑️</button>
        </td>
      `;
      carritoItems.appendChild(productoElemento);
    });

    subtotalCompra.textContent = `Subtotal de productos: $${totalPrecio.toFixed(
      2
    )}`;

    if (tipoEntrega === "domicilio") {
      valorDomicilio.style.display = "block";
      valorDomicilio.textContent = `Valor del domicilio: $${cargoDomicilio.toFixed(
        2
      )}`;
      totalCompraConDomicilio.textContent = `Total de la compra (con domicilio): $${(
        totalPrecio + cargoDomicilio
      ).toFixed(2)}`;
      totalCompraConDomicilio.style.display = "block";
    } else {
      valorDomicilio.style.display = "none";
      totalCompraConDomicilio.textContent = `Total de la compra: $${totalPrecio.toFixed(
        2
      )}`;
      totalCompraConDomicilio.style.display = "block";
    }
  };

  cargarCarrito();

  window.eliminarDelCarrito = function (id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter((p) => p.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
  };

  const ejecutarCompra = document.getElementById("ejecutarCompra");
  if (ejecutarCompra) {
    ejecutarCompra.addEventListener("click", function () {
      const nombreTarjeta = document.getElementById("nombreTarjeta").value;
      const numeroTarjeta = document.getElementById("numeroTarjeta").value;
      const fechaExpiracion = document.getElementById("fechaExpiracion").value;
      const codigoSeguridad = document.getElementById("codigoSeguridad").value;
      const paisEmision = document.getElementById("paisEmision").value;
      const tipoTarjeta = document.querySelector(
        'input[name="tipoTarjeta"]:checked'
      )?.value;
      const presupuesto = parseInt(localStorage.getItem("presupuesto"));
      const totalCompra = parseFloat(
        totalCompraConDomicilio.textContent.replace(/[^\d.-]/g, "")
      );

      if (
        !nombreTarjeta ||
        !numeroTarjeta ||
        !fechaExpiracion ||
        !codigoSeguridad ||
        !paisEmision ||
        !tipoTarjeta
      ) {
        alert("Por favor, completa todos los campos de la tarjeta.");
        return;
      }

      if (totalCompra > presupuesto) {
        alert("El presupuesto no cubre el total de la compra.");
        return;
      }

      ejecutarCompra.disabled = true;
      alert("Compra en progreso, espera por favor...");

      new Promise((resolve) => {
        const tiempoDeEspera = Math.floor(Math.random() * 2000) + 2000;
        setTimeout(() => {
          resolve("Compra realizada con éxito");
        }, tiempoDeEspera);
      })
        .then((mensaje) => {
          alert(mensaje);
          localStorage.removeItem("carrito");
          window.location.href = "index.html";
        })
        .catch((error) => {
          alert("Ocurrió un error al procesar la compra. Intenta de nuevo.");
          ejecutarCompra.disabled = false;
        });
    });
  }
});
