/*REGISTRO DE USUARIO: COMPLETAR EL FORM CON SUS DATOS + USUARIO y CONTRASEÑA ELEGIDA. ENVIARLOS A LA BASE DE DATOS*/


/*INPUT USER*/

const user1 = () =>{

const user = "asdf"

let signUser = prompt("Ingrese su usuario")

let numberAttempts1 = 0;

while( (user !== signUser) && (numberAttempts1 < 3)) {
   
alert("Ingresó un usuario incorrecto");

signUser = prompt("Ingrese su usuario");

numberAttempts1++;

}

if(numberAttempts1 === 3) {
   alert("Superó la cantidad de intentos, intente nuevamente más tarde");
 
  
 } else {
    console.log("El usuario es: " + signUser);
 
 }}

 user1();
  

/*INPUT PASS*/

const pass1 = ()=>{

const userPass = "123456";

let signPass = prompt("Ingrese la contraseña");
let numberAttempts = 0;

while( (userPass !== signPass) && (numberAttempts < 5)) {
   
alert("Ingresó la contraseña incorrecta");

signPass = prompt("Ingrese la contraseña");

numberAttempts++;
}

if(numberAttempts === 5) {
   alert("Superó la cantidad de intentos, intente nuevamente más tarde");
 } else {
    console.log("La contraseña es correcta");
 }}

 pass1 ();
  

 /* SELECT A MEDICAL SPECIALIST */


let especialist = "";
    
while(especialist === "") {
    
   let especialistSelect = prompt("Seleccione la especialidad: Clinico / Pediatra / Traumatologo / Obstetra");
 
   switch(especialistSelect) {
   
      case "clinico":
      case "Clinico":
      case "CLINICO":
         especialist = "Clinico";
            break;
   
      case "pediatra":
      case "Pediatra":
      case "PEDIATRA":
         especialist = "Pediatra";
               break;

      case "traumatologo":
      case "Traumatologo":
      case "TRAUMATOLOGO":
         especialist = "Traumatologo";
            break;

      case "obstetra":
      case "Obstetra":
      case "OBSTETRA":
         especialist = "Obstetra";
               break;
   
      default:
            alert("Ingresó una especialidad que no está contemplada, intente nuevamente");
         break;
   }
}
    
alert("La especialidad seleccionada es: " + especialist);

console.log ("Especialidad: " + especialist);


/* SELECT AN APPOINTMENT*/ 

if (especialist === "Obstetra"){

   let selectAppointment = "";

   while (selectAppointment === ""){

      let appointment = prompt (" Ingrese 1, 2 o 3 para elegir fechas y horarios disponibles: 1 = Viernes 25/10/2022: 14:00hs / 2 = Sabado 26/10/2022: 15:00hs / 3 = Martes 29/10/2022: 16:00hs.")

      switch (appointment){

         case "1":
            selectAppointment = "Viernes 25/10/2022: 14:00hs";
            break

         case "2":
            selectAppointment = "Sabado 26/10/2022: 15:00hs";
            break

         case "3":
            selectAppointment = "Martes 29/10/2022: 16:00hs.";
            break

         default:
            alert("Ingresó un número que no está contemplada, intente nuevamente");
            break;
      }
   }
   alert("Ud. tiene un turno asignado para el: " + selectAppointment);
   let confirm = prompt ("Para confirmar presione:  1 ///// Para cancelar o modificar presione: 2")

   if ( confirm ==="1"){
      alert ("Turno confirmado: " + especialist + " :" + selectAppointment);
   }

   else if (confirm ==="2") {
   }

   console.log ("Turno asignado: " + selectAppointment);

   /* CANCEL APPOINTMENT */

   let cancelAppointment = prompt ("Ingrese: 1 para cancelar su turno");

   if (cancelAppointment === "1"){

      pass1 ();

   } else {
      console.log("La contraseña es correcta se procede a cancelar el turno");
   }

   console.log("Turno CANCELADO: " + especialist + " - " +selectAppointment)
}


else if ( especialist === "Clinico") {

   let selectAppointment = "";

   while (selectAppointment === ""){

      let appointment = prompt (" Ingrese 1, 2 o 3 para elegir fechas y horarios disponibles: 1 = Martes 22/10/2022: 14:00hs / 2 = Jueves 24/10/2022: 15:00hs / 3 = Lunes 28/10/2022: 16:00hs.")

      switch (appointment){

         case "1":
            selectAppointment = "Martes 22/10/2022: 14:00hs";
            break

         case "2":
            selectAppointment = "Jueves 24/10/2022: 15:00hs";
            break

         case "3":
            selectAppointment = "Lunes 28/10/2022: 16:00hs.";
            break

         default:
            alert("Ingresó un número que no está contemplada, intente nuevamente");
            break;
      }
   }
   alert("Ud. tiene un turno asignado para el: " + selectAppointment);
   let confirm = prompt ("Para confirmar presione:  1 ///// Para cancelar o modificar presione: 2")

   if ( confirm ==="1"){
      alert ("Turno confirmado: " + especialist + " :" + selectAppointment);
   }

   else if (confirm ==="2") {

   }
   console.log ("Turno asignado: " + selectAppointment);

      let cancelAppointment = prompt ("Ingrese: 1 para cancelar su turno");
   
      if (cancelAppointment === "1"){
   
         pass1 ();
   
      } else {
         console.log("La contraseña es correcta se procede a cancelar el turno");
      }
   
         console.log("Turno CANCELADO: " + especialist + " - " +selectAppointment)
}
   
else if (especialist === "Pediatra"){

   let selectAppointment = "";

   while (selectAppointment === ""){

      let appointment = prompt (" Ingrese 1, 2 o 3 para elegir fechas y horarios disponibles: 1 = Viernes 25/10/2022: 14:00hs / 2 = Sabado 26/10/2022: 15:00hs / 3 = Martes 29/10/2022: 16:00hs.")

      switch (appointment){

         case "1":
            selectAppointment = "Viernes 25/10/2022: 14:00hs";
            break

         case "2":
            selectAppointment = "Sabado 26/10/2022: 15:00hs";
            break

         case "3":
            selectAppointment = "Martes 29/10/2022: 16:00hs.";
            break

         default:
            alert("Ingresó un número que no está contemplada, intente nuevamente");
            break;
      }
   }
   alert("Ud. tiene un turno asignado para el: " + selectAppointment);
   let confirm = prompt ("Para confirmar presione:  1 ///// Para cancelar o modificar presione: 2")

   if ( confirm ==="1"){
      alert ("Turno confirmado: " + especialist + " :" + selectAppointment);
   }

   else if (confirm ==="2") {

   }
   console.log ("Turno asignado: " + selectAppointment);

   let cancelAppointment = prompt ("Ingrese: 1 para cancelar su turno");

   if (cancelAppointment === "1"){

      pass1 ();

   } else {
      console.log("La contraseña es correcta se procede a cancelar el turno");
   }

   console.log("Turno CANCELADO: " + especialist + " - " +selectAppointment)
}

else if (especialist === "Traumatologo"){

   let selectAppointment = "";

   while (selectAppointment === ""){

      let appointment = prompt (" Ingrese 1, 2 o 3 para elegir fechas y horarios disponibles: 1 = Viernes 25/10/2022: 14:00hs / 2 = Sabado 26/10/2022: 15:00hs / 3 = Martes 29/10/2022: 16:00hs.")

      switch (appointment){

         case "1":
            selectAppointment = "Viernes 25/10/2022: 14:00hs";
            break

         case "2":
            selectAppointment = "Sabado 26/10/2022: 15:00hs";
            break

         case "3":
            selectAppointment = "Martes 29/10/2022: 16:00hs.";
            break

         default:
            alert("Ingresó un número que no está contemplada, intente nuevamente");
            break;
      }
   }

   alert("Ud. tiene un turno asignado para el: " + selectAppointment);
   let confirm = prompt ("Para confirmar presione:  1 ///// Para cancelar o modificar presione: 2")

   if ( confirm ==="1"){
      alert ("Turno confirmado: " + especialist + " :" + selectAppointment);
   }

   else if (confirm ==="2") {

   }

   console.log ("Turno asignado: " + selectAppointment);

   let cancelAppointment = prompt ("Ingrese: 1 para cancelar su turno");

   if (cancelAppointment === "1"){

      pass1 ();

   } else {
      console.log("La contraseña es correcta se procede a cancelar el turno");
   }

   console.log("Turno CANCELADO: " + especialist + " - " +selectAppointment)
}

/*ADMINISTRADOR

- listar los turnos activos que tienen los medicos con fecha/hora paciente.

- listar el historial de trunos por paciente.

*/







  

















