function Descuento(precioOriginal, descuento) {
    const precioConDescuento = precioOriginal - (precioOriginal * descuento / 100);
    return precioConDescuento;
}
const precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));
const descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
const precioFinal = Descuento(precioOriginal, descuento);
console.log("El precio final con descuento es: $" + precioFinal);
