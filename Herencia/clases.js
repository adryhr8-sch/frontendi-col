class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarDetalle() {
    return `Nombre: ${this.nombre}, Precio ${this.precio}`;
  }
}

class ProductoElectronico extends Producto {
  constructor(nombre, precio, garantía) {
    super(nombre, precio);
    this.garantía = garantía;
  }

  mostrarDetalle() {
    return super.mostrarDetalle() + `, Garantía: ${this.garantía}`;
  }
}

var computadora = new ProductoElectronico("Computadora", 23000, "3 años");

document.getElementById("detalle").addEventListener("click", function () {
  document.getElementById("resultado").textContent =
    computadora.mostrarDetalle();
});
