//SISTEMA DE RESERVAS DE HOTEL: 

class Reserva {
    constructor(nombreCliente, apellidoCliente, numeroReserva, habitacion) {
        this.nombreCliente = nombreCliente;
        this.apellidoCliente = apellidoCliente;
        this.numeroReserva = numeroReserva;
        this.habitacion = habitacion;
    }
}

const reservas = []; 

/*****************************/
//Si el LocalStorage tiene datos, los agrego al Array de Reservas. 

if(localStorage.getItem("reservas")) {
    let reserva = JSON.parse(localStorage.getItem("reservas"));
    /* reservas.push(...reserva); */
    for(let i = 0; i < reserva.length; i++ ) {
        reservas.push(reserva[i]);
    
    }
}

/*****************************/

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarReserva();
})

function agregarReserva() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const reserva = document.getElementById("reserva").value;
    const habitacion = document.getElementById("habitacion").value;
    const nuevaReserva = new Reserva(nombre, apellido, reserva, habitacion);
    reservas.push(nuevaReserva);
    //Agrego al LocalStorage:
    localStorage.setItem("reservas", JSON.stringify(reservas));
    formulario.reset();
}

const contenedorReservas = document.getElementById("contenedorReservas");

const verReservas = document.getElementById("verReservas");

verReservas.addEventListener("click", () => {
    mostrarReservas();
});

function mostrarReservas() {
    contenedorReservas.innerHTML = "";
    reservas.forEach( reserva => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div>
                            <p>Nombre del Cliente: ${reserva.nombreCliente}</p>
                            <p>Apellido del Cliente: ${reserva.apellidoCliente}</p>
                            <p>Número Reserva: ${reserva.numeroReserva}</p>
                            <p>Habitación: ${reserva.habitacion}</p>
                        </div>
        
                        `;
        contenedorReservas.appendChild(div);
    })
}