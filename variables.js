function calcularKwh(watts, horas) {
    return watts * horas / 1000;
}

const consumo = calcularKwh(150, 24);
console.log(`Consumo: ${consumo} kWh`);   // Consumo: 3.6 kWh
const resultado = calcularKwh(150, 24);   // CON () → ejecuta y guarda el resultado: 3.6
const otraFuncion = calcularKwh;          // SIN () → guarda la función misma

console.log(resultado);              // 3.6
console.log(otraFuncion);            // [Function: calcularKwh]
console.log(otraFuncion(100, 5));    // 0.5 ← la llamas por su nuevo nombre
function prueba() {
    const local = "solo existo aquí";
}
// console.log(local);   // ReferenceError
