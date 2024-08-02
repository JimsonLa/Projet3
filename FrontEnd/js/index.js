 let worksData = []
 
 fetch("http://localhost:5678/api/works")
     .then(response => response.json())
     .then(works => {
        worksData = works
         displayGallery(works, ".gallery", true)
         fetchCategories(works)
     })

    function displayGallery(works, selector, showCaption){
        const divgallery = document.querySelector(selector)
        divgallery.innerHTML = ""

        works.forEach(work => {
            const figure = document.createElement("figure")
            const img = document.createElement("img")
            img.src = work.imageUrl
            img.alt = work.title 
            figure.appendChild(img)
            divgallery.appendChild(figure)
            if (showCaption){
                const figcaption = document.createElement("figcaption")
                figcaption.textContent = work.title
                figure.appendChild(figcaption)
            }
        });
    }

    function filterByCategories(works, category) {
        const workFiltered = works.filter((work) => work.category.name === category.name);
        displayGallery(workFiltered, ".gallery");
    };

function fetchCategories (works) {
    fetch("http://localhost:5678/api/categories")
    .then(responseCategories => responseCategories.json())
    .then(categories => {
        const filterDiv = document.getElementById("filters")
        filterDiv.innerHTML = ""
        const allBtn = document.createElement("button")
        allBtn.textContent = "Tous";
        allBtn.classList.add("active")
        allBtn.onclick = () => {
            displayGallery(works, ".gallery")
            allBtn.classList.add("active")
        };

        filterDiv.appendChild(allBtn)
        categories.forEach(category => {
            const btn = document.createElement("button")
            btn.textContent = category.name
            btn.onclick = () => {
                filterByCategories(works, category)
                allBtn.classList.remove("active")
            };
            filterDiv.appendChild(btn)
        })
    })
}

