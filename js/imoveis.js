// Função para validar inputs

let form = document.getElementById('rent-form');
if (form.addEventListener) {
    form.addEventListener('submit', validateForm);
}else if(form.attachEvent) {
    form.attachEvent('onsubmit', validateForm);
}

function validateForm(evt) {
    let email = document.getElementById('email');
    let name = document.getElementById('name');
    let lastname = document.getElementById('lastname');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');
    let agreement = document.getElementById('agreement');
    let filterEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	let filterPhone = /^(?:\()[0-9]{2}(?:\))\s?[0-9]{5}(?:-)[0-9]{4}$/;
    let contError = 0;

    let box_email = document.querySelector('.msg-email')
    if(email.value == ""){
        box_email.innerHTML = 'Favor preencher o E-mail!';
        box_email.style.display = 'block';
        contError += 1;
    }else if(filterEmail.test(email.value)){
        box_email.style.display = 'none';
    }else{
        box_email.innerHTML = 'Formato do E-mail inválido!';
        box_email.style.display = 'block';
        contError += 1;
    }

    let box_name = document.querySelector('.msg-name')
    if(name.value == ""){
        box_name.innerHTML = 'Favor preencher o nome!';
        box_name.style.display = 'block';
        contError += 1;
    }else if(name.value.length >= 3){
        box_name.style.display = 'none';
    }else{
        box_name.innerHTML = 'O nome deve conter mais de 3 caracteres!';
        box_name.style.display = 'block';
        contError += 1;
    }

    let box_lastname = document.querySelector('.msg-lastname')
    if(lastname.value == ""){
        box_lastname.innerHTML = 'Favor preencher o sobrenome!';
        box_lastname.style.display = 'block';
        contError += 1;
    }else if(lastname.value.length >= 3){
        box_lastname.style.display = 'none';
    }else{
        box_lastname.innerHTML = 'O sobrenome deve conter mais de 3 caracteres!';
        box_lastname.style.display = 'block';
        contError += 1;
    }

    let box_phone = document.querySelector('.msg-phone')
    if(phone.value == ""){
        box_phone.innerHTML = 'Favor preencher o telefone celular!';
        box_phone.style.display = 'block';
        contError += 1;
    }else if(filterPhone.test(phone.value)){
        box_phone.style.display = 'none';
    }else{
        box_phone.innerHTML = 'Formato do telefone inválido! Favor preencher nesse formato: (XX)XXXXX-XXXX.';
        box_phone.style.display = 'block';
        contError += 1;
    }

    let box_message = document.querySelector('.msg-message')
    if(message.value == ""){
        box_message.innerHTML = 'Favor preencher a mensagem!';
        box_message.style.display = 'block';
        contError += 1;
    }else if(message.value.length >= 5){
        box_message.style.display = 'none';
    }else{
        box_message.innerHTML = 'A mensagem deve conter mais de 5 caracteres';
        box_message.style.display = 'block';
        contError += 1;
    }

    let box_agreement = document.querySelector('.msg-agreement')
    if(agreement.value == ""){
        box_agreement.innerHTML = 'Favor clicar na caixa para aceitar a licença de uso!';
        box_agreement.style.display = 'block';
        contError += 1;
    }else{
        box_agreement.style.display = 'none';
    }

    if (contError > 0) {
        evt.preventDefault();
    }
}