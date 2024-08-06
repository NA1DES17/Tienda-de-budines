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
  function updateValues() {
    const valores = [];
    tarjetas.forEach((tarjeta) => {
      const display = tarjeta.querySelector(".display");
      valores.push(display.value);
    });
    //Los sabores y los valores se juntan para el mensaje
    for (let i = 0; i < valores.length; i++) {
      const mensaje = `${listaBudines[i].sabor}: ${valores[i]}`;
    }
  }

  // Evento para el botón Hacer Pedido
  /*document.getElementById("hacerPedido").addEventListener("click", () => {
    const nombre = document.getElementById("name").value;
    tarjetas.forEach((tarjeta, index) => {
      const display = tarjeta.querySelector(".display");
      const cantidad = display.value;
      if (cantidad > 0) {
        const sabor = listaBudines[index].sabor;
        console.log(
          `Nombre: ${nombre}, Producto: ${sabor}, Cantidad: ${cantidad}`
        );
      }
    });
  });*/
});
// --------------Botones y display---------------

// --------------Objeto budín---------------
class Budin {
  constructor(sabor, precio, descripción) {
    this.sabor = sabor;
    this.precio = precio;
    this.descripción = descripción;
  }
  saludar() {
    console.log(
      `Hola, soy un budin de ${this.sabor}, salgo ${this.precio} y ${this.descripción}`
    );
  }
}
// --------------Objeto budín---------------

// --------------Productos---------------
const vainilla = new Budin(
  "Vainilla",
  "$10.000,00",
  "El budín de vainilla es la receta tradicional del budín saborizado con vainilla."
);
const limon = new Budin(
  "Limon",
  "$20.000,00",
  "El budín de limón es la receta tradicional del budín saborizado con limón."
);
const naranja = new Budin(
  "Naranja",
  "$30.000,00",
  "El budín de naranja es la receta tradicional del budín saborizado con naranja."
);
const ingles = new Budin(
  "Ingles",
  "$40.000,00",
  "El budín inglés o <em>plum cake</em> es un bizcocho hecho con frutos secos, frutas confitadas y algun tipo de licor."
);
const marmolado = new Budin(
  "Marmolado",
  "$50.000,00",
  "El budín Marmolado se caracteriza por ser bicolor, generalmente es combinado de chocolate y vainilla."
);
const chocolate = new Budin(
  "Chocolate",
  "$60.000,00",
  "El budín de chocolate es un tipo de postre con sabor a chocolate parecido a un pastel."
);

const listaBudines = [vainilla, limon, naranja, ingles, marmolado, chocolate];
