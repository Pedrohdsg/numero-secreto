function verificaValorValido() {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor invalido</div>";
  }
  if (numeroForaLimites(numero)) {
    elementoChute.innerHTML += `<div>Valor invalido: numero devera estar entre ${menorValor} e ${maiorValor}</div>`;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Voce acertou</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O numero secreto e menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
  } else {
    elementoChute.innerHTML += `<div>O numero secreto e maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForaLimites(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})