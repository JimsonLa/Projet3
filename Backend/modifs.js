// FICHIER CONTENANT LES MODIFS APRES LE LOGIN

if(localStorage.getItem("authToken")){
    log.textContent = 'Logout';
    let modeEditionDiv = document.createElement("div");
    modeEditionDiv.id = "modeEditionDiv";
    let body = document.querySelector("body")
    body.appendChild(modeEditionDiv);
    let header = document.querySelector("header");
    header.style.marginTop = '8%';
    let modeEditionText = document.createElement("span");
    modeEditionText.textContent = 'Mode édition';
    modeEditionText.id = "modeEditionText";
    modeEditionDiv.appendChild(modeEditionText);
    let sectionPortfolio = document.getElementById("portfolio");
    let modifierA = document.createElement("a");
    modifierA.textContent = 'modifier';
    modifierA.id = "modifierA";
    modifierA.href = "login.html"
    sectionPortfolio.appendChild(modifierA);
    let editBtn = document.getElementById("editBtn");
    editBtn.style.color = "black";
}