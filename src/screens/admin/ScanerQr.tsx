import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ScanerQr = () => {
    return (
        <View style={{ flex: 1 }}>
            <QRCodeScanner
                flashMode={RNCamera.Constants.FlashMode.auto}
                showMarker={true}
                onRead={onSuccess}
                markerStyle={styles.markerCustom}
                cameraStyle={{
                    height: '100%'
                }}
            />
        </View>
    );
}

function onSuccess(e) {
    Linking.
        Linking.openURL('https://jsonplaceholder.typicode.com/users/' + e.data).catch(err =>
            console.error('An error occured', err)
        );
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    },
    markerCustom: {
        width: 150,
        height: 150,
    }
});

export default ScanerQr
