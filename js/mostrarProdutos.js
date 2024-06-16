//Conectando os códigos JavaScript de outro arquivo:
import { conectaApi } from "./conectaApi.js"; 

const lista = document.querySelector("[data-lista]");

//Criando outros itens no HTML:
export default function constroiCard(nome, valor, imagem) {
    const produto= document.createElement("div");
    produto.className = "conteudo__produtos__card";
    produto.innerHTML = `
        <img src="${imagem}" alt="Imagem do produto" class="produtos_card_image">
        <div class="protudos__card__info">
            <p>${nome}</p>
            <div class="produtos__card__preco">
                <p>${valor}</p>
                <img src="/assets/vector.png" alt="Ícone de Lixeira">
            </div>
        </div>
    `;

    return produto;
}

async function listaProdutos() {
    try {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(
        elemento.nome, elemento.valor, elemento.imagem)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos. Tente novamente mais tarde.</h2>`
    }
}

listaProdutos();