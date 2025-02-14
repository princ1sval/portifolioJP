document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menuIcon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", function() {
        // Alterna a visibilidade do menu
        if (menu.style.display === "block") {
            menu.style.display = "none"; // Fecha o menu
        } else {
            menu.style.display = "block"; // Abre o menu
        }
    });
});