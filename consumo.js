// Convertir consumo_electrico.py a consumo.js

// Calcular kwh usando función.
function calcularKwh(watts, horas) {
    return watts * horas / 1000;
}
// Calcular kwh mensual usando función.
function calcularMensual(kwhDiario, dias) {
    return kwhDiario * dias;
}

// Calcular consumo de cada aparato, usar camelCase 
let consumoRefri = calcularKwh(150, 24);
let consumoTv = calcularKwh(100, 5);
let consumoFocos = calcularKwh(45, 6);

// Calcular consumo diario
let consumoDiario = consumoRefri + consumoTv + consumoFocos;

// Calcular consumo mensual (30 días)
let consumoMensual = calcularMensual(consumoDiario, 30);
// let consumoMensual = calcularMensual(consumoDiario, 31); <-- Podemos descomentar si se tratase de mes de 31 días.

// Imprimir consumos totales
console.log("=".repeat(60));
console.log(`El consumo diario es de ${consumoDiario.toFixed(2)} kWh.`);
console.log(`El consumo mensual es de ${consumoMensual.toFixed(2)} kWh.`);
console.log("=".repeat(60));
