const produtos = [
    {
        nome: "Conjunto Feminino",
        preco: 120,
        categoria: "Conjuntos",
        imagem: "imagem/Conjuntos femininos/conjunto-feminino-01.jpg"
    },
    {
        nome: "Blusa Feminina",
        preco: 60,
        categoria: "Blusas",
        imagem: "imagem/blusa-camiseta/blusa-camiseta-01.jpg"
    },
    {
        nome: "Calça Jeans",
        preco: 150,
        categoria: "Calças",
        imagem: "imagem/Calças jeans/calca-jeans-01.jpg"
    },
    {
        nome: "Look Noite",
        preco: 200,
        categoria: "Looks para noite",
        imagem: "imagem/looks-noite/look-noite-01.jpeg"
    },
    {
        nome: "Conjunto Feminino Premium",
        preco: 130,
        categoria: "Conjuntos",
        imagem: "imagem/Conjuntos femininos/conjunto-feminino-02.jpg"
    }
];

function criarCard(produto) {
    return `
        <article class="produto-card">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        </article>
    `;
}

const catalogo = document.getElementById("catalogo-produtos");

for (let i = 0; i < produtos.length; i++) {
    catalogo.innerHTML += criarCard(produtos[i]);
}

document.getElementById("btn-exportar").addEventListener("click", function () {
    const jsonProdutos = JSON.stringify(produtos, null, 2);

    console.log(jsonProdutos);

    document.getElementById("saida-json").textContent = jsonProdutos;
});