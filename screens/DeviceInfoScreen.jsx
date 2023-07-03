import { StyleSheet, Text, View } from "react-native";
import * as Device from 'expo-device';
import Header from "../components/Header";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#c4beca",
    },
    title: {
        fontSize: 35,
        backgroundColor: '#949',
        // fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        padding: 10,
        textAlign: 'center'
    },

    info: {
        fontSize: 14,
        backgroundColor: '#5e4d85',
        color: '#fff',
        marginBottom: 10,
        padding: 10,
        textAlign: 'center'
    }
  });

export default function DeviceInfoScreen(){
    return(
        <View style={styles.container}>
            <Header title="INFORMAÇÕES SOBRE O DISPOSITIVO"/> 
            <Text style={styles.info}>
                O nome do dispositivo: {Device.deviceName}
            </Text>
            <Text style={styles.info}>
                Seu dispositivo é: {Device.brand}
            </Text>
            <Text style={styles.info}>
                O modelo do seu dispositivo: {Device.modelName} e o modeloId: {Device.modelId}
            </Text>
            <Text style={styles.info}>
                A versão do dispositovo: {Device.osVersion}
            </Text>
            <Text style={styles.info}>
                A memória total do dispositivo: {Device.totalMemory}
            </Text>
        </View>
    )
}