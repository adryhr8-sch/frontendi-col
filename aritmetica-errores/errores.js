var historial = [];

function calcularOperacion(operación, valor1, valor2) {
  historial.push({ operación: operación, a: valor1, b: valor2 });
  registrar();
  try {
    if (valor1 == "" || valor2 == "") {
      console.log(valor2 ? `Valor1: "${valor1}"` : `Valor2: "${valor2}"`);
      throw new Error("Faltan valores en los campos");
    }

    a = parseFloat(valor1);
    b = parseFloat(valor2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      console.log(
        Number.isNaN(a) ? `Valor1: "${valor1}"` : `Valor2: "${valor2}"`,
      );
      throw new Error("Entradas inválidas, deben ser números");
    }

    switch (operación) {
      case "sumar":
        return a + b;
      case "restar":
        return a - b;
      case "multiplicar":
        return a * b;
      case "dividir":
        if (b == 0) {
          console.log(`Valor2: 0, operación: ${a}/0`);
          throw new Error("No se puede dividir entre 0");
        }
        return a / b;
      default:
        console.log(
          `Operación no válida: ${operación}, operaciones válidas: sumar, restar, multiplicar, dividir`,
        );
        throw new Error("Operación no válida");
    }
  } catch (e) {
    return e;
  } finally {
    console.log("Operación finalizada.");
  }
}

function registrar() {
  tabla = document.getElementById("historial");
  tabla.replaceChildren();
  tabla.innerHTML = `<thead>
            <tr>
              <th>Operación</th>
              <th>Valor 1</th>
              <th>Valor 2</th>
            </tr>
          </thead>`;
  for (let i of historial) {
    fila = tabla.insertRow();
    fila.insertCell().textContent = i.operación;
    fila.insertCell().textContent = i.a;
    fila.insertCell().textContent = i.b;
  }
}

document.querySelectorAll("#botones-operaciones>button").forEach(function (el) {
  el.addEventListener("click", function () {
    const elemento = document.getElementById("resultado");
    const resultado = calcularOperacion(
      this.id,
      document.getElementById("a").value,
      document.getElementById("b").value,
    );
    const color = Number.isNaN(parseFloat(resultado)) ? "darkblue" : "green";
    elemento.style.color = color;
    elemento.textContent = resultado;
  });
});
