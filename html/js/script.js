
// função que faz abrir o link em outra aba

function redirectLogin() {
    window.open("./pages/login.html", "_blank");
  }

//Select Cidade

function obterCidade(){
    const cidade = document.querySelector("#cidade");
    const optionValueCidade = cidade.options[cidade.selectedIndex];
    let valueCidade = optionValueCidade.value
    let textCidade = optionValueCidade.text
    console.log(valueCidade,textCidade)
}
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const estado = document.querySelector('#estado').value;
  const tipo = document.querySelector('#tipo').value;
  const tamanho = document.querySelector('#tamanho').value;
  const valor = document.querySelector('#valor').value;
  const queryParams = new URLSearchParams({
    estado: estado,
    tipo: tipo,
    tamanho: tamanho,
    valor: valor
  });
