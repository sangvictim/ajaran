import * as React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16
                        }}>
                        You are on Details Screen
                    </Text>
                    <Button title="goto profile" onPress={() => navigation.navigate('SettingsStack', { screen: 'Profile' })} />
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    React Native Bottom Navigation
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    );
}
export default DetailsScreen;