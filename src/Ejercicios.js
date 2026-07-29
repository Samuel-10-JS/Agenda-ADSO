const aprendiz = "Santiago"
const ficha = 3412768
const notas = [2.0, 3.5, 1,5];
const promedio = (notas[0] + notas[1] + notas[2]) / 3;

console.log("==========================")
console.log("SISTEMA DE NOTAS SENA")
console.log("==========================")
console.log(`Aprendiz: ${aprendiz}`);
console.log(`Ficha: ${ficha}`);
console.log(`Notas: ${notas}`)
console.log("==========================")
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Estado: ${promedio >= 3 ? "Aprobado" : "No Aprobado"}`);




