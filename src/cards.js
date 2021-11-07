import { getDatabase, ref, set, onValue, push } from 'firebase/database';

export class cards
{
    constructor(estudiante)
    {
        this.estudiante = estudiante;
    }

    render()
    {

        //render div de los elementos
        let card = document.createElement("div");
        card.className = "card";

        //nombre del estudiante
        let nombre = document.createElement("p");
        nombre.className = "nombreText";
        nombre.innerHTML = this.estudiante.NOMBRE;

        // codigo del estudiante
        let codigo = document.createElement("p");
        codigo.className = "codigoText";
        codigo.innerHTML = this.estudiante.CODIGO;
        
        //curso
        let curso = document.createElement("p");
        curso.className = "cursoText";
        curso.innerHTML = this.estudiante.CURSO;

        //participacion
        let participacion = document.createElement("p");
        participacion.className = "participacionText";
        participacion.innerHTML = this.estudiante.PARTICIPACION;

        //BOTONES//

        //eliminar estudiante
        let eliminarButton = document.createElement("button");

        eliminarButton.className = "eliminarButton";
        eliminarButton.innerHTML = "X";

        eliminarButton.addEventListener("click", (e, ev) =>{

                        const db = getDatabase();
                        const dbRef = ref(db, 'estudiantes/' + this.estudiante.CODIGO);
                        console.log("se elimino un estudiante");
                        set(dbRef, null);
        })


        // agregar puntos
        let agregarButton = document.createElement("button");
        agregarButton.className = "agregarButton";
        agregarButton.innerHTML = "+";

       // let participacionPuntos = this.estudiante.PARTICIPACION;
        agregarButton.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const dbRef = ref(db, "estudiantes/" + this.estudiante.CODIGO+ "/" + "PARTICIPACION");
            //console.log(dbRef);
            const participacionPuntos = this.estudiante.PARTICIPACION += 1;

            //participacion.innerHTML = participacionPuntos;
           // update(dbRef, {"PARTICIPACION": participacionPuntos});

            //console.log(participacionPuntos);        
           set(dbRef, participacionPuntos);
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