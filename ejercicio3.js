// 3. Construir una función que permita obtener un elemento por si índice, pero el
// valor que le pasemos como índice no puede ser menor que cero y el elemento
// tiene que existir en el array.

function obtenerElemento(arreglo, indice) {
    if (indice < 0) {
        return "Error: El índice no puede ser negativo";
    }
    
    if (indice >= arreglo.length) {
        return "Error: Índice fuera de rango";
    }
    
    return arreglo[indice];
}
