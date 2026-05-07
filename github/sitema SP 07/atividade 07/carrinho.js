let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let mensagem = document.getElementById("mensagem");

document.querySelectorAll(".produto button").forEach(botao => {
    botao.addEventListener("click", () => {
        const produto = {
            id: botao.dataset.id,
            nome: botao.dataset.nome,
            preco: botao.dataset.preco
        };

        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        if (mensagem) {
            mensagem.textContent = "Produto adicionado ao carrinho 🛒";

            setTimeout(() => {
                mensagem.textContent = "";
            }, 2000);
        }
    });
});