document.getElementById("btnSaludar").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    if (nombre) {
        alert(`¡Hola, ${nombre}!`);
    } else {
        alert("Por favor, escribe tu nombre.");
    }
});