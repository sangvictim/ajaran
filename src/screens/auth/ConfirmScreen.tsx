import React, { useState } from 'react';
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native';


const ConfirmScreen = () => {
    const [loading, isLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        isLoading(true);
    };

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
        </View>
    );
};

export default ConfirmScreen