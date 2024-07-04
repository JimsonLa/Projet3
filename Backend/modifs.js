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
    let modifierBtn = document.createElement("a");
    modifierBtn.textContent = 'modifier';
    modifierBtn.id = "modifierBtn";
    modifierBtn.href = "login.html"
    sectionPortfolio.appendChild(modifierBtn);
    let editLogo = document.getElementById("editLogo");
    editLogo.style.color = "black";
    let ModalContainer = document.createElement("div");
    ModalContainer.id = "modal-container";
    let main = document.querySelector("main");
    main.appendChild(ModalContainer);
    let modalTrigger = document.createElement("div");
    modalTrigger.id = "modal-trigger";
}