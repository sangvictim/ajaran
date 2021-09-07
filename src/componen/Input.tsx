import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import display from '../../utils/display';
import Label from './Label';

type typeInput = 'default' | 'numeric' | 'password'

const text: React.FC<{
    label: string,
    value: any,
    onChangeText: any
    placeholder?: string,
    type?: typeInput,

}> = ({ label, placeholder, type, value, onChangeText }) => {
    return (
        <View>
            <Label label={label} />
            <TextInput
                placeholder={placeholder ? placeholder : label}
                value={value}
                onChangeText={onChangeText}
                keyboardType={type == 'password' ? 'default' : type}
                secureTextEntry={type == 'password' ? true : false}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: display(12)
    }
})

const Input = {
    text
}
export default Input