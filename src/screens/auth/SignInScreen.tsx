import React, { useState, useGlobal } from 'reactn';
import { ActivityIndicator, Alert, Button, Text, TextInput, View } from 'react-native';
import apiCall from '../../../utils/apiCall';
import Input from '../../componen/Input';

// import { AuthContext } from '../../contexts/Contexts';

const SignInScreen = ({ navigation }: any) => {
    const [loading, isLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [global, setGlobal] = useGlobal()


    // const { signIn }: any = React.useContext(AuthContext);
    const signIn = async (email: any, password: any) => {
        isLoading(true)

        await apiCall('POST', 'api/login', { email, password })
            .then(res => {
                console.log('token login: ' + res);
            })
            .catch(err => {
                console.log('error su', err.message);

            })

        Alert.alert('xxx')

        // setTimeout(() => {
        //     setGlobal({
        //         userToken: 'userToken',
        //     })
        //     if (global.userToken) {
        //         navigation.replace('App')
        //     } else {
        //         navigation.replace('SignIn')
        //     }


        // }, 1000);


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