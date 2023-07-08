/**** OPERADOR SPREAD *****/

// Operador Spread (...)

//Es una herramienta que nos permite desparramar un array o un objeto. Es decir cambiar la forma en que lo presentamos: 

//1) Spread en arrays

const arrayNumeros = [1,2,3,4,5];

console.log(arrayNumeros);

// Se ve como un array. En cambio si utilizo el operador spread: 

console.log(...arrayNumeros);
console.log (arrayNumeros[0], arrayNumeros[1], arrayNumeros[2], arrayNumeros[3], arrayNumeros[4]);

// Se ve como si cada elemento estuviera separado por una coma.
// Es como si enviara cada elemento como un parámetro individual. 


//Por ejemplo lo podemos utilizar con Math.max();
// Math.max() es una función que nos permite encontrar el número más grande de una lista de números.


let resultadoMayor = Math.max(1,2,3,4,5);
console.log("El mayor es el " + resultadoMayor);

// Si intentaba esto con un array: 

let resultadoMayorArray = Math.max(arrayNumeros);
console.log("El mayor es el " + resultadoMayorArray);

// Me daría error. Pero si utilizo el operador spread:

resultadoMayorArray = Math.max(...arrayNumeros);
console.log("El mayor es el " + resultadoMayorArray);

//También podemos desparramar el contenido de un Array en otro Array:

let arrayNumeros2 = [6,7,8,9,10];

let arrayNumeros3 = [...arrayNumeros, ...arrayNumeros2];

console.log(arrayNumeros3);

//Puedo desparramar estos datos en un objeto también, en donde el índice sería la propiedad del objeto:

let objetoNumeros = {
    ...arrayNumeros,
    ...arrayNumeros2
};

console.log(objetoNumeros);

//2) Spread en objetos

//También podemos utilizar el operador spread en objetos:

const persona = {
    nombre: "Juan",
    edad: 25,
    profesion: "Desarrollador Web"
}

console.log(persona);

//Si quiero crear un nuevo objeto con los mismos datos de persona, pero con un nuevo nombre:

const persona2 = {...persona, nombre: "Pedro"};

console.log(persona2);

//Si quiero crear un nuevo objeto con los mismos datos de persona, pero con un nuevo nombre y una nueva propiedad:

const persona3 = {...persona, nombre: "Javier", pais: "Argentina"};

console.log(persona3);









