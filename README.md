<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calcule sua nota!</title>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    
      <div class="left-section">
        <h2>Calcule sua nota!</h2>
        <h3>:)</h3>
      </div>

      <form id="notaForm">
        <h3>Qual a maior nota você consegue alcançar em sua disciplina?</h3>
        <label for="maiorNota">
          <input
            type="number"
            name="Maior nota"
            id="maiorNota"
            step="0.01"
            placeholder="Ex: 10.0"
            required
          />
        </label>

        <h3>Qual a média para você considerar como passável?</h3>
        <label for="mediaPassavel">
          <legend>Média</legend>
          <input
            type="number"
            name="Média passável"
            id="mediaPassavel"
            step="0.01"
            placeholder="Ex: 7.0"
            required
          />
        </label>

        <h3>Qual a sua nota atual?</h3>
        <label for="notaAtual">
          <input
            type="number"
            name="Nota atual"
            id="notaAtual"
            step="0.01"
            placeholder="Ex: 6.3"
            required
          />
        </label>

        <button type="submit">Calcular</button>
      </form>

      <div class="right-section">
        <div id="resultados">
          <p>Resultado:</p>
          <p id="resultadoNota"></p>
          <p id="resultadoFaltante"></p>
        </div>
      </div>
    </div>
  </body>
</html>

