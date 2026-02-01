document.getElementById("mostrarLista").addEventListener("click", function() {
    var secciónLista = document.getElementById("listaCiudades");
    if (secciónLista.innerHTML) {
        secciónLista.replaceChildren();
        return;
    }
    const ciudades = ["Nueva York", "Los Ángeles", "Chicago", "Houston", "Phoenix"];
    const encabezado = document.createElement("h2");
    encabezado.textContent = "Lista de Ciudades";
    secciónLista.appendChild(encabezado);
    const lista = document.createElement("ul");
    ciudades.forEach(function(ciudad) {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = ciudad;
        lista.appendChild(elementoLista);
    });
    secciónLista.appendChild(lista);
});