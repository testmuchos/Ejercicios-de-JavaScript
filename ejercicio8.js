// 8. Crear un array de objetos para representar productos de una tienda y utilizar un
// bucle para calcular el valor total del inventario disponible.
// Tener en cuenta:

// a. Definir un array inventario que contenga varios objetos de productos. Cada
// producto debe tener las siguientes propiedades:
//  nombre: una cadena con el nombre del producto.
//  precio: un número que representa el precio del producto.
//  cantidad: un número que indica la cantidad disponible de ese
// producto en el inventario.

// Ejemplo:

// let inventario = [
//   { nombre: &quot;Camiseta&quot;, precio: 15, cantidad: 20 },
//   { nombre: &quot;Pantalón&quot;, precio: 25, cantidad: 10 },
//   { nombre: &quot;Zapatos&quot;, precio: 50, cantidad: 5 },
//   { nombre: &quot;Sombrero&quot;, precio: 10, cantidad: 8 },
// ];

// b. Crear una función llamada calcularValorInventario que:
//  Utilice un bucle para recorrer el array de productos.
//  Para cada producto, multiplique el precio por la cantidad para
// obtener el valor total de ese producto en el inventario.
//  Sume el valor de todos los productos y devuelva el valor total del
// inventario.

var inventario = [
    { nombre: "Camiseta", precio: 15, cantidad: 20 },
    { nombre: "Pantalón", precio: 25, cantidad: 10 },
    { nombre: "Zapatos", precio: 50, cantidad: 5 },
    { nombre: "Sombrero", precio: 10, cantidad: 8 }
];

function calcularValorInventario(productos) {
    var valorTotal = 0;

    for (var i = 0; i < productos.length; i++) {
        var valorProducto = productos[i].precio * productos[i].cantidad;
        valorTotal = valorTotal + valorProducto;
    }

    return valorTotal;
}

var totalInventario = calcularValorInventario(inventario);
console.log("Valor total del inventario: $" + totalInventario);

console.log("\nDetalle de productos:");
for (var i = 0; i < inventario.length; i++) {
    var producto = inventario[i];
    var valorProducto = producto.precio * producto.cantidad;
    console.log(producto.nombre + ": $" + valorProducto + " (Precio: $" + producto.precio + ", Cantidad: " + producto.cantidad + ")");
}