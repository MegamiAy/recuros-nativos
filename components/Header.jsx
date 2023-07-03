import { View, StyleSheet, Text } from "react-native";
import * as Battery from 'expo-battery';
import { useEffect, useState } from "react";
import { Button } from "react-native";

export default function Header({ title }) {
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
        <View style={{
            paddingTop: 30,
            backgroundColor: nivelBateria <= 100 && nivelBateria >= 60 ? '#650193' : nivelBateria <= 59 && nivelBateria >= 30 ? 'yellow' : nivelBateria <= 29 && nivelBateria >= 5 ? 'orange' : 'red',
            paddingBottom: 5,
            paddingHorizontal: 5,
            marginBottom: 10,
        }}>
            <Text style={styles.headerTextStyle}>{title}</Text>
            <Button title="Atualizar" onPress={atualizarTudo}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    headerTextStyle: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
});
