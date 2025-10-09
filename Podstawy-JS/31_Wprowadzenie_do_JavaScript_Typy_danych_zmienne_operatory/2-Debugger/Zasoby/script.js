// Funkcja losująca liczby i sumująca je
function sumujLosoweLiczby() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let suma = a + b;

    console.log("Liczba a:", a);
    console.log("Liczba b:", b);
    console.log("Suma:", suma);

    return suma;
}

// Obsługa kliknięcia przycisku
document.getElementById("startBtn").addEventListener("click", () => {
    let wynik = sumujLosoweLiczby();
    alert("Wynik sumy to: " + wynik);
});
