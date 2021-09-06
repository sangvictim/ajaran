import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen
import SignInScreen from "./SignInScreen";
import ConfirmScreen from "./ConfirmScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="AuthStack"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}>
            <Stack.Screen name="Login" component={SignInScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Confirm" component={ConfirmScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack