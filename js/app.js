let listaAmigos = [];

function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo").value;
  nomeAmigo = nomeAmigo.toUpperCase();
  if (nomeAmigo == "") {
    alert("Digite um nome");
    return;
  }
  if (listaAmigos.includes(nomeAmigo)) {
    alert("O nome " + capitalize(nomeAmigo) + " já foi adicionado");
    return;
  }
  if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nomeAmigo)) {
    alert("O nome não pode conter caracteres especiais");
    return;
  }

  listaAmigos.push(nomeAmigo);
  document.getElementById("lista-amigos").innerHTML +=
    capitalize(nomeAmigo) + ", ";
  document.getElementById("nome-amigo").value = "";
}

function sortear() {
  if (listaAmigos.length < 4) {
    alert("Adicione no mínimo 4 amigos");
    return;
  }
  embaralha(listaAmigos);
  let listaSorteio = document.getElementById("lista-sorteio");

  for (let i = 0; i < listaAmigos.length; i++) {
    if (i == listaAmigos.length - 1) {
      listaSorteio.innerHTML +=
        "O amigo secreto de " +
        capitalize(listaAmigos[i]) +
        " é " +
        capitalize(listaAmigos[0]) +
        "<br>";
    } else {
      listaSorteio.innerHTML +=
        "O amigo secreto de " +
        capitalize(listaAmigos[i]) +
        " é " +
        capitalize(listaAmigos[i + 1]) +
        "<br>";
    }
  }
}

function reiniciar() {
  listaAmigos = [];
  document.getElementById("lista-amigos").innerHTML = listaAmigos;
  document.getElementById("lista-sorteio").innerHTML = "";
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
