//Imprimir todos los numeros del 5 al 95 de 1 en 1 

function cicloPara(){
    var num 
    for (num=5;num<=95;num++){
        document.writeln(num,"<br>")
    }
}

//Imprimir todos los numeros comprendidos entre el 4 y el 44 de 4 en 4
function cicloMientras(){
    var num = 4
    while(num<=44){
        document.write(num," ")
        num = num + 4
    }
}

//Imprimir los números del -10 al 14 de 2 en 2
function cicloHacerMientras(){
    var i=-10
    do {
        document.write(i,"<br>")
        i = i+2
    }
    while(i<=14)
}

//Indicar el dia de la semana con un numero elegido 
function diaSemana(){
    var num=prompt("Elija un numero del 1 al 7 el cual será representado por un día de la semana")
    var mensaje

    switch (num) {
        case "1":
            mensaje = "Ha elegido el #1 y representa el día lunes"
            break;
        
        case "2":
            mensaje = "Ha elegido el #2 y representa el dia martes"
            break;

        case "3":
            mensaje = "Ha elegido el #3 y representa el dia miércoles"
            break;

        case "4":
            mensaje = "Ha elegido el #4 y representa el dia jueves"
            break;

        case "5":
            mensaje = "Ha elegido el #5 y representa el dia viernes"
            break;

        case "6":
            mensaje = "Ha elegido el #6 y representa el dia sabado"
            break;

        case "7":
            mensaje = "Ha elegido el #7 y representa el dia domingo"
            break;

        default:
            mensaje = "Ha escrito un caracter inválido"
            break;
    }

    alert(mensaje)
}

//Elegido y escrito un color se debe pintar la pantalla de fondo de la pagina web 

function pintarPantalla(){
    var color 
    color = prompt("Elige un color para pintar la pantalla: ROJO - VERDE - AZUL - CHOCOLATE")

    switch (color) {
        case "ROJO":
            document.bgColor="red"
            break;
    
        case "VERDE":
            document.bgColor="green"
            break;

        case "AZUL":
            document.bgColor="blue"
            break;

        case "CHOCOLATE":
            document.bgColor="brown"
            break;

        default:
            alert("Ha escrito un color que no esta en la lista o lo escribió con minúscula")
            break;
    }
}