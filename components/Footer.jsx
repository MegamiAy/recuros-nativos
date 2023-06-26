import { Button, StyleSheet } from "react-native";
import { View } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Button title="Sair"/>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#888',
        paddingHorizontal: 25,
        padding: 20,
    }
});