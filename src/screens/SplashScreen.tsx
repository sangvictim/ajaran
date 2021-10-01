import React, { useEffect, useGlobal } from "reactn";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import display from "../../utils/display";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }: any) => {
    const [global, setGlobal] = useGlobal()

    useEffect(() => {
        async function getData() {
            let checkToken = await AsyncStorage.getItem('userToken');
            console.log(checkToken != null);

            if (checkToken != null) {
                setGlobal({
                    userToken: await AsyncStorage.getItem('userToken'),
                    userNik: await AsyncStorage.getItem('userNik'),
                    userName: await AsyncStorage.getItem('userName'),
                    userEmail: await AsyncStorage.getItem('userEmail')
                })
                navigation.replace('App', { screen: 'HomeStack' })
            } else {
                navigation.replace('SignIn')
            }
        }
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Splash Screen</Text>
            <ActivityIndicator size={display(30)} color='#1E6F5C' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3DB2FF'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: display(20),
        marginBottom: display(10)
    }
});

export default SplashScreen