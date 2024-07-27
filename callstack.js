function restarDos(num){
    return num-2;
}
function calcular(){
    const sumartotal = 4+5;
    return restarDos(sumartotal);
}

debugger;

calcular();



El Call Stack es un mecanismo para que un intérprete realice un seguimiento
de su lugar en un script que llama a múltiples funciones: qué función se está 
ejecutando actualmente y qué funciones se invocan desde esa función, etc.

Cuando un script llama a una función, 
el intérprete la agrega a la pila de llamadas y luego comienza a llevar a cabo la función.
Cualquier función llamada por esa función se agrega a la pila de llamadas más arriba
y se ejecuta donde se alcanzan sus llamadas.
Cuando finaliza la función actual, el intérprete la quita de la pila y reanuda la 
ejecución donde la dejó en la última lista de códigos. 
Si la pila ocupa más espacio del que le había asignado, se produce un error de "desbordamiento de pila".