
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

obterCidade()


//Select Bairros
    const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos'  
    const form = {}
    const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
    }

    fetch(URL,options)
        .then (response => {
            response.json()
        .then(data => {
            console.log(data)
        data.forEach(bairro => {
            const select = document.getElementById('bairro')
            select.innerHTML += `<option value="${bairro.id}"> ${bairro.nome}</option>`
        })    
        })    
    })

    .catch (function (e){
            console.log("Deu erro!")
    })
    
    function obterBairro(event){
        form['bairro_id'] = event.target.value
        console.log(form);
        
    }

//Select Valor Locação

function obterValorLocacao(){
    const valorLocacao = document.querySelector("#valorLocacao");
    const optionValueLocacao = valorLocacao.options[valorLocacao.selectedIndex];
    let valueValorLocacao = optionValueLocacao.value
    let textValorLocacao = optionValueLocacao.text
    console.log(valueValorLocacao,textValorLocacao)
}

obterValorLocacao()

//Select obterTamanho

function obterTamanho(){
    const tamanho = document.querySelector("#tamanho");
    const optionTamanho = tamanho.options[tamanho.selectedIndex];
    let valueTamanho = optionTamanho.value
    let textTamanho = optionTamanho.text
    console.log(valueTamanho,textTamanho)
}

obterTamanho()

//Select Estabelecimento

function obterEstabelecimento(){
    const estabelecimento = document.querySelector("#estabelecimento");
    const optionEstabelecimento = estabelecimento.options[estabelecimento.selectedIndex];
    let valueEstabelecimento = optionEstabelecimento.value
    let textEstabelecimento = optionEstabelecimento.text
    console.log(valueEstabelecimento,textEstabelecimento)
}

obterTipo()

//Select Tipo

function obterTipo(){
    const tipo = document.querySelector("#tipo");
    const optionTipo = tipo.options[tipo.selectedIndex];
    let valueTipo = optionTipo.value
    let textTipo = optionTipo.text
    console.log(valueTipo,textTipo)
}

obterTipo()
