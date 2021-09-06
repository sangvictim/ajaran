import React, { useEffect, useState } from 'reactn';
import { Button, Text, TextInput, View } from 'react-native';

import { AuthContext } from '../../contexts/Contexts';
import apiCall from '../../../utils/apiCall';

export const HomeScreen = () => {
    const { signOut }: any = React.useContext(AuthContext);
    const signout = () => {
        signOut.signOut()
    }
    const [data, setData] = useState()

    useEffect(() => {
        apiCall('GET', 'master/category')
            .then(res => {
                console.log('responsi:' + JSON.stringify(res));

            })
            .catch(err => {
                console.log('home: ' + JSON.stringify(err));

            })

    }, [])
    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Text>{data}</Text>
            <Button title="Sign out" onPress={() => signOut()} />
        </View>
    );
};