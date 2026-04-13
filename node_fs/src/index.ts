import { leer, escribir } from "./archivos";


// Creación de archivo de nombres por entrada de usuario

const archivo_datos: string = "datos.txt";

var nombres: Array<string> = [];

while (true) {
    const entrada: string = prompt("Escribe un nombre:") || "";
    if (entrada == "") {
        if (nombres.length < 5) {
            console.log("Escribe 5 nombres.");
            continue;
        }
        break;
    }
    nombres.push(entrada);
}

const texto: string = nombres.join("\n");

escribir(archivo_datos, texto);

console.log("El archivo de nombres se creó correctamente")

// Archivo de estadísticas

const archivo_stats: string = "resultado.txt";

const datos_nombres: Array<string> = leer(archivo_datos).split("\n");

const texto_resultado = `Lista original:
${datos_nombres.join("\n")}

Lista en mayúsculas:
${datos_nombres.map(nombre => nombre.toUpperCase()).join("\n")}

Lista ordenada alfabéticamente:
${datos_nombres.sort().join("\n")}

Nombre más largo: ${datos_nombres.reduce((a, b) => a.length >= b.length ? a : b)}

Total de nombres: ${datos_nombres.length}
`

escribir(archivo_stats, texto_resultado);

console.log("Proceso completado. Revisa el archivo resultado.txt para ver los resultados.");

// Búsqueda de nombres

console.log("Buscando nombres en el archivo...")

const nombres_origen: Array<string> = leer(archivo_datos).split("\n");

const query: string = prompt("Escribe un nombre para buscar:") || "";

if (nombres_origen.includes(query)) {
    const cantidad: number = nombres_origen.filter(nombre => nombre === query).length;
    console.log(`El nombre "${query}" aparece ${cantidad} veces en el archivo.`);
} else {
    console.log(`El nombre "${query}" no se encuentra en el archivo.`);
}
