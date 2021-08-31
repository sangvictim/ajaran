import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";



const LoginScreen = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" onPress={() => signIn({ username, password })} />
        </View>
    )
}

export default LoginScreen