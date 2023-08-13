// Función para obtener el año actual
function obtenerAnioActual() {
    // Crear un nuevo objeto de fecha
    const fecha = new Date();

    // Obtener el año actual usando el método getFullYear()
    const anioActual = fecha.getFullYear();

    // Devolver el año actual
    return anioActual;
}

// Función para establecer el año actual dentro del elemento con el id "anio"
function establecerAnioActual() {
    // Obtener el año actual llamando a la función obtenerAnioActual()
    const anioActual = obtenerAnioActual();

    // Establecer el año actual dentro del elemento con el id "anio"
    document.getElementById("anio").textContent = anioActual;
}

// Llamar a la función establecerAnioActual() para mostrar el año actual
establecerAnioActual();
