document
  .getElementById("notaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos inputs
    const maiorNota = parseFloat(document.getElementById("maiorNota").value);
    const mediaPassavel = parseFloat(
      document.getElementById("mediaPassavel").value
    );
    const notaAtual = parseFloat(document.getElementById("notaAtual").value);

    // Verifica se os valores são válidos
    if (isNaN(maiorNota) || isNaN(mediaPassavel) || isNaN(notaAtual)) {
      alert("Por favor, preencha todos os campos com valores válidos.");
      return;
    }

    // Calcula a nota necessária para alcançar a maior nota possível
    const notaNecessariaParaMaiorNota = maiorNota - notaAtual;

    // Verifica se a nota necessária para alcançar a maior nota é válida
    if (notaNecessariaParaMaiorNota < 0) {
      document.getElementById("resultadoNota").textContent =
        "Você já alcançou a maior nota possível.";
    } else {
      document.getElementById(
        "resultadoNota"
      ).textContent = `Nota necessária para alcançar a maior nota possível: ${notaNecessariaParaMaiorNota.toFixed(
        1
      )} pontos`;
    }

    // Calcula a falta para alcançar a média desejada
    const faltaParaMedia = mediaPassavel - notaAtual;

    // Atualiza os resultados
    if (faltaParaMedia > 0) {
      document.getElementById(
        "resultadoFaltante"
      ).textContent = `Falta para alcançar a média desejada: ${faltaParaMedia.toFixed(
        1
      )} pontos`;
    } else {
      document.getElementById(
        "resultadoFaltante"
      ).textContent = `Você já está acima da média desejada.`;
    }
  });
