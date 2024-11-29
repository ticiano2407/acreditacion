function Rectangulo(base, altura) {
    return base * altura;
}
const base = parseFloat(prompt("Ingrese la base del rectángulo:"));
const altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
const area = Rectangulo(base, altura);
console.log("El área del rectángulo es: " + area);
