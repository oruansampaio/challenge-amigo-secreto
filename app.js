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

function atualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

