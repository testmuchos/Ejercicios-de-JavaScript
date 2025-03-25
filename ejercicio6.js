// 6. Crear una función llamada estaEnRangoOExtremoque reciba un número entero.
// La función debe devolver true si el número está entre 1 y 10 (inclusive) o si es
// exactamente 20. En cualquier otro caso, debe devolver false.

// Requisitos:

// Utilice los operadores &amp;&amp; y || para verificar si el número está en el rango o
// es el valor específico.

function estaEnRangoOExtremo(numero) {
    if ((numero >= 1 && numero <= 10) || numero == 20) {
        return true;
    } else {
        return false;
    }
}