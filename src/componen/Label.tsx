import React from 'react';
import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native';
import display from '../../utils/display';

const Label: React.FC<{
    label: string,
    style?: StyleProp<TextStyle>
}> = ({ label, style: propStyles }) => {
    return (
        <Text allowFontScaling={false} style={[styles.textStyle, propStyles]}>{label}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: display(12)
    }
})

export default Label