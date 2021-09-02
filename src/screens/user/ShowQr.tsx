import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import NameCard from '../../../icon/name_card.jpg'

const ShowQr = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={NameCard} resizeMode="stretch" style={styles.image} >
                <View style={styles.container_qr}>
                    <QRCode value="1" size={100} />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 60
    },
    image: {
        width: '100%',
        height: 300,
    },
    container_qr: {
        display: 'flex',
        position: 'absolute',
        left: 30,
        top: 85
    }
});

export default ShowQr