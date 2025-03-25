// 5. Crear una función que permita verificar si una edad ingresada corresponde a un
// adolescente. Teniendo en cuenta que el rango para que sea catalogado como
// adolescente es que su edad sea mayor o igual a 13 y menor o igual a 19. Debe
// devolver true en caso de que se cumpla la condición o false en caso de que no.

function esAdolescente(edad) {
    if (edad >= 13 && edad <= 19) {
        return true;
    } else {
        return false;
    }
}