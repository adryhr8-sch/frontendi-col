import { leer, escribir } from "./archivos";


const archivo_datos: string = "datos.txt";
const archivo_salida: string = "resultado.txt";

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

//

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

escribir(archivo_salida, texto_resultado);

console.log("Proceso completado. Revisa el archivo resultado.txt para ver los resultados.");
