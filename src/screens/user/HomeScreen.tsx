import React, { useEffect, useGlobal } from 'reactn';
import { Alert, Button, Text, TextInput, View } from 'react-native';

import apiCall from '../../../utils/apiCall';
import Input from '../../componen/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeScreen = ({ navigation }: any) => {
    const [global, setGlobal] = useGlobal()

    useEffect(() => {
        // apiCall('POST', 'master/category')
        //     .then(res => {
        //         setData(res.data)
        //         console.log('responsi:' + JSON.stringify(res));

        //     }).catch(err => {
        //         console.log(JSON.stringify(err));

        //     })
    }, [])

    const signOut = async () => {
        await apiCall('POST', 'api/logout')
            .then(res => {
                AsyncStorage.clear();
                navigation.replace('SignIn')
            })
            .catch(err => {
                Alert.alert('Gagal Signout')
            })

    }
    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Text>ini hasil text input: {global.userName}</Text>
            <Button onPress={() => signOut()} title="Signout" />
        </View>
    );
};