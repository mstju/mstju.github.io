
// função que faz abrir o link em outra aba
function redirectLogin() {
    window.open("./pages/login.html", "_blank");
  }
  


const bairros = (async function(){
    try{    
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos')
        const jsonData = await response.json()
        console.log(jsonData)
    }catch(e){
        console.log('Deu erro!')
    }    
})()



/*OUTRA FORMA

const response = fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos')
        .then(responseData => {
            return responseData.json()
        })
        .then(jsonData =>{
            console.log(jsonData)
        })
        .catch (function (e){
            console.log("Deu erro!")
        })
*/


