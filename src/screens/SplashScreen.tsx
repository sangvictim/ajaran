import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default SplashScreen