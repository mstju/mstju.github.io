
// função que faz abrir o link em outra aba
function redirectLogin() {
    window.open("./pages/login.html", "_blank");
  }

//Select Cidade


/*const textCidade = cidade.options[cidade.selectedIndex].text;

function obterCidade(){
    const cidade = document.querySelector("#cidade");
    const optionValue = cidade.options[cidade.selectedIndex];
    let valueCidade = optionValue.value
    let textCidade = optionValue.text
    console.log(valueCidade,textCidade)
}

obterCidade()*/


//Select Bairros
    /*const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos'  
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
        
    }*/


    //Select Cidade


/*const textCidade = cidade.options[cidade.selectedIndex].text;

function obterCidade(){
    const cidade = document.querySelector("#cidade");
    const optionValue = cidade.options[cidade.selectedIndex];
    let valueCidade = optionValue.value
    let textCidade = optionValue.text
    console.log(valueCidade,textCidade)
}

obterCidade()*/





