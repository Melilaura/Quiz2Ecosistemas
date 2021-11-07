import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

//importar clase de las tarjetas
import {cards} from "./cards";

//alert("hello hello im working");

//inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig); 

//registrar al estudiante
function registrarEstudiante(nuevoEstudiante){
    //obtener base de datos
    const db = getDatabase();
    const dbRef = (ref(db, "estudiantes/" + nuevoEstudiante.CODE));
    set(dbRef, nuevoEstudiante);
    //escribir un nuevo estudiante
}

//agregar registro a la base
function getEstudiante(){
    const db = getDatabase();
    const dbRef = ref(db, "estudiantes");

    onValue(dbRef, (snapshot)=>{
        const data = snapshot.val();
        console.log(data);
        nuevoEstudiante(data);
    });
}

getEstudiante();

function nuevoEstudiante(data)
{
    if(data)
    {
        sinBonus.innerHTML = "";
        plataBonus.innerHTML = "";
        oroBonus.innerHTML = "";
        
        Object.keys(data).forEach((k, index) =>
        {
            const card = new cards(data[k]);
            let participacion = data[k].PARTICIPACION;     

            if(participacion <= 5){
               // data[k].ESTADO = 'sin bonus'
                sinBonus.appendChild(card.render());
            }

            if(participacion > 5 && participacion <= 10){
                //data[k].ESTADO = 'plata bonus'
                plataBonus.appendChild(card.render());
            }

            if(participacion > 10){
               // data[k].ESTADO = 'oro bonus'
                oroBonus.appendChild(card.render());
            }

            
        });        
    }

}

//texts fields
const nombreEstudiante = document.getElementById("estudianteText");
const codigoEstudiante = document.getElementById("codigoText");
const cursoEstudiante = document.getElementById("cursoText");

//boton
const matricularButton = document.getElementById("matricularButton");

//listas
const sinBonus = document.getElementById("sinBonus");
const plataBonus = document.getElementById("plataBonus");
const oroBonus = document.getElementById("oroBonus");

const guardar = (e, event) =>{
    const nuevoEstudiante = {

        NOMBRE: nombreEstudiante.value,
        CODIGO: codigoEstudiante.value,
        CURSO: cursoEstudiante.value,
        //ESTADO: "sin bonus",
        PARTICIPACION: 0
    };

    registrarEstudiante(nuevoEstudiante);

    //limpiar
    nombreEstudiante.value = '';
    codigoEstudiante.value = '';
    cursoEstudiante.value = '';

    alert("Se registró al estudiante");
}

matricularButton.addEventListener("click", guardar);

