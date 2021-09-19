import React, { useEffect, useState } from 'reactn';
import { Button, Text, TextInput, View } from 'react-native';

import apiCall from '../../../utils/apiCall';
import Input from '../../componen/Input';

export const HomeScreen = () => {
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
        </View>
    );
};