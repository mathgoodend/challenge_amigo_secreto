const amigos = [];
console.log(lista);

function adicionarAmigo() {
    const amigo = document.getElementById('amigo');
    if (amigo.value.length == 0 || amigo.value.trim() == "") {
        amigo.value = "";
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo.value);
        amigo.value = "";
    }
    console.log(amigos);
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    const e = document.createElement('li');

    lista.innerHTML = "";
    console.log(lista);
    for (let i = 0; i < amigos.length; i++) {
        e.innerHTML = amigos[i];
        lista.appendChild(e);
    }
    console.log(lista);
}