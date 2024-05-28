 fetch("http://localhost:5678/api/works")
     .then(response => response.json())
     .then(works => {
         displayGallery(works, ".gallery")
     })


    function displayGallery(works, selector){
        const divgallery = document.querySelector(selector)
        divgallery.innerHTML = ""

        works.forEach(work => {
            const figure = document.createElement("figure")
            const img = document.createElement("img")
            img.src = work.imageUrl
            img.alt = work.title 
            figure.appendChild(img)
            divgallery.appendChild(figure)
            const figcaption = document.createElement("figcaption")
            figcaption.textContent = work.title
            figure.appendChild(figcaption)
        });
    }