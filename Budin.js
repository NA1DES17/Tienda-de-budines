// --------------Objeto budín---------------
class Budin {
  constructor(sabor, precio, descripción) {
    this.sabor = sabor;
    this.precio = precio;
    this.descripción = descripción;
    this.cantidadBud;
  }
  saludar() {
    console.log(
      `Hola, soy un budin de ${this.sabor}, salgo ${this.precio} y ${this.descripción}`
    );
  }
}
// --------------Objeto budín---------------
export default Budin;
