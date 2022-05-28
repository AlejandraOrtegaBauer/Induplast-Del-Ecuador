function valida_envia() {
    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    telefono = document.fvalida.telefono.value
    telefono = validarEntero(telefono)
    document.fvalida.telefono.value = telefono
    if (telefono == "") {
        alert("Tiene que introducir un número de telefono.")
        document.fvalida.edad.focus()
        return 0;
    }


    if (document.fvalida.correo.value.length == 0) {
        alert("Debe introducir un mail.")
        document.fvalida.correo.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}

function validarEntero(valor) {
    valor = parseInt(valor)

    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}