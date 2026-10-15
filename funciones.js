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

function calcularInteresSimple(monto, tasa, plazoAños) {
    var interes = plazoAños * monto * (tasa / 100);
    return interes;
}

function calcularTotalPagar(monto, interes) {
    var totalPagar = monto + interes + 100;
    return totalPagar;
}

function calcularCuotaMensual(total, plazoAños) {
    var meses = plazoAños * 12;
    var cuotaMensual = total / meses;
    return cuotaMensual;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago > cuotaMensual) {
        return true;
    } else {
        return false;
    }
}