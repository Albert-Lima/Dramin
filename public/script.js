const dataFinal = new Date().getTime() + 5000;

const intervalo = setInterval(function() {
  const dataAtual = new Date().getTime();

  const diferenca = dataFinal - dataAtual;

  const segundos = Math.floor(diferenca / 1000);

  const contadorElemento = document.getElementById('countdown');
  contadorElemento.innerHTML = ` ${segundos}`;

  if (diferenca <= 0) {
    clearInterval(intervalo); 
    contadorElemento.innerHTML = '0';
  }
}, 1000);

// Redireciona para a página especificada após 5 segundos
setTimeout(function() {
  window.location.href = "https://wa.me/1198116-6300?text=Olá, vim pelo Google. Gostaria de fazer um orçamento!";
}, 5000); // 5000 milissegundos = 5 segundos