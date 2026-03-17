import { Tienda } from "./tienda.js";
import { Empleado } from "./empleado.js";

var tienda = new Tienda();

var listajson = localStorage.getItem("tienda");

if (listajson) {
  tienda.lista = JSON.parse(listajson);
}

var form = document.getElementById("nuevoEmpleado");

var thead = `<thead>
        <tr>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Salario</th>
            <th>Identificador</th>
        </tr>
    </thead>`;

const tabla = document.getElementById("tablaEmp");

document.getElementById("agregar").addEventListener("click", function () {
  if (!form.checkValidity()) {
    alert("Por favor, complete todos los campos correctamente.");
    return;
  }
  tienda.agregarEmpleado(
    new Empleado(...Array.from(new FormData(form).values())),
  );
  form.reset();
  localStorage.setItem("tienda", JSON.stringify(tienda.listaEmpleados()));
});

document.getElementById("eliminar").addEventListener("click", function () {
  let lista = tienda.listaEmpleados();
  if (lista.length === 0) {
    alert("No hay empleados para eliminar.");
    return;
  }

  const identificador = prompt(
    "Ingrese el identificador del empleado a eliminar:",
  );
  if (!identificador) {
    alert("Identificador no válido.");
    return;
  }
  if (!lista.some((empleado) => empleado.identificador === identificador)) {
    alert("No se encontró un empleado con ese identificador.");
    return;
  }
  tienda.eliminarEmpleado(identificador);

  document.getElementById("mostrar").click();

  localStorage.setItem("tienda", JSON.stringify(tienda.listaEmpleados()));
});

document.getElementById("mostrar").addEventListener("click", function () {
  let lista = tienda.listaEmpleados();
  if (lista.length === 0) {
    alert("No hay empleados para mostrar.");
    return;
  }

  tabla.innerHTML = thead;
  lista.forEach((empleado) => {
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell();
    let celda2 = fila.insertCell();
    let celda3 = fila.insertCell();
    let celda4 = fila.insertCell();
    celda1.textContent = empleado.nombre;
    celda2.textContent = empleado.puesto;
    celda3.textContent = empleado.salario;
    celda4.textContent = empleado.identificador;
  });
});

document.getElementById("filtrar").addEventListener("click", function () {
  let lista = tienda.listaEmpleados();
  if (lista.length === 0) {
    alert("No hay empleados para filtrar.");
    return;
  }

  tabla.innerHTML = thead;
  const puesto = prompt("Ingrese el puesto a filtrar:");
  tienda.filtrarEmpleados(puesto).forEach((empleado) => {
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell();
    let celda2 = fila.insertCell();
    let celda3 = fila.insertCell();
    let celda4 = fila.insertCell();
    celda1.textContent = empleado.nombre;
    celda2.textContent = empleado.puesto;
    celda3.textContent = empleado.salario;
    celda4.textContent = empleado.identificador;
  });
});

document.getElementById("ordenar").addEventListener("click", function () {
  let lista = tienda.listaEmpleados();
  if (lista.length === 0) {
    alert("No hay empleados para ordenar.");
    return;
  }

  tabla.innerHTML = thead;
  tienda.ordenarListaPorSalario().forEach((empleado) => {
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell();
    let celda2 = fila.insertCell();
    let celda3 = fila.insertCell();
    let celda4 = fila.insertCell();
    celda1.textContent = empleado.nombre;
    celda2.textContent = empleado.puesto;
    celda3.textContent = empleado.salario;
    celda4.textContent = empleado.identificador;
  });
});
