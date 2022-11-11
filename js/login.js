function validateFields(){
    const emailValid = isEmailValid()
    document.getElementById("recuperar").disabled = !emailValid

    const passwordValid = isPasswordValid()
    document.getElementById("entrar").disable = !emailValid || !passwordValid

}

function isEmailValid(){
    const email = document.getElementById("email").value
    if(!email){
        return false
    }
    return validateEmail(email)
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function isPasswordValid(){
    const senha = document.getElementById("senha").value
    if(!senha){
        return false
    }
    return true
}

