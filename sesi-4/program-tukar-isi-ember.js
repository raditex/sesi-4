// deklarasi dan inisialisasi
let A = "merah";
let B = "biru";
let C = null;

console.log("Kondisi Awal: ");
console.log("A = " + A);
console.log("B = " + B);

// proses
C = A;
A = B; 
B = C;

// output
console.log("Kondisi Akhir: ");
console.log("A = " + A);
console.log("B = " + B);
