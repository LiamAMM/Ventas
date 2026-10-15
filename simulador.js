function calcularCredito() {
    var ingresos = parseFloat(document.getElementById("txtIngresos").value);
    var egresos = parseFloat(document.getElementById("txtEgresos").value);
    var disponible = calcularDisponible(ingresos, egresos);
    var capacidadPago = calcularCapacidadPago(disponible);
    var monto = parseFloat(document.getElementById("txtMonto").value);
    var plazo = parseFloat(document.getElementById("txtPlazo").value);
    var tasa = parseFloat(document.getElementById("txtTasaInteres").value);
    var interes = calcularInteresSimple(monto, tasa, plazo);
    var totalPagar = calcularTotalPagar(monto, interes);
    var cuotaMensual = calcularCuotaMensual(totalPagar, plazo);

    document.getElementById("spnDisponible").innerText = disponible;
    document.getElementById("spnCapacidadPago").innerText = capacidadPago;
    document.getElementById("spnInteresPagar").innerText = interes;
    document.getElementById("spnTotalPrestamo").innerText = totalPagar;
    document.getElementById("spnCuotaMensual").innerText = cuotaMensual;
}
