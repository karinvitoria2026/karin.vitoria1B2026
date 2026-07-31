// Mensagem de boas-vindas
window.onload = function () {
    alert("🍌 Bem-vindo ao Blog dos Minions!");
};

// Mensagem ao clicar em um botão
function mostrarMensagem() {
    alert("Banana! 🍌 Os Minions agradecem sua visita!");
}

// Muda a cor do título ao clicar
const titulo = document.querySelector("header h1");

if (titulo) {
    titulo.addEventListener("click", function () {
        titulo.style.color =
            titulo.style.color === "blue" ? "black" : "blue";
    });
}
