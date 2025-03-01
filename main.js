
function fungsi(){
    alert("haloo");
    alert("ini adalah alert dari main.js");
    inputKata();
    hitungRandom();
}

function inputKata() {
    let userInput = prompt("Masukkan sesuatu:", "Sesuatu");
    if (userInput != null) {
        alert("Anda memasukkan: " + userInput);
    } else {
        alert("Anda membatalkan input.");
    }
}

function validasiNama() {
    let inputNama = document.getElementById("nama").value;
    let pola = /^[a-zA-Z' ]+$/; // Hanya huruf, spasi, dan petik satu yang diperbolehkan

    if (!pola.test(inputNama)) {
        alert("Nama hanya boleh berisi huruf dan tanda petik satu (')");
        return false;
    }
    alert("Nama valid!");
    return true;
}

function hitungRandom() {
    let angka1 = Math.floor(Math.random() * 100) + 1;
    let angka2 = Math.floor(Math.random() * 100) + 1;
    let operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    let hasil;

    switch(operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
    }

    let jawaban = prompt(`Berapakah ${angka1} ${operator} ${angka2}?`);

    if (jawaban === null) {
        alert("Anda membatalkan permainan.");
        return;
    }

    if (parseInt(jawaban) === hasil) {
        alert("Selamat! Jawaban Anda benar!");
    } else {
        alert("Maaf, jawaban Anda salah. Coba lagi!");
        hitungRandom(); // Memanggil fungsi kembali untuk mengacak soal baru
    }
}