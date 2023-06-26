import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Device from "expo-device";
import * as Battery from 'expo-battery';
import Header from "../components/Header";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //   alignItems: 'center',
        // justifyContent: 'center',
    },

    texts: {
        alignItems: 'center',
    }
});

export default function ButtonScreen() {
    const [nomeDispositivo, setNomeDispositivo] = useState();
    const [memoria, setMemoria] = useState();
    const [versao, setVersao] = useState();
    const [nivelBateria, setNivelBateria] = useState();

    async function atualizarTudo() {
        Bateria()
    }

    async function Bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(Math.round(nivel * 100));
    }

    useEffect(() => {
        Bateria();
    }, [])

    function mostrar() {
        setNomeDispositivo(Device.osName);
        setMemoria(Device.totalMemory);
        setVersao(Device.osVersion);
    }
    function sumir() {
        setNomeDispositivo('');
        setMemoria('');
        setVersao('');
    }



    return (
        <View style={styles.container}>
            <Header title='Botões' />
            <Button onPress={mostrar} title="APARECER"
            >
                Atualizar
            </Button>
            <View style={styles.texts}>
                <Text>Nome do dispositivo: {nomeDispositivo}</Text>
                <Text>Memória: {memoria}</Text>
                <Text>Versão: {versao}</Text>
                <Text style={{
                    color: nivelBateria <= 100 && nivelBateria >= 80 ? 'green' : nivelBateria <= 79 && nivelBateria >= 50 ? 'yellow' : nivelBateria <= 49 && nivelBateria >= 30 ? 'orange' : 'red'
                }}>
                    {nivelBateria}%
                </Text>
            </View>
            <Button onPress={atualizarTudo} title="ATUALIZAR">
            </Button>

            <Button onPress={sumir} title="SUMIR">
            </Button>
        </View>
    )
}