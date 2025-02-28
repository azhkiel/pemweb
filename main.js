
function fungsi(){
    alert("haloo");
    alert("ini adalah alert dari main.js");
    promptInput();
}

function promptInput() {
    let userInput = prompt("Masukkan sesuatu:", "Sesuatu");
    if (userInput != null) {
        alert("Anda memasukkan: " + userInput);
    } else {
        alert("Anda membatalkan input.");
    }
}
