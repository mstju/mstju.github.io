/*class Validator{

    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }

    // iniciar a validação de todos os campos
    validate(form){
    
    // pegar todos os inputs
        let inputs = document.querySelectorAll('input');
      

    // HTML Collection => array 
        let inputsArray = [...inputs];

    // loop dos inputs e validação do que for encontrado    
        inputsArray.forEach(function(input){
    
    // loop de todas as validações existentes
            for(let i = 0; this.validations.length > i; i++){
                if(input.getAttribute(this.validations[i]) != null){
                    console.log(input.getAttribute());
                    console.log('achou validação');
                }
            }
        }, this);
      
    }
}

let form = document.getElementById("form-container");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// evento que dispara as validações

submit.addEventListener('click', function(e){
    e.preventDefault();
    validator.validate(form);
});*/

// Função para validar inputs

/*
function sendbtn(){
    $("#rent-form").submit(function(event){
        event.preventDefault();
        let email = document.getElementById('email').value
        let name = document.getElementById('name').value
        let lastname = document.getElementById('lastname').value
        let phone = document.getElementById('phone').value
        let message = document.getElementById('message').value
        let infos = document.getElementById('infos')
        let regex = /^[0-9]+$/

        if(name.match(regex)){
            return infos.innerHTML = `<h4 style = "color: red"> O nome deve conter apenas letras!</h4>`
        }

        if(name == "" || name < 3){
            return infos.innerHTML = `<h4 style = "color: red"> O nome deve conter pelo menos 3 letras!</h4>`
        }

        if(lastname == "" || lastname < 3){
            return infos.innerHTML = `<h4 style = "color: red"> O sobrenome deve conter pelo menos 3 letras!</h4>`
        }

        if(email == "" || phone == ""){
            return infos.innerHTML = `<h4 style = "color: red"> Por favor, preencha esse campo!</h4>`
        }

        if(phone.length <= 14){
            return infos.innerHTML = `<h4 style = "color: red"> O número do celular deve conter 11 dígitos, contando com DDD!</h4>`
        }

        if(message.length <= 5 || message == ""){
            return infos.innerHTML = `<h4 style = "color: red"> Este campo deve conter no mínimo 5 caracteres! </h4>`
        }
    
    (this).submit()

    })
}

//Função para validar input de telefone*/

console.log("Olá");