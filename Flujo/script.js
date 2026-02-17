var arreglo = [];

document.getElementById("evaluar").addEventListener("click", function () {
  let entrada = document.getElementById("num").value;

  if (entrada === "") {
    alert("Por favor ingresa un número");
    return;
  } else if (Number.isNaN(parseFloat(entrada))) {
    alert("Entrada no válida");
    return;
  } else if (parseFloat(entrada) >= 1000) {
    alert("Número demasiado alto");
    return;
  }

  entrada = parseFloat(entrada);

  const resultado = document.getElementById("resultado");

  if (entrada < 0) {
    resultado.textContent = "Número negativo";
    resultado.style.color = "red";
  } else if (entrada <= 10) {
    resultado.textContent = "Número pequeño";
    resultado.style.color = "blue";
  } else if (entrada <= 50) {
    resultado.textContent = "Número mediano";
    resultado.style.color = "orange";
  } else {
    resultado.textContent = "Número grande";
    resultado.style.color = "green";
  }

  arreglo.push(entrada);

  const historial = document.getElementById("historial");

  let li = document.createElement("li");

  li.textContent = `[${arreglo.length.toString().padStart(3, "0")}] --- ${entrada} --- ${resultado.textContent}`;
  li.style.color = resultado.style.color;

  historial.appendChild(li);
});

document.getElementById("limpiar").addEventListener("click", function () {
  if (arreglo.length == 0) return;
  const entrada = document.getElementById("num");
  const resultado = document.getElementById("resultado");
  const historial = document.getElementById("historial");

  alert(
    `Has ingresado ${arreglo.length} números!
El número más grande que ingresaste fue: ${Math.max(...arreglo)}`,
  );

  document.getElementById("num").value = "";
  resultado.replaceChildren();
  historial.replaceChildren();

  arreglo = [];
});
