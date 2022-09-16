import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    padre: {
        flexWrap: 'wrap',
        width: '80%',
        height: '100%',
        margin: 'auto',
        backgroundColor: '#F2F2F2'
    },
    hijo: {
        width: '70%'
        , height: '90%',
        marginLeft: 200,
        marginTop: 40,
        backgroundColor: '#EFF2FB',
        borderWidth: 10, borderColor: '#848484',
        borderRadius: 20
    },
    padreTitulo1: {
        width: '50%',
        marginLeft: 250
    },
    titulo1: {
        backgroundColor: '#D8F6CE',
        paddingBottom: 3,
        marginTop: 30,
        fontSize: 25, fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10
    },
    inputs: {
        flexDirection: 'row',
        marginLeft: 270,
        marginTop: 30
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    padreBotones: {
        flexDirection: 'row',
        width: '80%',
        marginTop: 15,
        marginLeft: 265
    },
    botones: {
        backgroundColor: '#688A08',
        marginTop: 20,
        height: 30,
        width: 140,
        borderRadius: 10
    },
    textBoton: {
        color: '#EFF2FB',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        padding: 5
    }
})
export { styles }