class Producto {
  constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }

  mostrarDetalle() {
    return `Nombre: ${this.nombre} - Precio: ${this.precio} - Categoría: ${this.categoria}`;
  }
}

var productos = [
  new Producto("Laptop", 15000, "Cómputo"),
  new Producto("Smartphone", 8000, "Electrónica"),
  new Producto("Tablet", 5000, "Cómputo"),
  new Producto("Auriculares", 2000, "Audio"),
  new Producto("Smartwatch", 3000, "Wearables"),
  new Producto("Cámara", 12000, "Fotografía"),
  new Producto("Televisor", 20000, "Electrónica"),
  new Producto("Impresora", 4000, "Cómputo"),
  new Producto("Altavoces", 2500, "Audio"),
  new Producto("Consola de videojuegos", 6000, "Entretenimiento"),
];

document.getElementById("resultado").addEventListener("click", function () {
  let choice = productos[Math.floor(Math.random() * productos.length)];
  let detalle = choice.mostrarDetalle();
  document.getElementById("producto").textContent = detalle;
});
