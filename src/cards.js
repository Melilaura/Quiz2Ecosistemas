import { getDatabase, ref, push, set, onValue, update } from 'firebase/database';

export class cards{

    constructor(estudiante){

        this.estudiante = estudiante;
    }

    render() {

        //render div de los elementos
        let card = document.createElement("div");
        card.className = "card-student";

        //nombre del estudiante
        let nombre = document.createElement("p");
        nombre.className = "nombre-Card";
        nombre.innerHTML = this.estudiante.NOMBRE;

        // codigo del estudiante
        let codigo = document.createElement("p");
        codigo.className = "codigo-Card";
        codigo.innerHTML = this.estudiante.CODIGO;
        
        //curso
        let curso = document.createElement("p");
        curso.className = "curso-Card";
        curso.innerHTML = this.estudiante.CURSO;

        //participacion
        let participacion = document.createElement("p");
        participacion.className = "participacion-Card";
        participacion.innerHTML = this.estudiante.PARTICIPACION;

        //BOTONES//

        //eliminar estudiante
        let eliminarButton = document.createElement("button");

        eliminarButton.className = "eliminarButton";
        eliminarButton.innerHTML = "X";

        eliminarButton.addEventListener("click", (e, ev) =>{

                        const db = getDatabase();
                        const eliminarRef = ref(db, 'estudiantes/' + this.estudiante.CODIGO);
                        
                        set(eliminarRef, null);
                        console.log("se elimino un estudiante");
        })


        // agregar puntos
        let agregarButton = document.createElement("button");

        agregarButton.className = "agregarButton";
        agregarButton.innerHTML = "+";

      let participacionPuntos = this.estudiante.PARTICIPACION
        agregarButton.addEventListener("click", (e, ev) => {
            const db = getDatabase();
           // const estudiantePartRef = ref(db, "estudiantes/" + this.estudiante.CODIGO+"/"+  "PARTICIPACION");//
           // let participacionPuntos = this.estudiante.PARTICIPACION += 1;//
           //console.log("agregados puntos");///        
          //set(estudiantePartRef, participacionPuntos);//

          let estudiantePartRef = ref(db, "estudiantes/" + this.estudiante.CODIGO);
          participacionPuntos++;

            //Show changes
            participacion.innerHTML =  participacionPuntos;
            update(estudiantePartRef, {"PARTICIPACION":  participacionPuntos});

        });

        
        card.appendChild(nombre);
        card.appendChild(codigo);
        card.appendChild(curso);        
        card.appendChild(participacion);
        
        card.appendChild(agregarButton);
        card.appendChild(eliminarButton);

        return card;
    }
}