document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    fetch("http://localhost:5678/api/users/login", {
        method:"POST",
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({email,password})
    })
    .then(response => {
        if(!response.ok){
            throw new Error("La connexion à échouée");
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem("authToken", data.token)
        window.location.href="index.html"
    })
    .catch(error => {
        alert('Identifiant ou mot de passe incorrect');
    })
})});
// EDIT PAGE APRES IF TOKEN TRUE + MODALE SUPPRESSION