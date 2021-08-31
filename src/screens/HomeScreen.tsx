import React from 'react';
import { Button, Text, View } from 'react-native';

import { useAuth } from '../contexts/Auth';

export const HomeScreen = () => {
    const auth = useAuth();
    const signOut = () => {
        auth.signOut();
    };

    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Text>Nama: {auth.authData?.name}</Text>
            <Text>Email: {auth.authData?.email}</Text>
            <Text>Token: {auth.authData?.token}</Text>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};