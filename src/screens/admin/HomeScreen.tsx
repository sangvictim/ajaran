import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import useMultiState from '../../utils/useMultiState';

// import { useAuth } from '../contexts/Auth';

import apiCall from '../../utils/apiCall'
import URL from '../../utils/url';

type TStatus = 'active' | 'nonactive'
interface IState {
    isAktive: boolean
    status: TStatus
}
export const HomeScreen = () => {
    // const auth = useAuth();
    const [state, setState] = useMultiState<IState>({
        isAktive: true,
        status: 'active'
    })

    return (
        <View>
            <Text>HOME SCREEN</Text>
            {/* <Text>Token: {auth.authData?.token}</Text> */}
            {/* <Button title="Sign Out" onPress={() => { auth.signOut() }} /> */}
        </View>
    );
};