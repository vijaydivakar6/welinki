import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


export default function Selector({onchange,value,label,data}) {

    return (
        <View >
        <RNPickerSelect
            placeholder={{
                label: label,
                value: value,
            }}
            items={data}
            onValueChange={(value) => onchange(value)}
            onUpArrow={() => {
                this.inputRefs.picker.togglePicker();
            }}
            onDownArrow={() => {
                this.inputRefs.company.focus();
            }}
            style={pickerSelectStyles}
            value={value}
            // ref={(el) => {
            //     this.inputRefs.picker2 = el;
            // }}
        />

    </View>
    )
}


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        color: '#3F3D56',
        borderRadius: 5,
        
    },
    placeholder: {
        color: '#3F3D56',
    },
    inputAndroid: {
        color: '#3F3D56',
    },
});