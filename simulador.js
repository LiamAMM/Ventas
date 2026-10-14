function calcularCredito() {
    var ingresos = parseFloat(document.getElementById("txtIngresos").value);
    var egresos = parseFloat(document.getElementById("txtEgresos").value);
    var disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("spnDisponible").innerText = disponible;
}