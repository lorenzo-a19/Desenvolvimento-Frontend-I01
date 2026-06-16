const produtos = [
    { nome: "Conjunto feminino", preco: 120, categoria: "Conjuntos" },
    { nome: "Blusa feminina", preco: 60, categoria: "Blusas" },
    { nome: "Calça jeans", preco: 150, categoria: "Calças" },
    { nome: "Look para noite", preco: 200, categoria: "Noite" },
    { nome: "Camiseta feminina", preco: 55, categoria: "Blusas" }
];

const container = document.getElementById("catalogo");
const saidaJson = document.getElementById("saida-json");
const botaoExportar = document.getElementById("exportar-json");

function criarCard(produto) {
    return `
        <article class="produto-card">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco}</p>
            <p>Categoria: ${produto.categoria}</p>
        </article>
    `;
}

for (let i = 0; i < produtos.length; i++) {
    container.innerHTML += criarCard(produtos[i]);
}

botaoExportar.addEventListener("click", function () {
    const produtosJson = JSON.stringify(produtos, null, 2);

    console.log(produtosJson);
    saidaJson.textContent = produtosJson;
});