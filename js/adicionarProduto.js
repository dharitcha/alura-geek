//Adicionando produtos com o formulário
import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function adicionarProduto (evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    console.log("Nome:", nome);
    console.log("Valor:", valor);
    console.log("Imagem:", imagem);

    try {
    console.log("Enviando produto:", { nome, valor, imagem });
    await conectaApi.criaProduto(nome, valor, imagem);
    console.log("Produto adicionado:", resultado);

    alert("Produto adicionado com sucesso!");

    //window.location.reload();
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => adicionarProduto(evento));