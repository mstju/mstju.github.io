// const form = document.getElementById('form')
// const username = document.getElementById('username')
// const email = document.getElementById('email')
// const password = document.getElementById('password')
// const passwordConfirm = document.getElementById('passwordConfirm')

// form.addEventListener('submit', (e) =>{
//    e.preventDefault()

//    checkInputs()

// })

// function checkInputs(){
//    const usernameValue = username.value.trim()
//    const emailValue = email.value.trim()
//    const passwordValue = password.value.trim()
//    const passwordConfirmValue = passwordConfirm.value.trim()

//    if(usernameValue === ''){

//       errorValidation(username, "Preencha esse campo")
//    }else{
//       successValidation(username)
//    }

//    if(emailValue === ''){
//       errorValidation(email, "Preencha esse campo")
//    }else if (validateEmail(emailValue) == false){
//       errorValidation(email, "Email digitado errado.")
//    }else{
//       successValidation(email)
//    }

//    if(passwordValue === ''){
//       errorValidation(password, "Preencha esse campo")
//    }else if (passwordValue.length < 8){
//       errorValidation(password, "A senha dever ter mais de 8 caracteres")
//    }else{
//       successValidation(password)
//    }

//    if(passwordConfirmValue === ''){
//       errorValidation(passwordConfirm, "Preencha esse campo")
//    }else if (passwordConfirmValue !== passwordValue){
//       errorValidation(passwordConfirm, "Senha diferente. Por favor, digitar novamente.")
//    }else{
//       successValidation(passwordConfirm)
//    }

// }

// function errorValidation(input, message){
//    const formControl = input.parentElement
//    const small = formControl.querySelector('small')

//    small.innerText = message
//    formControl.className = 'form-control error'
// }

// function successValidation(input){
//    const formControl = input.parentElement

//    formControl.className = 'form-control success'
// }

// function validateEmail(input) {
//    return /\S+@\S+\.\S+/.test(input);
// }

//função que redireciona pra home
function redirectHome() {
  window.open("../index.html", "_blank");
}

//máscara cpj / cnpj
var options = {
  onKeyPress: function (cpf, ev, el, op) {
    var masks = ["000.000.000-000", "00.000.000/0000-00"];
    $(".cpfOuCnpj").mask(cpf.length > 14 ? masks[1] : masks[0], op);
  },
};

$(".cpfOuCnpj").length > 11
  ? $(".cpfOuCnpj").mask("00.000.000/0000-00", options)
  : $(".cpfOuCnpj").mask("000.000.000-00#", options);

//máscara data de nascimento
$(document).ready(function () {
  $("#data").mask("99/99/9999");
  return false;
});

//máscara cep
$(document).ready(function () {
   $("#cep").mask("00000-000");
   return false;
 });

//

function limpa_formulário_cep() {
  //Limpa valores do formulário.
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("uf").value = conteudo.uf;
  } //end if.
  else {
    //se o CEP não for encontrado.
    limpa_formulário_cep();
    alert("CEP inválido.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("uf").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}

//máscara número de telefone
$(document).ready(function() {
  $("#cel").mask("(00) 0000-00009");
//adicionando o formato com 9 digitos
$("#cel").blur(function() {
    if ($(this).val().length ==15){
      $("#cel").mask("(00) 00000-0009");
    }else{
      $("#cel").mask("(00) 0000-00009");
    }
  })
//Validando se o número possui 9 digitos:
function validarTel() {
  var telefone = document.getElementById('cel');

  if (telefone.value.length == 15) {
    telefone.setCustomValidity('');
    return true;
  } else {
    telefone.setCustomValidity('O número de celular deve ter o formato: (XX) 9XXXX-XXXX');
    telefone.reportValidity();
    return false;
  }
}
password.addEventListener('input',validarTel);
})

//confirmar se as senhas são iguais:
function validarCadastro() {
  
  var password = document.getElementById('password');
  var passwordConfirm = document.getElementById('passwordConfirm');

  if (password.value === passwordConfirm.value) {
    passwordConfirm.setCustomValidity('');
    return true;
  } else {
    passwordConfirm.setCustomValidity('As senhas devem ser iguais');
    passwordConfirm.reportValidity();
    return false;
  }
}
//Código para a mensagem sumir quando as senhas forem iguais:
password.addEventListener('input',validarCadastro);