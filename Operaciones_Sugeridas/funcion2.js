function suma(){
    var num1, num2
    var respCorrecta, respUsuario

    num1 = parseInt(prompt("Ingrese el primer número a sumar: "))
    num2 = parseInt(prompt("Ingrese el segundo número a sumar: "))

    respCorrecta = num1 + num2

    respUsuario = prompt("¿Cuál es el total de "+num1+" + "+num2+"?")

    if (respUsuario == respCorrecta){
        alert("La respuesta es correcta")
    }else {
        alert("La respuesta es incorrecta. La respuesta correcta es: "+respCorrecta)
    }

}

function resta(){
    var num1, num2
    var respCorrecta, respUsuario

    num1 = parseInt(prompt("Ingrese el primer número a restar: "))
    num2 = parseInt(prompt("Ingrese el segundo número a restar: "))

    respCorrecta = num1 - num2

    respUsuario = prompt("¿Cuál es el total de "+num1+" - "+num2+"?")

    if (respUsuario == respCorrecta){
        alert("La repsuesta es correcta")
    }else {
        alert("La respuesta es incorrecta. La respuesta correcta es: "+respCorrecta)
    }
}

function producto(){
    var num1, num2
    var respCorrecta, respUsuario

    num1 = parseInt(prompt("Ingrese el primer número a multiplicar: "))
    num2 = parseInt(prompt("Ingrese el segundo número a multiplicar: "))

    respCorrecta = num1 * num2

    respUsuario = prompt("¿Cuál es el total de "+num1+" x "+num2+"?")

    if (respUsuario == respCorrecta){
        alert("La repsuesta es correcta")
    }else {
        alert("La respuesta es incorrecta. La respuesta correcta es: "+respCorrecta)
    }
}

function division(){
    var num1, num2
    var respCorrecta, respUsuario

    num1 = parseInt(prompt("Ingrese el primer número a dividir: "))
    num2 = parseInt(prompt("Ingrese el segundo número a dividir: "))

    respCorrecta = num1 / num2

    respUsuario = prompt("¿Cuál es el total de "+num1+" ÷ "+num2+"?")

    if (respUsuario == respCorrecta){
        alert("La repsuesta es correcta")
    }else {
        alert("La respuesta es incorrecta. La respuesta correcta es: "+respCorrecta)
    }
}
/*
function edad(){
    var anno
    var edad
    var annoactual

    anno = parseInt(prompt("¿En que año naciste?"))
    annoactual = parseInt(prompt("¿Cuál es el año actual?"))
    edad = annoactual - anno

    if (edad >= 18){
        alert("Eres mayor de edad porque tienes "+edad+" años")
    }else{ 
        alert("Eres menor de edad porque tienes "+edad+" años")
    }

}*/

function edad(){
    var fechaActual = new Date()
    var annoCumple, edadActual
    var annoActual = fechaActual.getFullYear()
    var edad

    annoCumple = parseInt(prompt("Ingrese el año en que naciste"))
    edad = annoActual - annoCumple


    if (edad >= 18){
        alert("Eres mayor de edad porque tienes "+edad+" años")
    }else{ 
        alert("Eres menor de edad porque tienes "+edad+" años")
    }

}


