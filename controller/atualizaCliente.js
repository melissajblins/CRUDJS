import { clienteService } from "../service/cliente-service.js";

( async () => {
    const pegaURL = new URL(window.location);
    const id = pegaURL.searchParams.get('id');

    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email');

    const dados = await clienteService.editaCliente(id)
    inputNome = dados.nome
    inputEmail = dados.email

    const formulario = document.querySelector('[data-form');
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault();
        await lienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
        window.location.href = "../telas/edicao_concluida.html";
    });
})();

