function buscarTreino() {
  const codigo = document.getElementById('codigoInput').value.trim();
  const resultadoDiv = document.getElementById('resultadoTreino');

  if (codigo === '') {
    resultadoDiv.innerHTML = '<p class="erro">Digite um código válido.</p>';
    return;
  }

const caminho = `./Treinos/${codigo}.html`;  // com T maiúsculo


  fetch(caminho)
    .then(response => {
      if (!response.ok) {
        throw new Error('Treino não encontrado');
      }
      return response.text();
    })
    .then(html => {
      resultadoDiv.innerHTML = html;
    })
    .catch(error => {
      resultadoDiv.innerHTML = `<p class="erro">Treino não encontrado. Verifique o código.</p>`;
    });
}
