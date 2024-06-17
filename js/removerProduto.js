import { conectaApi } from "./conectaApi.js"; 
import { mostraProduto } from "./mostrarProdutos.js";

//Removendo produtos com a lixeira
async function deletarProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível deletar o produto.");
    }
}

document.addEventListener("click", async (evento) => {
    if (evento.target.classList.contains("delete-icon")) {
        const produtoElement = evento.target.closest(".conteudo__produtos__card");
        const produtoId = produtoElement.getAttribute("data-id");

        try {
            await deletarProduto(produtoId);
            produtoElement.remove();
            alert("Produto removido com sucesso!");
        } catch (e) {
            console.error(e);
            alert("Erro ao deletar produto, tente novamente.");
        }
    }
})

export const removeProduto = {
    deletarProduto
}