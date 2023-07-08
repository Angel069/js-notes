/** SUGAR SINTAX **/
//La utilización de Operadores Avanzados para simplificar el código.

//1) Operador ++

let i = 4; 
i = i + 1; 
//console.log(i);

i+= 2; 
i++; 

let aux = 0;

while(aux < 5) {
    console.log(aux);
    //aux+=2; 
    //Se puede simplificar más: 
    aux++;
}

//2) Operador Ternario: es una simplificación del condicional IF.. ELSE. 

// SINTAXIS: 3 partes ( SI O SI )

/**
 * la condición
 * código que se ejecuta cuando la condición es verdadera
 * else, código que se ejecuta cuando la condición es falsa
 */

let edadCliente = 8; 

if(edadCliente >= 18){
    console.log("Es mayor, puede ingresar.");
}else {
    console.log("Es menor, no puede ingresar."); 
}

//Con el operador ternario lo podemos hacer así: 

edadCliente >=18 ? console.log("es mayor") : console.log("es menor");

//DIAPO PÁGINA 16. 

//El operador ternario ya tiene un return implícito, es decir que me resulta muy útil para retornar datos de forma condicional. 

let tienePermiso = edadCliente >=18 ? true : false;
console.log(tienePermiso, typeof tienePermiso);

// Un caso muy utilizado es para levantar un array del LocalStorage: 

let carrito = []; 
carrito = [150, 25, 30];

localStorage.setItem("carrito", JSON.stringify(carrito));

carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []; 

//Verificamos por consola: 
console.log(carrito); 

// OPERADOR LÓGICO && AND: 
//Si la condición es verdadera, devuelve el valor de la segunda parte. 
//Es una simplificación del condicional IF en una sola línea de código. 

let nombreCliente = "Samuel";

nombreCliente === "Samuel" && alert("Bienvenido Samuel");

//if(nombreCliente === "Samuel") alert("Hola");

carrito = []; 

carrito.length === 0 && console.log("El carrito está vacío");

//También puedo retornar valores: 

let vacio = carrito.length === 0 && "Esto esta vaciooooooooo";
console.log(vacio);

// OPERADOR LÓGICO || OR: 

//Primero tenemos que saber que en JS se denomica valores "falsy" a los siguientes: false, 0, "", null, undefined, NaN. 

//SINTAXIS: Ahora trabajamos con dos operandos y ya no tenemos una condición explícita. 

console.log("Operador Lógico OR: ");

console.log(0 || "Verdadero");
console.log(1 || "Verdadero");
console.log(null || "verdaderooo");

//Ejemplo: lo utilizamos para pedir datos al usuario: 

/*
let nombre = prompt("Ingrese su nombre: ");
console.log(nombre || "El usuario no ingresó su nombre");
*/
// OPERADOR NULLISH COALESCING: ??
//Es una simplificación del operador OR. 
//Trabaja igual que el OR, pero solo admite como valores "nullish" a null y undefined. 

console.log("Operador Nullish Coalescing: ");
console.log(0 ?? "Verdadero"); 

//Ejemplo del uso de Nullish: 

/*
let nombre = prompt("Ingrese su nombre") ?? "Cliente Anónimo";
console.log(nombre);
*/

//ACCESO CONDICIONAL A UN OBJETO: 

//Cuando queremos acceder a un objeto que no existe, naturalmente nos retorna un error. Pero si usamos le operador ? sobre la referencia de ese objeto podemos condicionar su acceso y tener un mejor control del error. 

const cliente = null; 

console.log("Acceso Condicional a un objeto: "); 
//console.log(cliente.nombre || "El Cliente no existe"); 

//¿Qué me retorna si el objeto es null? 

//Con el operador ? podemos acceder a las propiedades de un objeto que no existe. 

console.log(cliente?.nombre || "El cliente no existe");

/** DESESTRUCTURACIÓN DE OBJETOS: **/

//Es una forma de extraer propiedades de un objeto y asignarlas a variables. 

const alumno = {
    nombre: "Juan",
    apellido: "Perez", 
    edad: 25, 
    curso: "JavaScript"
}; 

//SINTAXIS:

let {nombre, apellido, edad, curso:carrera} = alumno; 
console.log(nombre);
//console.log(curso); 
//console.log(cuota); Si llamo a una propiedad no definida retorna undefined. 
let nombreAlumno = alumno.nombre;
let apellidoAlumno = alumno.apellido; 


//Puedo declarar con const o let. Adentro de las llaves puedo poner el nombre de las propiedades que quiero extraer. Y en memoria se crean esas variables a las cuales puedo acceder de forma independiente después. 

//ALIAS: 
//Si quiero cambiar el nombre de la variable que se crea puedo hacerlo de la siguiente forma: 

console.log(carrera);

//Que pasa si una de las propiedades del objeto es otro objeto? 

const gato = {
    duenio: "Juan", 
    raza: "Felino",
    edad: 5, 
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123, 
        ciudad: "Sprinfield"
    }
};

let {duenio, raza, edad:edadGato, direccion:{calle, numero, ciudad}} = gato;

console.log(calle); 
console.log(edadGato); 

//DESESTRUCTURACIÓN POR PARÁMETROS: 

//Es una forma de desestructurar un objeto que se pasa como parámetro a una función. 

const saludar = ( {nombre, apellido, edad} ) => {
    console.log(`Hola ${nombre} ${apellido} tienes ${edad} años`);
}

saludar(alumno);

//DESESTRUCTURACIÓN DE ARRAY. 

//Es una forma de extraer elementos de un array y asignarlos a variables. 

let arrayNumeros = [1, 2, 3, 4, 5]; 

//Sintaxis: 

let [primero, , tercero, cuarto, quinto] = arrayNumeros;

console.log(primero); 
console.log(tercero);





