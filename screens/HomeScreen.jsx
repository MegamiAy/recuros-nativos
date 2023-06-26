import { NavigationContainer } from "@react-navigation/native";
import BatteryInfo from "./BatteryInfo";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ButtonScreen from "./ButtonScreen";
import DeviceInfoScreen from "./DeviceInfoScreen";
import MyScreenOrientation from "./MyScreenOrientation";
import Notify from "./Notify";
import ContactsInfo from "./ContactsInfo";


const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Device" component={DeviceInfoScreen} />
                <Stack.Screen name="Battery" component={BatteryInfo} />
                <Stack.Screen name="Button" component={ButtonScreen} />
                <Stack.Screen name="Orietation" component={MyScreenOrientation} />
                <Stack.Screen name="Notificação" component={Notify} />
                <Stack.Screen name="Contatos" component={ContactsInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}