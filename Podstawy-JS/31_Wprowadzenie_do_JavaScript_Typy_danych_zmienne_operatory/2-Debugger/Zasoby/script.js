// Funkcja losująca liczby i sumująca je
function sumujLosoweLiczby() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let suma = a + b;

    const p = 7;

    var x = 5;
    let y = 5;

    if (x == y) {
      console.log("==");  
    }
    if (x === y) {
      console.log("===");  
    }

    console.log("Liczba a:", a);
    console.log("Liczba b:", b);
    console.log("Suma:", suma);
    //ggg
    return suma;
}

function zwrocImie() {
    let name = document.getElementById("nameInput").value;
    return name;
}

// Obsługa kliknięcia przycisku
// document.getElementById("startBtn").addEventListener("click", () => {
//     let wynik = sumujLosoweLiczby();
//     alert("Wynik sumy to: " + wynik);

// });

document.getElementById("startBtn").addEventListener("click", () => {
    alert(sumujLosoweLiczby());
    console.log(x);
})