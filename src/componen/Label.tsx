import React from 'react';
import { StyleSheet, Text } from 'react-native';
import display from '../../utils/display';

const Label = (props: any) => {
    return (
        <Text allowFontScaling={false} style={styles.textStyle}>{props.label}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: display(12)
    }
})

export default Label