//localStorage.clear()

// Funciones //



function obtenerReservar(){

    const reservasLS = localStorage.getItem("reservas");

    if (reservasLS !==null){

            return JSON.parse (reservasLS)
    }

        return[];
}



function fechaDisponible (fecha){

    return !reservas.some ((elemento) =>{
        return elemento.fecha === fecha;
    })

}


// Variables Globales //

const formularioDeReserva = document.getElementById ("reserva");
let $especialista = document.getElementById('especialista')
let $dia = document.getElementById('dia')
let $horario = document.getElementById('horario')


const reservas = obtenerReservar();


let especialista = ['Obstetra', 'Pediatra', 'Clinico' ]
let dia = ['Lunes - 09:00hs', 'Lunes - 10:00hs','Lunes - 11:00hs','Lunes - 12:00hs','Martes - 09:00hs', 'Martes - 10:00hs','Martes - 11:00hs','Martes - 12:00hs','Miercoles - 09:00hs', 'Miercoles - 10:00hs','Miercoles - 11:00hs','Miercoles - 12:00hs','Jueves - 09:00hs', 'Jueves - 10:00hs','Jueves - 11:00hs','Jueves - 12:00hs']

function mostrarMedicos(arreglo, inputEspecialista) {
    let elementos = '<option selected disables>--Seleccione--</option>'

    for(let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] +'">' + arreglo[i] +'</option>'
    }

    inputEspecialista.innerHTML = elementos
}

mostrarMedicos(especialista, $especialista)

function recortar(array, inicio, fin, inputEspecialista) {
    let recortar = array.slice(inicio, fin)
    mostrarMedicos(recortar, inputEspecialista)
}

$especialista.addEventListener('change', function() {
    let valor = $especialista.value

    switch(valor) {
        case 'Obstetra':
            recortar(dia, 0, 6, $dia)
        break
        case 'Pediatra':
            recortar(dia, 6, 12, $dia)
        break
        case 'Clinico':
            recortar(dia, 12, 18, $dia)
        break
    }

    
})


// Eventos //

formularioDeReserva.addEventListener ("submit", (Event)=>{

    Event.preventDefault();
    
    // Obtenemos datos del input//

    let especialista = $especialista.value;
    let fecha = $dia.value;
    

    // Chequeamos si el horario no esta reservado //

    if (fechaDisponible(fecha)){
    
        // Se carga la reserva al array //

        reservas.push ({

        especialista: especialista,
        fecha: fecha,
        

        });

        // Cargar al Local Storage

        localStorage.setItem("reservas", JSON.stringify(reservas));

        alert ("Turno reservado con exito");

        //Limpiar selects

        $especialista.value = "";
        $dia.value = "";

        parrafo.innerHTML = "";

        mostrarTurnos()

       


    } else {

    alert ("Este día y horario ya fue reservado, por favor intente otra distinto");
    }

    
});

//listar turnos

let parrafo = "";
let concatenados= "";
let concatenadosUsuarios= "";

function mostrarTurnos (){

    let titulo = document.getElementById("listaTurnos");

    titulo.innerText = "Lista de Turnos para el Administrador:"

    const ingresoLS = JSON.parse(localStorage.getItem("reservas"));

    for (const ingreso of ingresoLS){

        concatenados = (ingreso.fecha + " - "+ ingreso.especialista)

        console.log (concatenados)

        parrafo = document.createElement("p");

        parrafo.innerHTML = concatenados;

        document.body.append(parrafo);
    }

}




