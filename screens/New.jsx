import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import Header from '../components/Header';

export default function New({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c4beca',
    },
    title: {
      fontSize: 35,
      backgroundColor: '#949',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
      padding: 10,
      textAlign: 'center',
    },
    info: {
      fontSize: 14,
      backgroundColor: '#5e4d85',
      color: '#fff',
      marginBottom: 10,
      padding: 10,
    },
  });

  const [expoToken, setExpoToken] = useState('');
  const [notificationColor, setNotificationColor] = useState('#ff0000');

  useEffect(() => {
    const interval = setInterval(() => {
      setNotificationColor(generateRandomColor());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  async function notificarExpo() {
    const notificationContent = {
      title: 'OHMAGA',
      subtitle: 'img',
      body: 'img',
      backgroundColor: notificationColor,
      color: notificationColor,
    };

    const token = await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: { seconds: 4 },
    });

    setExpoToken(token);
  }

  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <View style={{ flex: 1,  backgroundColor: notificationColor }}>
        <Header title="SUP" />
      <View>
        <Text style={{ color: '#fff', textAlign: 'center', backgroundColor: "#000", padding: 8, }}>ID da notificação: {expoToken}</Text>
        <View style={{ backgroundColor: notificationColor, padding: 10, marginBottom: 10 }}>
          <Text style={{ color: '#fff', textAlign: 'center', backgroundColor: "#000", padding: 8, }}>BACK-RGB</Text>
        </View>
        <Button title="Gerar notificação" onPress={async () => await notificarExpo()} />
      </View>
    </View>
  );
}
