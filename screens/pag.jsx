import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Battery from "expo-battery";
import * as Device from "expo-device";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";

export default function Pag({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#c4beca",
    },
    title: {
      fontSize: 35,
      backgroundColor: "#949",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 10,
      padding: 10,
      textAlign: "center",
    },

    info: {
      fontSize: 14,
      backgroundColor: "#5e4d85",
      color: "#fff",
      marginBottom: 10,
      padding: 10,
    },
  });

  const [expoToken, setExpoToken] = useState("");
  const [tit, setTit] = useState("");
  const [desc, setDesc] = useState("");

  async function notificarExpo() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: tit,
        subtitle: desc,
        body: desc,
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }

  return (
    <View style={styles.container}>
      <Header title="Notificação agendada" />
      <View>
        <Text>expo token: {expoToken} </Text>
        <TextInput label="Titulo" value={tit} onChangeText={setTit} />
        <TextInput label="Descrição" value={desc} onChangeText={setDesc} />
        <Button title="Agendar" onPress={notificarExpo} />
      </View>
    </View>
  );
}
