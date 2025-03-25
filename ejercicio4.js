// Ejercicio 4: Sumar elementos de un arreglo

function sumarArreglo(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i];
    }
    return suma;
}