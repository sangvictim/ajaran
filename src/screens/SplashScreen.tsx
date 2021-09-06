import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import display from "../../utils/display";

const SplashScreen = () => {
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