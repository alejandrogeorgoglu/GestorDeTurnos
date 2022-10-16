
/*REGISTRO DE USUARIO: COMPLETAR EL FORM CON SUS DATOS + USUARIO y CONTRASEÑA ELEGIDA. ENVIARLOS A LA BASE DE DATOS*/

//Objeto User

class Paciente {

   constructor (nombre, apellido, dni, edad, genero, mail, usuario, contraseña, historial){

      this.nombre = nombre
      this.apellido = apellido
      this.dni = dni
      this.edad = edad
      this.genero = genero
      this.mail = mail
      this.usuario = usuario
      this.contraseña = contraseña
      this.historial = historial
   }
}

//Objeto con Array

const personas = [];

personas.push (new Paciente ("Cintia", "Perez", "27.432.654", "43", "Femenino SIS", "cintialamaga@gmail.com", "qwer", "123"));
personas.push (new Paciente("Pablo", "Lopez", "28.436.832", "40", "Masculino SIS", "pablo.lopez77@gmail.com", "asdf", "1234"));
personas.push (new Paciente("Roberto", "Carlos", "28.326.832", "50", "Masculino SIS", "robertocarlos45@gmail.com", "zxcv", "12345", "Turno Cancelado por ausencia el 18/09"));


// INPUT USER  

let signUser = prompt("Ingrese su usuario")

let numberAttempts = 0;

let usuariosValido = personas.find ((nombres) => {
return nombres.usuario === signUser
})

 while  ((usuariosValido === undefined) && (numberAttempts < 3)){

    alert("Usuario incorrecta")
    signUser = prompt("Ingrese su usuario")
    usuariosValido = personas.find ((nombres) => {
    return nombres.usuario === signUser})
    numberAttempts++;

}

if(numberAttempts === 3) {
alert("Superó la cantidad de intentos, intente nuevamente más tarde")
}

// INPUT PASS 

function Pass (){

   let signPass = prompt("Ingrese la contraseña");
   let personaContraseña = personas.find ((nombres) => {
   return nombres.contraseña === signPass
   })

   let numberAttempts = 0;
   
   while ((((signUser =="qwer") && (signPass !=="123")) || ((signUser =="asdf") &&(signPass !=="1234")) || ((signUser =="zxcv") && (signPass !=="12345"))) && ((numberAttempts < 3))) {
   
       alert("Contraseña incorrecta")
       signPass = prompt("Ingrese la contraseña")
       personaContraseña = personas.find ((nombres) => {
       return nombres.contraseña === signPass})
       numberAttempts++;
   
   }
   
   if(numberAttempts === 3) {
   alert("Superó la cantidad de intentos, intente nuevamente más tarde")
   }
   
   else {
       console.log ("Contraseña correcta")
       console.log (personaContraseña)
   
   }}
   
   Pass ()


/* SELECT A MEDICAL SPECIALIST */

// Objeto Specialist
class Specialist {

   constructor (select, especialista, doctor){

      this.select = select
      this.especialista = especialista
      this.doctor = doctor
   }
}

// Objeto con Array Specialist

const especialistas = [];

especialistas.push (new Specialist ( 1, "Obstetra", "Ramon Perez"));
especialistas.push (new Specialist(2, "Pediatra", "Luis Lopez"));
especialistas.push (new Specialist(3, "Clinico", "Carlos Roger"));


let selectSpecialist =  parseInt (prompt ("Ingrese el número:  /  1:  Obstetra  /  2: Pediatra  /  3: Clinico"))

let medico = especialistas.find ((medicos) => {
   
   return medicos.select === selectSpecialist})

console.log (medico)


// CALENDARIO POR ESPECIALISTA // ARMÉ EL ARRAY DE ESTA FORMA (SIN CLASS y CONSTRUCTOR) PARA MOSTRAR OTRA MANERA DE HACERLO

const obstetra = [

{opcion:1, dia: "Martes",fecha: "12", mes: "Noviembre", hora: "15:00hs"},
{opcion:2, dia: "Jueves",fecha:"14", mes: "Noviembre", hora: "13:00hs"},
{opcion:3, dia: "Lunes", fecha: "22", mes:"Diciembre", hora: "10:00hs"},  
   
]

const pediatra = [

{opcion:1, dia: "Lunes",fecha: "11", mes: "Noviembre", hora: "18:00hs"},
{opcion:2, dia: "Sábado",fecha: "18", mes: "Noviembre", hora: "14:00hs"},
{opcion:3, dia: "Lunes",fecha: "22", mes: "Noviembre", hora: "12:00hs"},  

]

const clinico = [

{opcion:1, dia: "Martes",fecha: "12", mes: "Noviembre", hora: "09:00hs"},
{opcion:2, dia: "Jueves",fecha: "14", mes: "Noviembre", hora: "08:00hs"},
{opcion:3, dia: "Martes",fecha: "23", mes: "Noviembre", hora: "11:00hs"},  

]

// ADMINISTRADOR

// listar la disponibilidad de turnos con fecha/hora de cada especialista. 

if (selectSpecialist == 1){

const turnosDisponibleObstetra = obstetra.filter ((activos) => activos.mes)

console.log (turnosDisponibleObstetra)}

else if (selectSpecialist == 2){

   const turnosDisponiblePediatra = pediatra.filter ((activos) => activos.mes)
   
   console.log (turnosDisponiblePediatra)}

else if (selectSpecialist == 3){

   const turnosDisponibleClinico = clinico.filter ((activos) => activos.mes)
   
   console.log (turnosDisponibleClinico)}

// USUARIO:

if (selectSpecialist == 1){

   let ingresarDia = parseInt( prompt("Ingrese el número de turno deseado: /  1: Martes 12/11: 15:00hs /  2: Jueves 14/11: 13:00hs  /  3: Lunes 22/11: 10:00hs"))

   let diaIngresado = obstetra.find ((dias)=> { 
      return dias.opcion === ingresarDia

   })

   let numberAttempts1 = 0;

   while ((diaIngresado === undefined) && (numberAttempts1 < 3)){

      alert ("Opción incorrecta")
      ingresarDia = parseInt( prompt("Ingrese el número de turno deseado: /  1: Martes 12/11: 15:00hs /  2: Jueves 14/11: 13:00hs  /  3: Lunes 22/11: 10:00hs"))
      diaIngresado = obstetra.find ((dias)=> {
      return dias === ingresarDia})
      numberAttempts1++;
   }

   if(numberAttempts1 === 3) {
      alert("Superó la cantidad de intentos, intente nuevamente más tarde")
      }

   else {

      alert ("Turno asignado")

   }

   console.log (diaIngresado)

   Confirmar()
}

else if (selectSpecialist == 2){ 

   let ingresarDia = parseInt( prompt("Ingrese el número de turno deseado: /  1: Lunes 11/11: 18:00hs /  2: Sabado 18/11: 14:00hs  /  3: Lunes 22/11: 12:00hs"))

   let diaIngresado = pediatra.find ((dias)=> { 
       return dias.opcion === ingresarDia
   
   })
   
   let numberAttempts1 = 0;
   
   while ((diaIngresado === undefined) && (numberAttempts1 < 3)){
   
       alert ("Opción incorrecta")
       ingresarDia = parseInt( prompt("Ingrese el número de turno deseado: /  1: Martes 12/11: 15:00hs /  2: Jueves 14/11: 13:00hs  /  3: Lunes 22/11: 10:00hs"))
       diaIngresado = pediatra.find ((dias)=> {
       return dias === ingresarDia})
       numberAttempts1++;
   }
   
   if(numberAttempts1 === 3) {
       alert("Superó la cantidad de intentos, intente nuevamente más tarde")
       }
   
   else {
   
       alert ("Turno asignado")
   
   }

   console.log (diaIngresado)

   Confirmar()
}

else if (selectSpecialist == 3){ 

   let ingresarDia = parseInt( prompt("ngrese el número de turno deseado: /  1: Martes 12/11: 9:00hs /  2: Jueves 14/11: 8:00hs  /  3: Martes 23/11: 11:00hs"))

   let diaIngresado = clinico.find ((dias)=> { 
       return dias.opcion === ingresarDia
   
   })
   
   let numberAttempts1 = 0;
   
   while ((diaIngresado === undefined) && (numberAttempts1 < 3)){
   
       alert ("Opción incorrecta")
       ingresarDia = parseInt( prompt("Ingrese el número de turno deseado: /  1: Martes 12/11: 9:00hs /  2: Jueves 14/11: 8:00hs  /  3: Martes 23/11: 11:00hs"))
       diaIngresado = clinico.find ((dias)=> {
       return dias === ingresarDia})
       numberAttempts1++;
   }
   
   if(numberAttempts1 === 3) {
       alert("Superó la cantidad de intentos, intente nuevamente más tarde")
       }
   
   else {
   
       alert ("Turno asignado")
   
   }

   console.log (diaIngresado)

   Confirmar()

}

// FUNCION CONFIRMAR TURNO:

function Confirmar (){
   let confirm = prompt ("Para confirmar presione:  1 ///// Para cancelar o modificar presione: 2")

   if ( confirm ==="1"){
      console.log ("Turno confirmado");
   }

   else if (confirm ==="2") {

   let cancelAppointment = prompt ("Ingrese 1 para confirmar la cancelacion del turno");

   if (cancelAppointment === "1"){

      Pass ();

   } else {
      console.log("La contraseña es correcta se procede a cancelar el turno");
   }

   console.log("Turno CANCELADO")
}}













