function atualizarTempo() {
  var display = document.querySelector(".display");

  var now = new Date();

  var hours =
    corrigirHorario(now.getHours()) +
    ":" +
    corrigirHorario(now.getMinutes()) +
    ":" +
    corrigirHorario(now.getSeconds());

  display.textContent = hours;
}

function corrigirHorario(numero) {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
}
atualizarTempo();
setInterval(atualizarTempo, 1000);
