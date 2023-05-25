document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  const tipo = params.get("tipo");
  const estado = params.get("estado");
  const valor = params.get("valor");
  const tamanho = params.get("tamanho");

  const cards = document.querySelectorAll(".card-group");
  cards.forEach(function (card) {
    const cardTipo = card.getAttribute("data-tipo");
    const cardEstado = card.getAttribute("data-estado");
    const cardValor = parseFloat(card.getAttribute("data-valor")); // Converte o valor para um número
    const cardTamanho = card.getAttribute("data-tamanho");

    if (
      (!tipo || cardTipo === tipo) &&
      (!estado || cardEstado === estado) &&
      (!valor ||
        (valor === "ate8000" && cardValor <= 8000) ||
        (valor === "8000a15000" && cardValor > 8000 && cardValor <= 15000) ||
        (valor === "acima15000" && cardValor > 15000)) &&
      (!tamanho || cardTamanho === tamanho)
    ) {
      card.style.display = "block"; // Mostra o card
    } else {
      card.style.display = "none"; // Esconde o card
    }
  });
});
