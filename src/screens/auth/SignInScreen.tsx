import React, { useState, useGlobal, createProvider } from 'reactn';
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native';

// import { AuthContext } from '../../contexts/Contexts';

const SignInScreen = ({ navigation }: any) => {
    const [loading, isLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [global, setGlobal] = useGlobal()

    const provider = createProvider();

    // const { signIn }: any = React.useContext(AuthContext);
    const signIn = (username: any, password: any) => {
        setGlobal({
            userToken: 'userToken',
            loading: false
        })
        provider.global.userToken
        isLoading(true)
        console.log('token login: ' + global.userToken);
    }
    return (
        <View>
            <Text>Sign In Screen</Text>
            <Text>{username}</Text>
            <TextInput placeholder="username" value={username} onChangeText={(username) => setUsername(username)} />
            <TextInput placeholder="password" value={password} onChangeText={(password) => setPassword(password)} />
            {loading ? (
                <ActivityIndicator color={'#000'} animating={true} size="large" />
            ) : (
                <Button title="Sign In" onPress={() => signIn(username, password)} />
            )}
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default SignInScreen