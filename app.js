import Budin from "./Budin.js";
// const nombre = document.getElementById("name").value;
// let mensaje = `Hola, soy ${nombre}\nQuiero:\n`;
// --------------Sticky header---------------
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  var main = this.document.querySelector("main");
  header.classList.toggle("abajo", this.window.scrollY > 0);
  main.classList.toggle("abajo", this.window.scrollY > 0);
});
// --------------Sticky header---------------
// --------------No doble click zoom---------------
document.addEventListener("dblclick", function (event) {
  event.preventDefault();
});
// --------------No doble click zoom---------------
// --------------Botones y display---------------
document.addEventListener("DOMContentLoaded", () => {
  //Seleccionamos todos los <h2> de TITLE
  const titulos = document.querySelectorAll(".title");
  //Iteramos sobre los <h2> TITLE para agregar el titulo
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].innerHTML = listaBudines[i].sabor;
  }

  //Seleccionamos todos los <p> de PRICE
  const precios = document.querySelectorAll(".price");
  //Iteramos sobre los <p> PRICE para agregar el precio
  for (let i = 0; i < precios.length; i++) {
    precios[i].innerHTML = listaBudines[i].precio;
  }

  //Seleccionamos todos los <p> de DESCRIPTION
  const descripciones = document.querySelectorAll(".description");
  //Iteramos sobre los <p> DESCRIPTION para agregar el precio
  for (let i = 0; i < precios.length; i++) {
    descripciones[i].innerHTML = listaBudines[i].descripción;
  }

  // Seleccionamos todos los contenedores de TARJETAS
  const tarjetas = document.querySelectorAll(".tarjeta");
  // Iteramos sobre cada TARJETAS para agregar los eventos a los botones
  tarjetas.forEach((tarjeta) => {
    const plusButton = tarjeta.querySelector(".plus");
    const delButton = tarjeta.querySelector(".del");
    const display = tarjeta.querySelector(".display");

    // Inicializamos el valor del display
    let cantidad = 0;

    // Evento para el botón de suma
    plusButton.addEventListener("click", () => {
      cantidad++;
      display.value = cantidad;
      updateValues(); // Llamar a la función para actualizar la lista de valores
    });

    // Evento para el botón de resta
    delButton.addEventListener("click", () => {
      if (cantidad > 0) {
        cantidad--;
      }
      display.value = cantidad;
      updateValues(); // Llamar a la función para actualizar la lista de valores
    });
  });

  // Función para actualizar la lista de valores de los displays
  let sumaTotal = 0; // Variable global para almacenar el total

  function updateValues() {
    sumaTotal = 0; // Reiniciamos el total
    valores.length = 0; // Limpiamos el array de valores

    tarjetas.forEach((tarjeta, index) => {
      const display = tarjeta.querySelector(".display");
      const cantidad = parseInt(display.value);
      const precio = parseFloat(
        listaBudines[index].precio.replace(/[^0-9.-]+/g, "")
      ); // Convertir el precio a número

      if (cantidad > 0) {
        valores.push(cantidad);
        sumaTotal += cantidad * precio; // Sumar el total por cada producto
      } else {
        valores.push(0);
      }
    });

    // Mostrar el total en la interfaz
    const totalDisplay = document.getElementById("totalDisplay");
    totalDisplay.innerHTML = `Total: $${sumaTotal.toLocaleString()}`;
  }

  document.getElementById("verPedido").addEventListener("click", () => {
    const nombre = document.getElementById("name").value;
    let mensaje = `<strong>Mi pedido:</strong>\n<br>`;
    let mensajeWp = `Hola, soy ${nombre}\nTe pido:\n`;

    // Recorremos cada tarjeta para obtener el sabor y cantidad
    tarjetas.forEach((tarjeta, index) => {
      const display = tarjeta.querySelector(".display");
      const cantidad = display.value;

      if (cantidad > 0) {
        const sabor = listaBudines[index].sabor;
        mensaje += `- ${sabor}: ${cantidad}\n<br>`;
        mensajeWp += `- ${sabor}: ${cantidad}\n`;
      }
    });

    // Agregar el total al mensaje
    mensaje += `<strong>Total: $${sumaTotal.toLocaleString()}</strong>`;
    mensajeWp += `Total: $${sumaTotal.toLocaleString()}`;

    if (nombre === "") {
      alert("Por favor ingrese su nombre");
    } else {
      // Codificar el mensaje para la URL
      const mensajeCodificado = encodeURIComponent(mensajeWp);
      const enviarPedido = document.getElementById("enviarPedido");
      const pedidoFinalizado = document.getElementById("pedidoFinalizado");

      // Mostramos el pedido en pantalla
      pedidoFinalizado.innerHTML = mensaje;

      // Botón de confirmación del pedido
      enviarPedido.style.display = "flex";
      enviarPedido.addEventListener("click", () => {
        // Enviamos el pedido por WhatsApp
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=5491138561101&text=${mensajeCodificado}`;

        alert("Pedido realizado\n(La página se recargará)");
        setTimeout(window.open(urlWhatsApp, "_blank"), 10000);
        window.scrollTo(0, 0);
        window.location.reload();
      });
    }
  });
});
// --------------Botones y display---------------

// --------------Productos---------------
const vainilla = new Budin(
  "Vainilla",
  "$100.50",
  "El budín de vainilla es la receta tradicional del budín saborizado con vainilla."
);
const limon = new Budin(
  "Limon",
  "$200.00",
  "El budín de limón es la receta tradicional del budín saborizado con limón."
);
const naranja = new Budin(
  "Naranja",
  "$300.00",
  "El budín de naranja es la receta tradicional del budín saborizado con naranja."
);
const ingles = new Budin(
  "Ingles",
  "$400.75",
  "El budín inglés o <em>plum cake</em> es un bizcocho hecho con frutos secos, frutas confitadas y algun tipo de licor."
);
const marmolado = new Budin(
  "Marmolado",
  "$500.00",
  "El budín Marmolado se caracteriza por ser bicolor, generalmente es combinado de chocolate y vainilla."
);
const chocolate = new Budin(
  "Chocolate",
  "$600.00",
  "El budín de chocolate es un tipo de postre con sabor a chocolate parecido a un pastel."
);

const listaBudines = [vainilla, limon, naranja, ingles, marmolado, chocolate];
const valores = [];
