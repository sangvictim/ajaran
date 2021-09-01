import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import useMultiState from '../../utils/useMultiState';

import { useAuth } from '../contexts/Auth';
type TStatus = 'active' | 'nonactive'
interface IState {
    name: string
    isAktive: boolean
    status: TStatus
}
export const HomeScreen = () => {
    const auth = useAuth();
    const [state, setState] = useMultiState<IState>({
        name: '',
        isAktive: true,
        status: 'active'
    })

    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Text>Nama: {auth.authData?.name}</Text>
            <Text>Email: {auth.authData?.email}</Text>
            <Text>Token: {auth.authData?.token}</Text>
            <Button title="Sign Out" onPress={() => { auth.signOut() }} />
            <TextInput onChangeText={(name) => setState({ name })} placeholder="ini inputan" style={{ borderColor: '#f0f0f0', borderWidth: 2 }} />
            <Text>
                {state.name}
            </Text>
        </View>
    );
};