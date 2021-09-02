import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '../screens/user/HomeScreen';
import LoginScreen from '../screens/auth/SignInScreen';
import SplashScreen from '../screens/SplashScreen';
import { useAuth } from '../contexts/Auth';

export const Router = () => {
    const { authData, loading } = useAuth();

    if (loading) {
        return <SplashScreen />;
    }
    return (
        <NavigationContainer>
            {authData ? <HomeScreen /> : <LoginScreen />}
        </NavigationContainer>
    );
};