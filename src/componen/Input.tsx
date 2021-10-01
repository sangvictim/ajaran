import React, { getGlobal } from 'reactn'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import display from '../../utils/display';
import Label from './Label';

type typeInput = 'default' | 'numeric' | 'password'

const text: React.FC<{
    name: string,
    label: string,
    value: any,
    onChangeText: any
    placeholder?: string,
    type?: typeInput,

}> = ({ name, label, placeholder, type, value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Label label={label} />
            <TextInput
                placeholder={placeholder ? placeholder : label}
                value={value}
                onChangeText={onChangeText}
                keyboardType={type == 'password' ? 'default' : type}
                secureTextEntry={type == 'password' ? true : false}

            />
            {getGlobal().errors[name] && (
                <Text style={styles.errorLabel}>{getGlobal().errors[name]}</Text>
            )}
            {/* <Text>{Object.keys((getGlobal().errors))[name]}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: display(16)
    },
    textStyle: {
        fontSize: display(12)
    },
    errorLabel: {
        color: 'red'
    }
})

const Input = {
    text
}
export default Input