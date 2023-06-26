import { Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Battery from 'expo-battery';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        backgroundColor: '#949',
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

export default function Notify() {
    const [expoToken, setExpoToken] = useState('')
    const [battery, setNivelBateria] = useState();

    async function Bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
    }

    async function notificarExpo(){
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

    // async function lerNot(){
    //     const notificacoes = await Notifications.getAllScheduledNotificationsAsync()
    //     console.log(notificacoes)
    // }

    return (
        <View>
            <Header title='notificações' />
            <View>
                <Text>expo token: {expoToken} </Text>
                <Button
                    title="enviar notificações"
                    onPress={async () => await notificarExpo() } 
                />
                <Button 
                    title="ler a última notificação clicada"
                    // onPress={async () => lerNot()}
                />
                <Button title="ler notificações não clicadas" />
            </View>
            <Footer onPress/>
        </View>
    )
}