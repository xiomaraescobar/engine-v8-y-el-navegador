//Lo que escribes:


console.log(nombre);
apellido();

var nombre = "Diego";

function apellido(){
	console.log("De Grada");
}
//Como el motor de JavaScript lo interpreta:


var nombre = undefined;
function apellido(){
	console.log("De Grada");
}

console.log(nombre);
apellido();
nombre = "Diego";
//Si te preguntas cuál pone más arriba, ¿Las variables o las funciones? La respuesta es las variables. Probemos esto:


var nombre;
function nombre(){}

typeof nombre; // Output: "function"
//¿Y si ponemos primero la función y luego la variable?


function nombre(){}
var nombre;

typeof nombre; // Output: "function"
//Pero, si declaras una variable y le asignas un valor en la misma linea el resultado es diferente:


var nombre = "Platzi";
function nombre(){}

typeof nombre; // Output: "string"
//Esto es porque JavaScript hace hoisting solo de la declaración de la variable. JavaScript trata la declaración y asignación en una sola linea como dos pasos, por lo que si escribimos:


var nombre = "Platzi";
//El motor lo interpreta así:


var nombre = undefined;
nombre = "Plazi";
//Así que cuando escribimos:


var nombre = "Platzi";
function nombre(){}

typeof nombre; // Output: "string"
//Como lo interpreta el motor de JavaScript es así:


var nombre = undefined;
function nombre(){}

nombre = "Platzi";

typeof nombre; // Output: "string"
//todo esto es con el fin de ver como funciona javascript.
