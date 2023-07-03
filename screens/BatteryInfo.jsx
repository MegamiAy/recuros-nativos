import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import * as Battery from 'expo-battery';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c4beca",
      },
    title: {
        fontSize: 35,
        backgroundColor: '#949',
        fontWeight: 'bold',
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
    }
  });

export default function BatteryInfo({ navigation }) {
    const [nivelBateria, setNivelBateria] = useState();
    async function atualizarTudo() {
        Bateria()
    }
    async function Bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
    }
    useEffect(() => {
        Bateria();
    }, [])

    return (
        <View style={styles.container}>
            <Header title="Nível da bateria" />

            <Text style={{ textAlign: 'center', padding: 20,
                color: nivelBateria <= 100 && nivelBateria >= 80 ? 'green' : nivelBateria <= 79 && nivelBateria >= 50 ? 'yellow' : nivelBateria <= 49 && nivelBateria >= 30 ? 'orange' : 'red',
            }}> {nivelBateria} % </Text>
            <Button title="Atualizar" onPress={atualizarTudo} />
        </View>
    )
}