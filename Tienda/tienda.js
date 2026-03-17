export class Tienda {
  constructor() {
    this.lista = [];
  }

  agregarEmpleado(empleado) {
    this.lista.push(empleado);
  }

  eliminarEmpleado(identificador) {
    this.lista = this.lista.filter(
      (empleado) => empleado.identificador !== identificador,
    );
  }

  listaEmpleados() {
    return this.lista;
  }

  filtrarEmpleados(puesto) {
    return this.lista.filter((empleado) => empleado.puesto === puesto);
  }

  ordenarListaPorSalario() {
    return this.lista.sort((a, b) => b.salario - a.salario);
  }
}
