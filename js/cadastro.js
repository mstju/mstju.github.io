//
var formulario = document.querySelector('form');
formulario.onsubmit = function(){
   if(!document.querySelector("input[type='email']").value){
      alert("Campo email vazio!");
      return false;
   }
   
   alert("Login feito com sucesso");
} 


// redirect home
function redirectHome(){
   window.open('../index.html', '_blank'); 
}

;
