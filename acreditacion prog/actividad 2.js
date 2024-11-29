const alojamiento = parseFloat(prompt("Ingrese el gasto estimado para alojamiento:"));
const alimentacion = parseFloat(prompt("Ingrese el gasto estimado para alimentación:"));
const entretenimiento = parseFloat(prompt("Ingrese el gasto estimado para entretenimiento:"));
const costeTotal = alojamiento + alimentacion + entretenimiento;
console.log("El coste total del viaje es: $" + costeTotal);
