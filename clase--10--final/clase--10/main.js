/**** STORAGE ****/
//Nos permite guardar datos de manera local en el navegador: 
//El navegador nos ofrece dos formas de guardar datos en el Storage: 

//LocalStorage: almacena los datos de forma indefinida, hasta que el usuario los borre de forma manual. 

//SessionStorage: almacena los datos hasta que el usuario cierre el navegador. 

//1) Trabajemos con el LocalStorage: 

//Para guardar datos en el LocalStorage vamos a utilizar un método que se llama setItem(). 

//Este método recibe dos parámetros: el nombre de la clave y el nombre del valor a guardar. 

//Ejemplo A: almacenamos un saludo: 

localStorage.setItem("saludo", "Hola Mundo");

//Ejemplo B: almacenamos un number: 

localStorage.setItem("numero", 1234);

//Ejemplo C: almacenamos un booleano; 

localStorage.setItem("booleano", true);

//Para recuperar los datos almacenados, utilizamos el método getItem();

let saludo = localStorage.getItem("saludo");
console.log(saludo);

//Ejemplo: recuperamos un número: 

let numero = localStorage.getItem("numero");
console.log(numero, typeof numero);

//2) Trabajemos con el SessionStorage. 
//El funcionamiento es similar al LocalStorage. 

//Para guardar datos utilizamos el método setItem().

//Ejemplo A: almacenamos un saludo en el SessionStorage. 

sessionStorage.setItem("SaludoNuevo", "Hola mundo x2");

//Para recuperar un dato utilizamos getItem().

//Ejemplo B: recuperamos el saludo. 

let saludoDos = sessionStorage.getItem("SaludoNuevo");
console.log(saludoDos);

//Agregamos mas info al SessionStorage: 

sessionStorage.setItem("numero",12345678);
sessionStorage.setItem("booleanoNuevo",false);

//Recorrer con un bucle: 
//Pero no podemos utilizar un for..of porque no es un objeto iterable. 

//Pero si lo que podemos hacer es trabajar con el metodo key() que nos devuelve un array con las claves del storage. 

// Ejemplo A: recorremos el LocalStorage: 

console.log("Recorremos LocalStorage: ");
for( let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(clave, valor);
}

// Eliminamos datos del Storage: 
//Para eliminar datos del LocalStorage, utilizamos el método removeItem().

//Ejemplo A: eliminamos el saludo. 

localStorage.removeItem("saludo");

// También puedo eliminar toda la información del LocalStorage con el método clear(). 

localStorage.clear();

/***** ALMACENAR OBJETOS EN EL STORAGE  *****/
//Tenemos que tener en cuenta que todo lo que se almacena en el Storage esta en formato String. 

//Por lo tanto, si queremos almacenar un objeto, tenemos que convertirlo a String. 

//JSON: JavaScript Object Notation. Es un formato de texto ligero para el intercambio de datos. 
//JSON ES UN STRING CON UN FORMATO ESPECIAL. 

// ¿Cómo convertimos un objeto a JSON? 

//Utilizamos el método JSON.stringify()

const samuel = {
    nombre: "Samuel",
    apellido: "Tocaimaza",
    edad: 18, 
    casado: false
};

const samuelJSON = JSON.stringify(samuel);

console.log(samuelJSON, typeof samuelJSON);

//Lo almaceno en el LocalStorage: 

localStorage.setItem("samuel", samuelJSON);

//Ahora si quiero recuperar un JSON del LocalStorage y convertirlo en un objeto tengo que utilizar el método JSON.parse().

const personaJSON = localStorage.getItem("samuel");
const persona = JSON.parse(personaJSON);

console.log(persona, typeof persona); 