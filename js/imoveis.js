class Validator{

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
});
