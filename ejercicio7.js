// 7. Crear una función que reciba el valor total de una compra y si el usuario tiene o
// no membresía (este último es un booleano).

// Tener en cuenta:
//  La función debe devolver el total de la compra con un descuento del
// 20% si el total de la compra es mayor a 100 o si tiene membresía.
//  La función devuelve el total con o sin descuento según corresponda.

function calcularDescuento(total, tieneMemebresia) {
    if (total > 100 || tieneMemebresia == true) {
        return total * 0.8;
    } else {
        return total;
    }
}