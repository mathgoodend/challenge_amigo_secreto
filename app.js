// Inicializa o array da lista de nomes dos envolvidos no amigo secreto
const amigos = [];

/* 
*   Função adicionarAmigo()
*    - Cria uma constante com o elemento HTML de id "amigo"
*    - Valida se o valor do elemento "amigo", uma string, tem tamanho 
*       igual a 0 ou se é vazia após remover os espaçoes em branco
*    - Caso não passe na validação é emitido um alerta
*    - Caso passe na validação o nome é incluido na lista e o valor de "amigo"
*       é zerado
*    - Ao final é acionada a função atualizarListaAmigos()
*/
function adicionarAmigo() {
    const amigo = document.getElementById('amigo');

    if (amigo.value.length == 0 || amigo.value.trim() == "") {
        amigo.value = "";
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo.value);
        amigo.value = "";
    }

    atualizarListaAmigos();
}

/* 
*   Função atualizarListaAmigos()
*    - Cria uma constante com o elemento HTML de id "listaAmigos"
*    - Cria uma constante com um novo elemento HTML do tipo "li"
*    - Limpa o conteudo HTML do elemento "lista"
*    - Inicia um loop onde os nomes dentro do array "lista" são atribuidos
*       ao conteudo HTML de "li" e o elemento é então acresentado como
*       filho do elemento "lista"
*/
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    const e = document.createElement('li');

    for (let i = 0; i < amigos.length; i++) {
        e.innerHTML = amigos[i];
        lista.appendChild(e);
    }
}

/*
*   Função sortearNumero(num)
*       - A função recebe como argumento o valor máximo a ser sorteado
*       - Ela retorna um valor entre 0 e num - 1
*/
function sortearNumero(num) {
    return Math.floor(Math.random() * num);
}

/*
*   Função sortearAmigo()
*    - Cria uma constante com o elemento HTML de id "resultado"
*    - Cria uma constante com um novo elemento HTML do tipo "li"
*    - Limpa o conteudo HTML do elemento "resultado"
*    - Valida se a lista possui apenas um item. Caso positivo retorna o primeiro
*       item
*    - Valida se a lista de nomes está vazia, emitindo um alerta caso esteja
*    - Se o tamanho da lista de nomes for maior que 1
*       atribui ao conteudo HTML do "li" um item do array "amigos" cujo indice
*       é sorteado pela função sortearNumero() que recebe como parâmetro
*       o tamanho do array
*    - Acrescenta o elemento "li" ao elemento "resultado"
*/
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const r = document.createElement('li');

    resultado.innerHTML = "";

    if (amigos.length == 1) {
        r.innerHTML = amigos[0];
        resultado.appendChild(r);
    } 

    if (amigos.length == 0) {
        alert("Primeiro adicione amigos a lista para poder sortear alguém.");
    } else {
        r.innerHTML = amigos[sortearNumero(amigos.length)];
        resultado.appendChild(r);
    }
}