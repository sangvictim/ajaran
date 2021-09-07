import React from 'react'
import { Button, TextInput, View } from 'react-native';
import Label from './Label';

const text = (props: any) => {
    return (
        <View>
            <Label label={props.title} />
            <TextInput placeholder={props.placeholder ? props.placeholder : props.title} />
        </View>
    )
}

const Input = {
    text
}
export default Input