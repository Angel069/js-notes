let edad = prompt("Introduzca su edad");

if (Number(edad) == edad) {
    if (edad >= 18) {
        alert("Acceso Concedido")
    }
    else if (edad < 18) {
        alert("Acceso Denegado, necesita ser mayor de edad")
    }
} 
else {
    alert ("Introduzca un valor numerico")
}

let calificacion = prompt("Introduzca su calificacion final")

switch (calificacion) {
    case (calificacion <= 3):
        alert("Muy deficiente")
        break;

    default:
        break;
}