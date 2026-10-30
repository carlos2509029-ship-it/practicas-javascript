// 1. const no se puede reasignar
const IVA = 0.16;
// IVA = 0.20;   // ← descomenta: TypeError: Assignment to constant variable

// 2. let sí se puede reasignar
let total = 100;
total = 116;
console.log(total);   // 116

// 3. var se "escapa" del bloque; let no
if (true) {
    var escapista = "salí del bloque";
    let encerrada = "me quedo adentro";
}
console.log(escapista);    // funciona ← por eso var es peligrosa
// console.log(encerrada); // ← descomenta: ReferenceError: encerrada is not defined

// 4. var permite redeclarar sin avisar
var x = 1;
var x = 2;          // no da error... y pudiste borrar algo sin darte cuenta
let y = 1;
// let y = 2;       // ← descomenta: SyntaxError: Identifier 'y' has already been declared