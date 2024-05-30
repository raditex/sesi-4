let nama, nilai, status; 

nama = prompt('Masukkan Nama: ');
nilai = prompt('Masukkan Nilai: ');

if (nilai >= 60) {
    status = 'Lulus';
}
else {
    status = 'Tidak Lulus';
}

console.log(`Nama: ${nama}`);
console.log(`Nilai: ${nilai}`);
console.log(`Status Kelulusan: ${status}`);