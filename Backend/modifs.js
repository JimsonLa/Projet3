// FICHIER CONTENANT LES MODIFS APRES LE LOGIN

if(localStorage.getItem("authToken")){
    log.textContent = 'Logout';
    let modeEditionDiv = document.createElement("div");
    modeEditionDiv.id = "modeEditionDiv";
    let body = document.querySelector("body")
    body.appendChild(modeEditionDiv);
    let header = document.querySelector("header");
    header.style.marginTop = '8%';
}