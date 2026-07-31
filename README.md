// ================================
// Blog dos Minions - script.js
// ================================

// Mensagem de boas-vindas
window.onload = function () {
    alert("🍌 Bem-vindo ao Blog dos Minions!");
};

// Função do botão "Ler mais"
function lerMais() {
    const texto = document.getElementById("texto-completo");
    const botao = document.getElementById("btnLerMais");

    if (texto.style.display === "none" || texto.style.display === "") {
        texto.style.display = "block";
        botao.textContent = "Ler menos 🍌";
    } else {
        texto.style.display = "none";
        botao.textContent = "Ler mais 🍌";
    }
}

// Muda a cor do título ao clicar
const titulo = document.querySelector("header h1");

if (titulo) {
    titulo.addEventListener("click", function () {
        if (titulo.style.color === "blue") {
            titulo.style.color = "black";
        } else {
            titulo.style.color = "blue";
        }
    });
}

// Efeito ao passar o mouse nos cards
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "scale(1)";
    });
});
