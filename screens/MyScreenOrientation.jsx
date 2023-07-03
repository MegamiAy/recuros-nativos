import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { Button } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useState } from "react";


export default function MyScreenOrientation({ navigation }) {
    const [info, setInfo] = useState('');
    const [cor, setCor] = useState('#c4beca');

    async function Padrao() {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.DEFAULT
        )
        setCor('red')
    }
    async function LadoD() {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
        )
        setCor('green')
    }
    async function LadoE() {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
        )
        setCor('green')
    }
    async function CabBaixo() {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_DOWN
        )
        setCor('orange')
    }
    async function CabCima() {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
        )
        setCor('red')
    }

    function Informar() {
        setInfo(ScreenOrientation.getOrientationAsync)
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: cor,
        }}>
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
