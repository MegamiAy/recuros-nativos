import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Battery from 'expo-battery';
import * as Device from 'expo-device';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import MyScreenOrientation from "./MyScreenOrientation";
import BatteryInfo from "./BatteryInfo";

export default function Notify({ navigation }) {
    const [expoToken, setExpoToken] = useState('')
    const [battery, setNivelBateria] = useState();

    const ultimaNotificacao = Notifications.useLastNotificationResponse();

    async function Bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
    }

    async function notificarExpo() {
        await Bateria();
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Bateria",
                subtitle: "subtitulo",
                body: "Nível da bateria: " + battery + "%",
            },
            trigger: { seconds: 1 }
        })
        setExpoToken(token)
    }

    async function displayExpo() {
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Dispositivo",
                subtitle: "subtitulo",
                body: Device.deviceName,
            },
            trigger: { seconds: 1 }
        })
        setExpoToken(token)
    }


    async function exibirAlerta() {
        alert(ultimaNotificacao)
        console.log(ultimaNotificacao)
    }

    useEffect(() => {
        exibirAlerta()
    }, [ultimaNotificacao])

    async function lerNotify() {
        alert(ultimaNotificacao.notification.request.content.body)
    }

    async function notificacaoN() {
        const exemplo = await Notifications.getLastNotificationResponseAsync();
        // console.log(exemplo.notification.request.identifier);
        if (exemplo.notification.request.identifier == expoToken) {
            navigation.navigate("Battery");
        } else {
            alert("Notificação Errada");
        }
    }

    return (
        <View>
            <Header title='notificações' />
            <View>
                <Text>expo token: {expoToken} </Text>
                <Button
                    title="Nível de Bateria"
                    onPress={async () => await notificarExpo()}
                />
                <Button
                    title="Dispositivo"
                    onPress={async () => await displayExpo()}
                />
                <Button
                    title="ler notificação anterior"
                    onPress={async () => lerNotify()}
                />
                <Button title="notificação troca de tela"
                    onPress={async () => notificacaoN()}
                />
            </View>
            <Footer onPress />
        </View>
    )
}