import React, { useEffect, useState } from 'reactn';
import { Button, Text, TextInput, View } from 'react-native';

import { AuthContext } from '../../contexts/Contexts';
import apiCall from '../../../utils/apiCall';
import Input from '../../componen/Input';

export const HomeScreen = () => {
    const { signOut }: any = React.useContext(AuthContext);
    const signout = () => {
        signOut.signOut()
    }
    const [data, setData] = useState()

    useEffect(() => {
        // apiCall('GET', 'master/category')
        //     .then(res => {
        //         console.log('responsi:' + JSON.stringify(res));

        //     })
        //     .catch(err => {
        //         console.log('home: ' + JSON.stringify(err));

        //     })

    }, [])
    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Text>ini hasil text input: {data}</Text>
            <Input.text label="ini label nya" value={data} onChangeText={(data: any) => setData(data)} />
            <Button title="Sign out" onPress={() => signOut()} />
        </View>
    );
};