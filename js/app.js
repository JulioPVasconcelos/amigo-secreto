let listaAmigos = [];

function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo").value;
  if (nomeAmigo == "") {
    alert("Digite um nome");
    return;
  } else {
    if (listaAmigos.includes(nomeAmigo)) {
      alert("O nome " + nomeAmigo + " já foi adicionado");
    } else {
      listaAmigos.push(nomeAmigo);
      document.getElementById("lista-amigos").innerHTML = listaAmigos;
      document.getElementById("nome-amigo").value = "";
    }
  }
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
        listaAmigos[i] +
        " é " +
        listaAmigos[0] +
        "<br>";
    } else {
      listaSorteio.innerHTML +=
        "O amigo secreto de " +
        listaAmigos[i] +
        " é " +
        listaAmigos[i + 1] +
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
