/*let dolphin = (197 + 195 + 2) / 3;
let koalas = (197 + 195 + 2) / 3;

if (dolphin === koalas && dolphin >= 100 && koalas >= 100) {
  console.log("Dolphins: " + dolphin + " Koalas: " + koalas);
  console.log("It's a draw!");
} else if (dolphin > koalas && dolphin >= 100) {
  console.log("Dolphins: " + dolphin + " Koalas: " + koalas);
  console.log("Dolphins have won!");
} else if (koalas > dolphin && koalas >= 100) {
  console.log("Dolphins: " + dolphin + " Koalas: " + koalas);
  console.log("Koalas are the winners ");
} else {
  console.log("Dolphins: " + dolphin + " Koalas: " + koalas);
  console.log("No team gathered a significant score of at least 100!");
}*/

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;
let tip1;
let tip2;
let tip3;

tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

console.log(`Bill value ${bill1}, tip ${tip1}, final value ${tip1 + bill1}`);
console.log(`Bill value ${bill2}, tip ${tip2}, final value ${tip2 + bill2}`);
console.log(`Bill value ${bill3}, tip ${tip3}, final value ${tip3 + bill3}`);
