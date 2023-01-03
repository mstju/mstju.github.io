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
    document.getElementById("numero").focus();
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
      //Preenche os campos com "..." enquanto consulta
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
    } else {
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

//máscara do telefone
const celInput = document.getElementById("cel");

celInput.addEventListener("input", function (event) {
  const value = event.target.value;
  const formattedValue = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  event.target.value = formattedValue;
});

//confirmar se as senhas são iguais:
function validarCadastro() {
  var password = document.getElementById("password");
  var passwordConfirm = document.getElementById("passwordConfirm");

  if (password.value === passwordConfirm.value) {
    passwordConfirm.setCustomValidity("");
    return true;
  } else {
    passwordConfirm.setCustomValidity("As senhas devem ser iguais");
    passwordConfirm.reportValidity();
    return false;
  }
}
//Código para a mensagem sumir quando as senhas forem iguais:
password.addEventListener("input", validarCadastro);

//botão day/night
const button = document.getElementById("button");
const link = document.getElementById("css");

button.addEventListener("click", () => {
  const icon = button.querySelector("i");
  if (link.getAttribute("href") === "../css/cadastro.css") {
    link.setAttribute("href", "../css/cadastro-dark.css");
    icon.classList.replace("fa-moon", "fa-sun");
    icon.style.transform = "rotate(360deg)";
  } else {
    link.setAttribute("href", "../css/cadastro.css");
    icon.classList.replace("fa-sun", "fa-moon");
    icon.style.transform = "rotate(0deg)";
  }
});
