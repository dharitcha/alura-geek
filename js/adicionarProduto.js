//Adicionando produtos com o formulário
import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function adicionarProduto (evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
    await conectaApi.criaProduto(nome, valor, imagem);

    alert("Produto adicionado com sucesso!");

    window.location.reload();
        
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => adicionarProduto(evento));
