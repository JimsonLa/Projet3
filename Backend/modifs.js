const { response } = require("express");

// FICHIER CONTENANT LES MODIFS APRES LE LOGIN
document.addEventListener("DOMContentLoaded", () =>{
    let boutonModale = document.getElementById('openModalBtn');
    boutonModale.classList.remove("AfficherBoutonModale");
    boutonModale.classList.add("nePasAfficherBoutonModale");
    // Ajouter les variables ici
    // const galleryView = document.getElementById('galleryView');
    // const addWork = document.getElementById('addWorkView');
    // const editBtn = document.getElementById('modifierBtn');
    // const modalOverlay = document.getElementById('modalOverlay');
    // const editModal = document.getElementById('editModal');
    // window.loadGallery = function(works){
    //     galleryView.style.display = 'flex';
    //     addWork.style.display = 'none';
    //     displayGallery(works, '.gallery-modal');
    // }
    // editBtn.addEventListener('click', () => {
    //     modalOverlay.style.display = ('block');
    //     editModal.style.display = ('block');
    //     loadGallery(worksData);
    // });
    if(sessionStorage.getItem("authToken")){
        
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
        let editLogo = document.getElementById("editLogo");
        editLogo.style.color = "black"; 
        filtersDiv = document.getElementById("filters"); 
        filtersDiv.style.display = "none"; 
        let modal = document.getElementById("myModal");
        let btn = document.getElementById("openModalBtn");
        btn.classList.remove("nePasAfficherBoutonModale");
        btn.classList.add("AfficherBoutonModale")
        let span = document.getElementsByClassName("close")[0];
        btn.onclick = function() {
            modal.style.display = "block";
            displayGallery(worksData, '.galleryModale', false)
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    fetch("http://localhost:5678/api/works"),{
        method:"DELETE",
    }

    // Ajouter photo

    let labelFile = document.getElementById('labelFile');
    let pictureLogo = document.getElementById('pictureLogo');
    let dragAndDrop = document.getElementById('dragAndDrop');
    let ajouterPhotoModale = document.getElementById('ajouterPhotoModale');
    let conteneurPhotos = document.getElementById('conteneurPhotos');
    let spanText = document.getElementById('spanText');
    border = document.getElementById("border");
    let addPhoto = document.getElementById("addPhoto");
    galleryModale = document.getElementsByClassName("galleryModale");
    addPhoto.addEventListener('click', () => {
        border.style.display = "none";
        addPhoto.style.display = "none";
        spanText.textContent = 'Ajout photo';
        conteneurPhotos.style.display = 'none';
        ajouterPhotoModale.style.display = 'flex'
        dragAndDrop.style.display = 'flex';
        pictureLogo.style.display = 'flex';
    })

    // bouton retour

    faArrowLeft = document.getElementById('backBtn');
    faArrowLeft.addEventListener('click', () => {
        border.style.display = "flex";
        addPhoto.style.display = "flex";
        spanText.textContent = 'Galerie photo';
        conteneurPhotos.style.display = 'flex';
        ajouterPhotoModale.style.display = 'none'
        dragAndDrop.style.display = 'none';
        pictureLogo.style.display = 'none';
    })

})

function displayGalleryModale(data){
    const divgallery = document.querySelector('galleryModale')
    divgallery.innerHTML = ""

    data.forEach(work => {
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const deleteButton = document.createElement("button")
        const deleteIcone = document.createElement("i")
        img.src = work.imageUrl
        img.alt = work.title 
        img.className = 'modaleImg';
        figure.className = 'modaleFigure';
        deleteButton.className = 'deleteButton';
        deleteButton.dataset.id = work.id
        deleteIcone.className = 'fa-solid fa-trash-can';
        deleteButton.appendChild(deleteIcone);
        figure.appendChild(img);
        figure.appendChild(deleteButton);
        divgallery.appendChild(figure);
        deleteButton.addEventListener("click", (e) => {
            e.preventDefault();
            const workId = deleteButton.dataset.id;
            deleteWork(workId);
        })
    });
}

function deleteWork(id){
    const token = sessionStorage.getItem('authToken');
    fetch('http://localhost:5678/api/works/' + id, {
        method:'DELETE',
        headers:{
            authorization:`Bearer ${token}`
        },
    })
    .then(response => {
        if (response.ok){
            newWork = worksData.filter((work) => work.id != id)
            displayGallery(newWork, '.gallery')
            displayGalleryModale(newWork)
        }
    })
}