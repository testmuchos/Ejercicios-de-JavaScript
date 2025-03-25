// 9. Crear un array de 3 objetos que representen productos en una tienda y permitir
// buscar un producto por su nombre de forma exacta. Cuando se encuentre el
// producto, se detendrá el ciclo y se mostrará la información del producto.
// a. Array de productos (puede ser modificado este es un ejemplo)
// Objetos de Producto: Cada producto tiene un objeto con propiedades para
// el nombre, precio y cantidad.

// let producto1 = {
//     nombre: &quot;Camiseta&quot;,
//     precio: 15,
//     cantidad: 50
// };
// let producto2 = {
//     nombre: &quot;Pantalón&quot;,
//     precio: 25,
//     cantidad: 30
// };
// let producto3 = {
//     nombre: &quot;Zapatos&quot;,
//     precio: 50,
//     cantidad: 20
// };
// b. Se debe crear un array de inventario que contiene los productos.
// c. Crear una Función buscarProductoPorNombre:
//  Utiliza un bucle para recorrer el array de productos.
//  Compara el nombre de cada producto exactamente con el nombre buscado.
//  Si encuentra el producto, muestra sus detalles en la consola.
//  Si termina el bucle sin encontrar el producto, muestra un mensaje indicando
// que no se encontró.

var producto1 = {
    nombre: "Camiseta",
    precio: 15,
    cantidad: 50
};

var producto2 = {
    nombre: "Pantalón",
    precio: 25,
    cantidad: 30
};

var producto3 = {
    nombre: "Zapatos",
    precio: 50,
    cantidad: 20
};

var inventario = [producto1, producto2, producto3];

function buscarProductoPorNombre(productos, nombreBuscado) {
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].nombre == nombreBuscado) {
            console.log("Producto encontrado:");
            console.log("Nombre: " + productos[i].nombre);
            console.log("Precio: $" + productos[i].precio);
            console.log("Cantidad: " + productos[i].cantidad);

            return productos[i];
        }
    }

    console.log("Producto no encontrado");
    return null;
}

console.log("Buscando Camiseta:");
buscarProductoPorNombre(inventario, "Camiseta");

console.log("\nBuscando Chaqueta:");
buscarProductoPorNombre(inventario, "Chaqueta");
