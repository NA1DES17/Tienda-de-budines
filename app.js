document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los contenedores de tarjetas
  const tarjetas = document.querySelectorAll(".tarjeta");

  // Iteramos sobre cada tarjeta para agregar los eventos a los botones
  tarjetas.forEach((tarjeta) => {
    const plusButton = tarjeta.querySelector(".plus");
    const delButton = tarjeta.querySelector(".del");
    const display = tarjeta.querySelector(".display");

    // Inicializamos el valor del display
    let cantidad = 0;
    //display.value = cantidad;

    // Evento para el botón de suma
    plusButton.addEventListener("click", () => {
      cantidad++;
      display.value = cantidad;
    });

    // Evento para el botón de resta
    delButton.addEventListener("click", () => {
      if (cantidad > 0) {
        cantidad--;
      }
      display.value = cantidad;
    });
  });
});
