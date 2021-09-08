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
        apiCall('POST', 'master/category')
            .then(res => {
                setData(res.data)
                console.log('responsi:' + JSON.stringify(res));

            }).catch(err => {
                console.log(JSON.stringify(err));

            })
    }, [])
    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Text>ini hasil text input: {data}</Text>
            <Input.text name="product_category_code" label="ini label nya" value={data} onChangeText={(data: any) => setData(data)} />
            <Input.text name="product_category_name" label="ini label nya" value={data} onChangeText={(data: any) => setData(data)} />
            <Button title="Sign out" onPress={() => signOut()} />
        </View>
    );
};