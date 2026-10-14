function calcularCredito() {
    var ingresos = parseFloat(document.getElementById("txtIngresos").value);
    var egresos = parseFloat(document.getElementById("txtEgresos").value);
    var disponible = calcularDisponible(ingresos, egresos);
     var capacidadPago = calcularCapacidadPago(disponible);

    document.getElementById("spnDisponible").innerText = disponible;
    document.getElementById("spnCapacidadPago").innerText = capacidadPago;
}
