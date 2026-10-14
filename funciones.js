//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos) {
    var disponible = ingresos - egresos;
    
    if (disponible < 0) {
        return 0;
    } else {
        return disponible;
    }
}

function calcularCapacidadPago(montoDisponible) {
    var capacidadPago = montoDisponible * 0.50;
    return capacidadPago;
}