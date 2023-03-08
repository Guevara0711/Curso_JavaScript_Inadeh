function comprobarClaves(){
    var clave1, clave2

    clave1 = document.form.password1.value
    clave2 = document.form.password2.value

    if(clave1 == clave2){
        alert("Las claves son identicas")
    }else{
        alert("Las claves no son iguales")
    }
}