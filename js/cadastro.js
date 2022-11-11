var formulario = document.querySelector('form');

formulario.onsubmit = function(){
   if(!document.querySelector("input[type='email']").value){
      alert("Campo email vazio!");
      return false;
   }
   
   alert("Login feito com sucesso");
} 