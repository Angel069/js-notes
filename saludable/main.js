/****** Saludable.com -- Calculadora de Indice de Masa Coorporal *******/

//Crear clases: 

class Persona {
    constructor(nombre, email, peso, altura) {
        this.nombre = nombre; 
        this.email = email;
        this.peso = peso;
        this.altura = altura; 
    }

    calcularIMC() {
        let resultado = (this.peso / (this.altura * this.altura)) * 10000;
        return resultado.toFixed(2);
    }
}

//Creamos un array de objetos. 

const personas = [];

// Crear las variables necesarias: 

const idFormulario = document.getElementById("formulario");

idFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //Evitamos que se recargue la página. 

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    //Creamos el objeto persona
    const persona = new Persona(nombre, email, peso, altura);
    //Agregamos los datos en el Array: 
    personas.push(persona);

    //Guardamos los datos en el Storage: 
    localStorage.setItem("Persona", JSON.stringify(personas));

    //Limpiamos el formulario
    idFormulario.reset();

    mostrarInfo(persona);

})

//Crearmos la función Mostrar Info: 

const resultado = document.getElementById("infoUsuarios");

const mostrarInfo = (persona) => {
    let aux ="";
    aux += `<p class="resultado"> ${persona.nombre} tu IMC es el siguiente: </p>
            <p class="resultado"> IMC: ${persona.calcularIMC()} </p>`
    resultado.innerHTML = aux;
}

const botonAdmin = document.getElementById("admin");
const datosAdmin = document.getElementById("datosAdmin");

botonAdmin.addEventListener("click", () => {
    const personas = JSON.parse(localStorage.getItem("Persona"));
    let aux = "";
    personas.forEach(persona => {
        aux += `<p class="resultado"> Nombre ${persona.nombre} </p> 
                <p class="resultado"> Correo Electrónico: ${persona.email} </p> <hr>`
    });
    datosAdmin.innerHTML = aux; 
})



/* function calcularIMC(peso, altura) {
    return peso / (altura * altura);
} */