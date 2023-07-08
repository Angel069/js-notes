/*** SWEET ALERT ***/

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    Swal.fire('Hola mundo');
});

//Swal es un objeto global que tiene un método llamado fire. 
//Este método puede recibir un objeto por parámetro con distintas propiedades. 

const botonDos = document.getElementById("botonDos");

botonDos.addEventListener("click", () => {
    Swal.fire({
        title: "Hola Comisión",
        text: "Esto es un gatito",
        icon: "warning",
        imageUrl: "https://placekitten.com/408/287",
        confirmButtonText: "Aceptar",
        background: "#FDEBD0",
        backdrop: "#B7950B",
    });
});

//En Recipe Gallery podemos encontrar muchos ejemplos. 

//Incluso podemos modificar el fondo. 

//Otra opción es poder interactuar con los botones de confirmación y cancelación.


const botonTres = document.getElementById("botonTres");

let carrito = ["arroz", "fideos", "pan"];

botonTres.addEventListener("click", () => {
    Swal.fire({
        title: "¿Esta seguro de eliminar los fideos?",
        icon: "warning",
        background: "#FDEBD0",
        backdrop: "#B7950B",
        confirmButtonText: "Aceptar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#B7950B",
        confirmButtonColor: "#B7950B",
    }).then((result) => {
        if (result.isConfirmed) {
            //elimino el producto fideos del carrito
            carrito = carrito.filter((producto) => producto !== "fideos");
            console.log(carrito);
            Swal.fire({
                title: "Producto eliminado",
                icon: "success",
                background: "#FDEBD0",
                backdrop: "#B7950B",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#B7950B",
            });
        }
    });
});

//Luego del Fire podemos utilizar el then para saber si el usuario aceptó o canceló. Then lo vemos en la clase que viene de promesas.

//Formulario de Login con Sweet Alert:

const botonCuatro = document.getElementById("botonCuatro");

botonCuatro.addEventListener("click", () => {
    Swal.fire({
        title: "Login",
        html: `<input type="text" id="email" class="swal2-input" placeholder="Email">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        //focusConfirm: false,
        background: "#FDEBD0",
        backdrop: "#B7950B",
        confirmButtonText: "Enviar",
        confirmButtonColor: "#B7950B",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#B7950B",
    }).then((result) => {
        if (result.isConfirmed) {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            console.log(email, password);
            Swal.fire({
                title: "Datos enviados",
                icon: "success",
                background: "#FDEBD0",
                backdrop: "#B7950B",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#B7950B",
            });
        }
    });
});

/*** TOASTIFY ***/
//Lo utilizamos para mostrar mensajes de notificaciones personalizados.

//1) Llamar a Toastify y pasamos por parámetro un objeto con las propiedades que queremos modificar.
//2) Concatenamos con el método showToast(). para mostrar el mensaje.


const botonCinco = document.getElementById("botonCinco");

botonCinco.addEventListener("click", () => {
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        //close: true,
        gravity: "bottom",
        position: "right",
        //backgroundColor: "#B7950B",
        //destination: "https://www.google.com",
        style: 
        {
            background: "linear-gradient(to right, #B7950B, #FDEBD0)",
        },
        //className: "info",
    }).showToast();
});


/*** LUXON ***/
//Librería para trabajar con fechas y horas.

//La clase principal en luxon es DateTime. Para ser más ordenados, podemos referenciarla en una variable global para facilitar su acceso:

const DateTime = luxon.DateTime;    

const fechaActual = DateTime.now();
console.log(fechaActual);

//Similar a trabajar con new Date() de JS: 

const fechaActualDos = new Date();
console.log(fechaActualDos);

