var solicitudes = [
    {
        "ID": 1,
        "Descripción": "Pedido de notebook",
        "Estado": "Abierta",
        "FechaSolicitud": "30/03/2020"
    },
    {   
        "ID": 2,
        "Descripción": "Cambio de horario",
        "Estado": "En progreso",
        "FechaSolicitud": "03/04/2020"
    },
    {   
        "ID": 3,
        "Descripción": "Pedido de una bicicleta para llegar a la universidad",
        "Estado": "Cerrada",
        "FechaSolicitud": "12/05/2020"
    }
]

crearSolicitudEnTabla()



function agregarSolicitud(nuevaDescripción, nuevaFecha, nuevoEstado){
    var nuevaSolicitud = {
        ID: solicitudes.length + 1,
        Descripción: nuevaDescripción,
        FechaSolicitud: nuevaFecha,
        Estado: nuevoEstado
    }

    solicitudes.push(nuevaSolicitud);
    crearSolicitudEnTabla()

}


function llenarSolicitud(){
    var nuevaDescripción = document.getElementById("descripcion").value,
    nuevaFecha = document.getElementById("fecha").value,
    nuevoEstado = document.getElementById("estado").value;

    agregarSolicitud(nuevaDescripción, nuevaFecha, nuevoEstado);
}


function crearSolicitudEnTabla(){
    tbody = document.querySelector('#tablaSolicitudes tbody');

    tbody.innerHTML = '';

    for(var i = 0; i < solicitudes.length; i++){
        var fila = tbody.insertRow(i);
        var celdaDescripcion = fila.insertCell(0),
        celdaFecha = fila.insertCell(1),
        celdaEstado = fila.insertCell(2),
        celdaCheckBox = fila.insertCell(3);
        
        celdaDescripcion.innerHTML = solicitudes[i].Descripción;
        celdaFecha.innerHTML = solicitudes[i].FechaSolicitud;
        celdaEstado.innerHTML = solicitudes[i].Estado;

        var botonEditar = document.createElement('button');
        botonEditar.innerHTML = "Editar"
        botonEditar.value = solicitudes[i].ID;
        botonEditar.id = "botonEditar"
        botonEditar.className = "btn btn-secondary botonesDeEditar"

        var botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = "Eliminar"
        botonEliminar.value = solicitudes[i].ID;
        botonEliminar.id = "botonEliminar"
        botonEliminar.className = "btn btn-danger botonesDeEliminar"
        
        
        celdaCheckBox.appendChild(botonEditar);
        celdaCheckBox.appendChild(botonEliminar);

        tbody.appendChild(fila);

    }
}


function editarSolicitud(){
    var botonesAEditar = document.getElementsByClassName("botonesDeEditar")
    var botonesDeEliminar = document.getElementsByClassName("botonesDeEliminar")

    for (i = 0; i < botonesAEditar.length; i++) {
        botonesDeEliminar[i].style.opacity = 0;        
        botonesAEditar[i].style.opacity = 1;
    }
    
}


function eliminarSolicitud(){

    var botonesAEditar = document.getElementsByClassName("botonesDeEditar")
    var botonesDeEliminar = document.getElementsByClassName("botonesDeEliminar")

    for (i = 0; i < botonesDeEliminar.length; i++) {
        botonesAEditar[i].style.opacity = 0;        
        botonesDeEliminar[i].style.opacity = 1;
    }

}