function nombreResolucion(ancho, alto) {
    if (ancho === 1366 && alto === 768) {
        return "HD";
    }
    // Puedes agregar más resoluciones aquí
    return "Resolución desconocida";
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre); // Imprime "HD"