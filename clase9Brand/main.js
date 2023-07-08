let productos = ["mesas", "sillas", "manteles", "lona"]

function agregar_producto() {
    let producto = document.getElementById("form_producto");
    let valor = document.getElementById("form_valor");
    let cantidad = document.getElementById("form_cantidad");
    let datos = document.getElementById("tabla_productos");
    let subtotal = Number(valor.value) * Number(cantidad.value);

    datos.innerHTML = datos.innerHTML + "<tr><td>"+ producto.value +"</td><td>" + valor.value + "</td><td>" + cantidad.value + "</td><td name='subtotal'>" + subtotal + "</td><td><button onclick='eliminar_producto(this)'>Eliminar</button></td></tr>";
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

function eliminar_producto(producto) {
    producto.parentElement.parentElement.remove();
    calcular_total();
}