import React, { useState, useGlobal } from 'reactn';
import { ActivityIndicator, Alert, Button, Text, View } from 'react-native';
import apiCall from '../../../utils/apiCall';
import Input from '../../componen/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({ navigation }: any) => {
    const [loading, isLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [global, setGlobal] = useGlobal()

    const signIn = async (email: any, password: any) => {
        isLoading(true)

        await apiCall('POST', 'api/login', { email, password })
            .then(res => {
                res = res.data.data

                setGlobal({
                    userToken: res.access_token,
                    userNik: res.nik,
                    userName: res.name,
                    userEmail: res.email,
                    errors: {}
                })

                AsyncStorage.multiSet([
                    ['userToken', res.access_token],
                    ['userNik', res.nik],
                    ['userName', res.name],
                    ['userEmail', res.email]
                ], navigation.replace('App', { screen: 'HomeStack' }))
            })
            .catch(err => {
                isLoading(false)
            })

    }
    return (
        <View>
            <Text>Sign In Screen</Text>
            <Text>{email}</Text>
            <Input.text label="email" name="email" placeholder="email" value={email} onChangeText={(email: any) => setEmail(email)} />
            <Input.text label="password" name="password" placeholder="password" value={password} onChangeText={(password: any) => setPassword(password)} />
            {loading ? (
                <ActivityIndicator color={'#000'} animating={true} size="large" />
            ) : (
                <Button title="Sign In" onPress={() => signIn(email, password)} />
            )}
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default SignInScreen