function agregar_servicio() {
    let cliente = document.getElementById("form_cliente");
    let servicio = document.getElementById("form_servicio");
    let precio = document.getElementById("form_precio");
    let cantidad = document.getElementById("form_cantidad");
    let datos = document.getElementById("tabla_servicios");
    let subtotal = Number(precio.value) * Number(cantidad.value);

    datos.innerHTML = datos.innerHTML + "<tr><td>" + servicio.value + "</td><td>" + precio.value + "</td><td>" + cantidad.value + "</td><td name='subtotal'>" + subtotal + "</td><td><button onclick='eliminar_producto(this)'>Eliminar</button></td></tr>";
calcular_total();
}

function calcular_total() {
    let subtotales = document.getElementsByName('subtotal');
    let total = document.getElementById('total');
    let suma = 0;
    for (let i=0; i < subtotales.length; i++) {
        suma = suma + Number(subtotales[i].innerText)
    }

    total.innerText = "$" + suma;
}

function eliminar_producto(servicio) {
    servicio.parentElement.parentElement.remove();
    calcular_total();
}

function mostrarPrecio(e) {
    let precios =  e.target.selectedOptions[0].getAttribute("precio")
    document.getElementById("form_precio").value = precios;
}


class Cotizacion {
    constructor(cliente, servicios, total) {
        this.cliente = cliente;
        this.servicios = servicios;
        this.total = total;
    }
}

const cotizaciones = []; 

if(localStorage.getItem("cotizaciones")) {
    let cotizacion = JSON.parse(localStorage.getItem("cotizaciones"));
    for(let i = 0; i < cotizacion.length; i++ ) {
        cotizaciones.push(cotizacion[i]);
    }
}

const formulario = document.getElementById("formulario");
const datos = document.getElementById("tabla_servicios")
const botonFin = document.getElementById("botonFin");

function agregarCotizacion() {
    const cliente = document.getElementById("form_cliente").value;
    const servicios = document.getElementById("form_servicio").value;
    const total = document.getElementById('total').value;
    const nuevaCotizacion = new Cotizacion(cliente, servicios, total);
    cotizaciones.push(nuevaCotizacion);
    localStorage.setItem("cotizaciones", JSON.stringify(cotizaciones));
}

const form = document.getElementById("formulario");

async function handleSubmit(event) {
    event.preventDefault();
    agregarCotizacion();
    var status = document.getElementById("formulario");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data, 
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
        Swal.fire(`Cotización Enviada`);
        form.reset()
    } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! Ocurrio un problema al mandar tu cotizacion"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! Ocurrio un problema al mandar tu cotizacion"
    });
  }
  form.addEventListener("submit", handleSubmit)