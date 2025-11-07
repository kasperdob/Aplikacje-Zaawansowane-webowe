function btnPlecClick(){
    const checkBoxMezczyzna = document.getElementById("input-plec");
    const checkBoxKobieta = document.getElementById("input-plec-2");
    const plecLabel = document.getElementById("twoja-plec");

    const numWiek = document.getElementById("input-wiek");
    const lblName = document.getElementById("lbl-wiek");

    if (checkBoxMezczyzna.checked) {
        plecLabel.innerHTML = "jesteś mężczyzną"
    } 
    else if (checkBoxKobieta.checked) {
        plecLabel.innerHTML = "jesteś kobieta"
    }
    else {
        plecLabel.innerHTML = "nie jesteś ani mężczyzną ani kobietą"
    }

    const key = numWiek.value;

    switch (true) {
        case key < 0:
            lblName.innerHTML = "nieprawidłowy wiek"
            break;
        case key < 18:
            lblName.innerHTML = "jesteś niepełnoletni"
            break;
        case key < 30:
            lblName.innerHTML = "jesteś młodym dorosłym"
            break;
        default:
            lblName.innerHTML = "jesteś dorosłym"
            break;
    }

}

function btnTaskClick() {
    const inputTask = document.getElementById("input-task");

    const li = document.createElement("li");

    const btn = document.createElement("button");

    btn.textContent = "usun";
    btn.onclick = () => li.remove();
    
    
    li.textContent = inputTask.value;
    
    li.appendChild(btn);
    document.getElementById("tasks-list").appendChild(li);
    inputTask.value = "";
}

function petlaWhile() {
    const x = 5;
    while(x > 1) {
        console.log(x);
        x = x- 1;
    }
}

function petlaFor() {
    for (let x = 0; x < 5; x++) {
        console.log(x);
    }
}