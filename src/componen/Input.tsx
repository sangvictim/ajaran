import React, { useGlobal } from 'reactn'
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
    const [global, setGlobal] = useGlobal();
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
            {global.errors[name] && (
                <Text>{global.errors[name].message}</Text>
            )}
            {/* <Text>{Object.keys((global.errors))[name]}</Text> */}
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