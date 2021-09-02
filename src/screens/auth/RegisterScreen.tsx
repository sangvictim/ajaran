import React, { useState } from 'react';
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native';

import { useAuth } from '../../contexts/Auth';

const RegisterScreen = ({ navigation }: any) => {
    const [loading, isLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();
    const signIn = async () => {
        isLoading(true);
        await auth.signIn(username, password);
    };

    return (
        <View>
            <Text>Register Screen</Text>
            <Text>{username}</Text>
            <TextInput placeholder="username" value={username} onChangeText={(username) => setUsername(username)} />
            <TextInput placeholder="password" value={password} onChangeText={(password) => setPassword(password)} />
            {loading ? (
                <ActivityIndicator color={'#000'} animating={true} size="large" />
            ) : (
                <Button title="Sign In" onPress={signIn} />
            )}
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default RegisterScreen