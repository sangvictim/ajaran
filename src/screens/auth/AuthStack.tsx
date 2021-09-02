import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen
import SignInScreen from "./SignInScreen";
import ConfirmScreen from "./ConfirmScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    )
}

export default AuthStack