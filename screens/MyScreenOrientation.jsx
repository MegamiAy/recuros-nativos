import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { Button } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useState } from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c4beca",
    },

});

async function Padrao() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
    )
}
async function LadoD() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    )
}
async function LadoE() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    )
}
async function CabBaixo() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    )
}
async function CabCima() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
    )
}

export default function MyScreenOrientation({ navigation }) {
    const [info, setInfo] = useState('');

    function Informar() {
        setInfo(ScreenOrientation.getOrientationAsync)
    }

    return (
        <View style={styles.container}>
            <Header
                title="Orientation"
            />
            <Button onPress={Padrao} title="Padrão" />
            <Button onPress={LadoD} title="Direita" />
            <Button onPress={LadoE} title="Esquerda" />
            <Button onPress={CabBaixo} title="Cabeça pra baixo" />
            <Button onPress={CabCima} title="Cabeça pra cima" />
            <Button onPress={Informar} title="Informação" />
        </View>
    )
}
