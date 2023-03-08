function p1(){
    var num;
        num = prompt('Ingrese un número para saber si es positivo o negativo');
        num = parseInt(num);
        if (num > 0) {
            alert("El número ingresado es positivo");
        }
        else if (num < 0) {
            alert("El número ingresado es negativo");
        }
        else if (num == 0){
            alert("El número ingresado es cero, el cero no forma parte de negativos o positivos");
        }
        else {
            alert("Ha introducido un valor no numérico")
        }
}

function p2(){
    var num;
    num = parseInt(prompt("Ingrese un número de 1 a 3 dígitos"));
        if (num < 10) {
            alert("El número ingresado tiene un dígito");
            }
        else if(num < 100){
                alert("El número ingresado tiene dos dígitos");
            }
        else if (num <1000) {
            alert("El número ingresado tiene tres dígitos");
            }
        else{
            alert("El número ingresado excede el rango solicitado");
        }
}

function p3(){
    var num1,num2,num3;
   
    num1=parseInt(prompt("Escriba el primer número: "))
    num2=parseInt(prompt("Escriba el segundo número: "))
    num3=parseInt(prompt("Escriba el tercer número: "))

    if ((num1<num2) && (num1<num3)) {
        if (num2<num3) {
             alert("El orden de menor a mayor es: " + num1 + " --> "+ num2 + " --> " + num3 +".")
        }
        else {
             alert("El orden de menor a mayor es: " + num1 + " --> "+ num3 + " --> " + num2 +".")
        }
    }
   
    else if ((num2<num1) && (num2<num3)){
        if (num1<num3) {
             alert("El orden de menor a mayor es: " + num2 + " --> "+ num1 + " --> " + num3 +".")
        }
        else {
             alert("El orden de menor a mayor es: " + num2 + " --> "+ num3 + " --> " + num1 +".")
        }
    }    
   
    else {
        if (num1<num2) {
             alert("El orden de menor a mayor es: " + num3 + " --> "+ num1 + " --> " + num2 +".")
        }
        else {
             alert("El orden de menor a mayor es: " + num3 + " --> "+ num2 + " --> " + num1 +".")
        }
    }  
}

function p4(){
    var nombreVendedor;
    var montoCompra;
    nombreVendedor=prompt('Ingrese el nombre del vendedor:');
    montoCompra=prompt('Ingrese el monto total de la compra:');

    if (montoCompra <= 1000  ){
         alert ("El monto total fue de: "+ montoCompra+" "+ " y la comision es del 2% para el vendedor "+ nombreVendedor);
        }
       
    else if  ( montoCompra >= 1001 && montoCompra <= 10000 ){
         alert ("El monto total fue de: "+ montoCompra+" "+ "la comisión es del 4% para el vendedor: "+ nombreVendedor);
        }
    else if  ( montoCompra >= 10001   && montoCompra <= 20000 ){
         alert ("El monto total fue de: "+ montoCompra+" "+ "la comisión es del 5% para el vendedor: "+ nombreVendedor);
        }
    else {
        alert ("El monto total fue de: "+ montoCompra+" "+ "la comisión es del 6% para el vendedor: "+ nombreVendedor)
    }
}

function p5(){
    var palabra=prompt("Escoge una palabra para traducir al inglés: FERROCARRIL - PAPEL - LÁPIZ - PERRO")
    var mensaje

    switch (palabra) {
        case "FERROCARRIL":
            mensaje="La traducción correcta de FERROCARRIL al inglés es TRAIN"
            break;

        case "PAPEL":
            mensaje="La traducción correcta de PAPEL al inglés es PAPER"
            break;

        case "LÁPIZ":
            mensaje="La traducción correcta de LÁPIZ al inglés es PENCIL"
            break;

        case "PERRO":
            mensaje="La traducción correcta de PERRO al inglés es DOG"
    
        default:
            break;
    }

    alert (mensaje)
}

function p6(){
    var num, respuesta, i;
    var resultado = "";
    num = prompt("Escriba el número de la tabla de multiplicar que desea hasta el 12: ");
    for(i = 1; i <= 12; i++) {
        respuesta = i * num;
        resultado += num + ' x ' + i + " = " + respuesta + '<br>';
    }
    document.getElementById("resultado").innerHTML = resultado;
}

