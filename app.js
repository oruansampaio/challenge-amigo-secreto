let amigos = [];

function adicionarAmigo() {
    let inputElement = document.getElementById("amigo");
    let nomeAmigo = inputElement.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);

    atualizarLista();

    inputElement.value = "";
}

