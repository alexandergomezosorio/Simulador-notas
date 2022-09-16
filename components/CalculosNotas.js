
import { useState } from 'react';


const CalculosNotas = () => {
    const [identificacion, setIdentificacion] = useState('');
    const [nombre, setNombre] = useState('');
    const [asignatura, setAsignatura] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [definitiva, setDefinitiva] = useState('');
    const [observacion, setObservacion] = useState('');
    const [arreglo, setArreglo] = useState([]);
    const [mensajeError, setMensajeError] = useState('');


    const buscar = () => {

        let objetoIdentificacion = arreglo.find(i => i.identificacion == identificacion);
        if (objetoIdentificacion != undefined) {
            setNombre(objetoIdentificacion.nombre);
            setAsignatura(objetoIdentificacion.asignatura);
            setNota1(objetoIdentificacion.nota1);
            setNota2(objetoIdentificacion.nota2);
            setNota3(objetoIdentificacion.nota3);
            setDefinitiva(objetoIdentificacion.promedio);
            setObservacion(objetoIdentificacion.ob);

            setMensajeError('');
        }
        else {
            setMensajeError('Usuario no existe');
        }
    }




    let promedio = (parseFloat(nota1) * .30 + parseFloat(nota2) * .35 + parseFloat(nota3) * .35).toFixed(1);
    let ob = '';

    let notas = (op) => {

        switch (op) {

            case 'calcular':

                if (identificacion != '' && nombre != '' && asignatura != '' && nota1 != '' && nota2 != '' && nota2 != '' && nota3 != '') {
                    if (promedio >= 3) {
                        ob = 'Aprobo';
                        setObservacion(ob);
                    }
                    if (promedio < 3 && promedio > 2) {
                        ob = 'Habilita';
                        setObservacion(ob);
                    }
                    if (promedio <= 2) {
                        ob = 'Reprueba';
                        setObservacion(ob);
                    }

                    setDefinitiva(promedio);
                    let objeto = { identificacion, nombre, asignatura, nota1, nota2, nota3, promedio, ob }
                    setArreglo([...arreglo, objeto]);

                }
                else {
                    setMensajeError('Todos los campos son obligatorios')
                }
                break;
            case 'limpiar':

                setIdentificacion('');
                setNombre('');
                setAsignatura('');
                setNota1('');
                setNota2('');
                setNota3('');
                setDefinitiva('');
                setObservacion('');
                setMensajeError('');

                break;

            case 'buscar':
                if (identificacion != '') {
                    buscar();
                }
                else {
                    setMensajeError('Campo: Identificacion vacio');
                }

        }
    }

}

export default CalculosNotas