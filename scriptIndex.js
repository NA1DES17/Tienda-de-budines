const acordeon = document.getElementsByClassName("contenedor-acordeon");

for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function () {
    this.classList.toggle("activa");
  });
}

// --------------Sticky header---------------
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  var main = this.document.querySelector("main");
  header.classList.toggle("abajo", this.window.scrollY > 0);
  main.classList.toggle("abajo", this.window.scrollY > 0);
});
// --------------Sticky header---------------

// --------------Slider---------------

let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".opinion");
  const slider = document.querySelector(".slider");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }

  const offset = -slideIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(slideIndex + step);
}

// Muestra el primer slide
showSlide(slideIndex);
// --------------Slider---------------
// --------------Galeria---------------
document.addEventListener("DOMContentLoaded", function () {
  const opButtons = document.querySelectorAll(".op");
  const imgPrincipal = document.getElementById("imgPrincipal");
  imgPrincipal.src = "src/budinChocolate.png";
  opButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log(button.value);
      imgPrincipal.style.border = "solid 1px red";
      switch (button.value) {
        case "ingles":
          imgPrincipal.style.border = "solid 3px blue";
          imgPrincipal.src = "src/budinIngles.png";
          break;
        case "limon":
          imgPrincipal.style.border = "solid 3px yellow";
          imgPrincipal.src = "src/budinLimon.png";
          break;
        case "marmolado":
          imgPrincipal.style.border = "solid 3px brown";
          imgPrincipal.src = "src/budinMarmolado.jpeg";
          break;
        case "naranja":
          imgPrincipal.style.border = "solid 3px orange";
          imgPrincipal.src = "src/budinNaranja.png";
          break;
        case "vainilla":
          imgPrincipal.style.border = "solid 3px pink";
          imgPrincipal.src = "src/budinVainilla.png";
      }
    });
  });
});
// --------------Galeria---------------
