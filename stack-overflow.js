/*Tenemos nuestro Call Stack donde tenemos nuestra lista de tareas, 
empezando por el Global Object, se va agregando a la pila todo el código nuestro. 
Puede pasar que tengamos alguna función que haga que desbordemos esa pila del Call Stack, 
a esto se le llama Stack overflow, y se crasheará el navegador. 
En versiones anteriores de Chrome se cerraba por completo el navegador, 
ahora detectan ese desbordamiento y lo bloquean para evitar que se bloqueé todo el navegador.*/


function overflow() {
	overflow();
}

overflow(); // Uncaught RangeError: Maximum call stack size exceeded``