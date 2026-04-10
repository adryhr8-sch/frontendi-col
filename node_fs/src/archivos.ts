import * as fs from "node:fs"


export function leer(archivo: string) {
    return fs.readFileSync(archivo, "utf-8");
}

export function escribir(archivo: string, texto: string) {
    fs.writeFileSync(archivo, texto);
}
