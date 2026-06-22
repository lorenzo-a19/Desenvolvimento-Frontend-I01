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
        nome: "Conjunto Elegance",
        preco: 140,
        categoria: "Conjuntos",
        imagem: "imagem/Conjuntos femininos/conjunto-feminino-02.jpg"
    },
    {
        nome: "Blusa Básica",
        preco: 55,
        categoria: "Blusas",
        imagem: "imagem/blusa-camiseta/blusa-camiseta-02.jpg"
    },
    {
        nome: "Calça Jeans Premium",
        preco: 180,
        categoria: "Calças",
        imagem: "imagem/Calças jeans/calca-jeans-02.jpg"
    },
    {
        nome: "Look Festa",
        preco: 230,
        categoria: "Looks para noite",
        imagem: "imagem/looks-noite/look-noite-02.jpeg"
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

if (catalogo) {
    for (let i = 0; i < produtos.length; i++) {
        catalogo.innerHTML += criarCard(produtos[i]);
    }
}

const botaoExportar = document.getElementById("btn-exportar");

if (botaoExportar) {
    botaoExportar.addEventListener("click", function () {
        const jsonProdutos = JSON.stringify(produtos, null, 2);
        document.getElementById("saida-json").textContent = jsonProdutos;
        console.log(jsonProdutos);
    });
}