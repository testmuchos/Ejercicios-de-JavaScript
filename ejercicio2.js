// 2. Crear una función que se llame nombreResolucion, la cual teniendo en cuenta
// los siguientes criterios devuelva el nombre de la resolución.

// Nombre Ancho Alto
// 8K 7680 4320
// 4K 3840 2160
// WQHD 2560 1440
// FHD 1920 1080
// HD 1280 720

function nombreResolucion(ancho, alto) {
    if (ancho == 7680 && alto == 4320) {
        return "8K";
    }
    else if (ancho == 3840 && alto == 2160) {
        return "4K";
    }
    else if (ancho == 2560 && alto == 1440) {
        return "WQHD";
    }
    else if (ancho == 1920 && alto == 1080) {
        return "FHD";
    }
    else if (ancho == 1280 && alto == 720) {
        return "HD";
    }
    else {
        return "Resolución no encontrada";
    }
}