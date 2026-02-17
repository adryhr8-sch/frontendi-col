var productos = {
  "Tecnología": [
    { "nombre": " Mouse", "stock": 180 },
    { "nombre": " Teclado", "stock": 160 },
    { "nombre": " Impresora", "stock": 200 },
  ], 
  "Electrodomésticos": [
    { "nombre": " Microondas", "stock": 50 },
    { "nombre": " Refrigerador", "stock": 30 },
    { "nombre": " Licuadora", "stock": 100 },
  ], 
  "Frutas": [ 
    { "nombre": " Naranja", "stock": 200 },
    { "nombre": " Manzana", "stock": 180 },
    { "nombre": " Plátano", "stock": 150 },
  ],
};

for (let [cat, prods] of Object.entries(productos)) {
    let prodNames = [];
    for (let prod of prods) {
        prodNames.push(prod["nombre"]);
    }
    console.log(`La categoría ${cat} tiene los productos ${prodNames.join(", ")}`);
}

for (let cat of Object.keys(productos)) {
    let catList = document.getElementById("categorías");
    let opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    catList.appendChild(opt);
}

document.getElementById("categorías").addEventListener("change", function() {
    let prodsList = productos[this.value];
    let prodSel = document.getElementById("productos");
    prodSel.replaceChildren();
    for (let prod of prodsList) {
        let opt = document.createElement("option")
        opt.value = prod["nombre"];
        opt.textContent = `${prod["nombre"]} - Stock: ${prod["stock"]}`;
        prodSel.appendChild(opt);
    }
});

document.getElementById("export").addEventListener("click", function() {
    if (!document.getElementById("productos").hasChildNodes()) {
        alert("Selecciona una categoría para exportar");
        return;
    }
    let cat = document.getElementById("categorías").value;
    let prods = productos[cat];
    let dict_prods = { [cat]: prods };
    let json_prods = JSON.stringify(dict_prods, null, 2);
    const blob = new Blob([json_prods], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = 'productos.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

document.getElementById("import").addEventListener("click", function() {
    let fileInput = document.getElementById("fileInput");
    if (fileInput.files.length === 0) {
        alert("Selecciona un archivo JSON para importar");
        return;
    }
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        try {
            // Comprueba que la estructura del JSON es correcta
            let importedData = JSON.parse(e.target.result);
            if (typeof importedData !== "object" || Array.isArray(importedData)) {
                throw new Error("El JSON debe ser un objeto con categorías como claves");
            }
            for (let [cat, prods] of Object.entries(importedData)) {
                if (!Array.isArray(prods)) {
                    throw new Error(`La categoría ${cat} debe contener un array de productos`);
                }
                for (let prod of prods) {
                    if (typeof prod["nombre"] !== "string" || typeof prod["stock"] !== "number") {
                        throw new Error(`Cada producto en la categoría ${cat} debe tener un nombre (string) y stock (number)`);
                    }
                }
            }
            // Si la estructura es correcta, actualiza el objeto productos
            productos = { ...productos, ...importedData}
            // Actualiza el menú de categorías
            let catList = document.getElementById("categorías");
            catList.replaceChildren();
            for (let cat of Object.keys(productos)) {
                let opt = document.createElement("option");
                opt.value = cat;
                opt.textContent = cat;
                catList.appendChild(opt);
            }
            // Limpia la lista de productos
            document.getElementById("productos").replaceChildren();
            alert("Productos importados correctamente");
        } catch (error) {
            alert(`Error al importar: ${error.message}`);
        }
    };
    reader.readAsText(file);
});