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

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
