const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value);
  tentativas++;

  const mensagem = document.getElementById("mensagem");

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Digite um número válido entre 1 e 100.";
    mensagem.style.color = "#ffcc00";
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "Muito baixo! Tente novamente.";
    mensagem.style.color = "#ffd700";
  } else if (palpite > numeroSecreto) {
    mensagem.textContent = "Muito alto! Tente novamente.";
    mensagem.style.color = "#ffd700";
  } else {
    mensagem.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
    mensagem.style.color = "#00ff88";
  }
}
