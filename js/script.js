
// função que faz abrir o link em outra aba
function redirectLogin() {
    window.open("./pages/login.html", "_blank");
  }


    const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos'  

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
        })    
    })

    /*     
            document.querySelector("#districtOption").innerHTML += <p>${data}</p>
           
        })  */

            
    
    .catch (function (e){
            console.log("Deu erro!")
    })
    



    /* OUTRA FORMA
    const response = (async function(){
    try{    
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos')
        const jsonData = await response.json()
        console.log(jsonData)
    }catch(e){
        console.log('Deu erro!')
    }    
    })()
    */

