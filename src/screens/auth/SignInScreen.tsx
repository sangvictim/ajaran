import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native';
import { Screen } from 'react-native-screens';
import apiCall from '../../../utils/apiCall';
import URL from '../../../utils/url';

import { useAuth } from '../../contexts/Auth';

const SignInScreen = ({ navigation }: any) => {
    const [loading, isLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState();

    const auth = useAuth();
    const signIn = async () => {
        isLoading(true);
        await auth.signIn(username, password);
    };

    useEffect(() => {
        apiCall('GET', 'todos').then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(err);

        })

    }, [])

    return (
        <View>
            <Text>Sign In Screen</Text>
            <Text>{username}</Text>
            <TextInput placeholder="username" value={username} onChangeText={(username) => setUsername(username)} />
            <TextInput placeholder="password" value={password} onChangeText={(password) => setPassword(password)} />
            {loading ? (
                <ActivityIndicator color={'#000'} animating={true} size="large" />
            ) : (
                <Button title="Sign In" onPress={signIn} />
            )}
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
            <Text>{JSON.stringify(data)}</Text>
        </View>
    );
};

export default SignInScreen