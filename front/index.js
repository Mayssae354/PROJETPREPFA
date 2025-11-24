// login.js

// Exécuter le code une fois que le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Créer un message dynamique sous le formulaire
    const messageBox = document.createElement("p");
    messageBox.style.marginTop = "15px";
    messageBox.style.fontWeight = "bold";
    form.appendChild(messageBox);

    // Écoute de la soumission du formulaire
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Vérification simple
        if (username === "" || password === "") {
            showMessage("Veuillez remplir tous les champs ⚠️", "error");
            return;
        }

        // Simulation d'une authentification locale (à remplacer par un vrai appel backend)
        if (username === "admin" && password === "1234") {
            showMessage("✅ Connexion réussie ! Bienvenue " + username + " 🎉", "success");
            form.reset();

            // Effet de transition avant redirection (exemple)
            setTimeout(() => {
                window.location.href = "dashboard.html"; // redirige vers une autre page
            }, 1500);
        } 
    });

    // Fonction d’affichage de message
    function showMessage(text, type) {
        messageBox.textContent = text;
        messageBox.style.color = type === "success" ? "#28a745" : "#e63946";
        messageBox.style.opacity = "1";
        messageBox.style.transition = "opacity 0.5s ease";

        // Disparaît après 3 secondes
        setTimeout(() => {
            messageBox.style.opacity = "0";
        }, 3000);
    }
});