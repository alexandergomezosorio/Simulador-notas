import { useState } from 'react';
import { Text,TextInput,TouchableOpacity, View } from 'react-native';

import { styles } from './assets/style/myStyle';

export default function App() {

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


  return (

    <View style={styles.padre}>
      <View style={styles.hijo}>
        <View style={styles.padreTitulo1}>
          <Text style={styles.titulo1}>Sistema de Notas</Text>
        </View>
        <TextInput></TextInput>

        <View style={{ flexDirection: 'column' }}>
          <View style={styles.inputs}>
            <Text style={[styles.text, { marginRight: 140 }]}>Identificación</Text>
            <TextInput
              placeholder='___________________________'
              onChangeText={identificacion => setIdentificacion(identificacion)}
              value={identificacion}>
            </TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={[styles.text, { marginRight: 182 }]}>Nombres</Text>
            <TextInput
              placeholder='___________________________'
              onChangeText={nombre => setNombre(nombre)}
              value={nombre}>
            </TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={[styles.text, { marginRight: 165 }]}>Asignatura</Text>
            <TextInput
              placeholder='___________________________'
              onChangeText={asignatura => setAsignatura(asignatura)}
              value={asignatura}>
            </TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={[styles.text, { marginRight: 45 }]}>Nota momento 1 (30%)</Text>
            <TextInput
              placeholder='___________________________'
              onChangeText={nota1 => setNota1(nota1)}
              value={nota1}>
            </TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={[styles.text, { marginRight: 45 }]}>Nota momento 2 (35%)</Text>
            <TextInput
              placeholder='___________________________'
              onChangeText={nota2 => setNota2(nota2)}
              value={nota2}>
            </TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={[styles.text, { marginRight: 45 }]}>Nota momento 3 (35%)</Text>
            <TextInput
              placeholder='___________________________'
              onChangeText={nota3 => setNota3(nota3)}
              value={nota3}>
            </TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={[styles.text, { marginRight: 175 }]}>Definitiva</Text>
            <Text>{definitiva}</Text>
          </View>

          <View style={styles.inputs}>
            <Text style={[styles.text, { marginRight: 150 }]}>Observación</Text>
            <Text>{observacion}</Text>

          </View>

          <View style={styles.padreBotones}>
            <TouchableOpacity style={[styles.botones, { marginRight: 10 }]}
              onPress={() => notas('calcular')}>
              <Text style={styles.textBoton}>Calcular/Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botones, { marginRight: 10 }]}
              onPress={() => notas('limpiar')}>
              <Text style={styles.textBoton}>Limpiar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botones}
              onPress={() => notas('buscar')}>
              <Text style={styles.textBoton}>Buscar</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: 'red', fontSize: 20, marginLeft: 330, marginTop: 40 }}>{mensajeError}</Text>
        </View>

      </View>
    </View>
  );
}


