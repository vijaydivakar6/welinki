import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            favSport: undefined,
            items2: [
                {
                    label: 'Football',
                    value: 'football',
                },
                {
                    label: 'Baseball',
                    value: 'baseball',
                },
                {
                    label: 'Hockey',
                    value: 'hockey',
                },
            ],
        };
    }



    render() {
        return (
            <View >
                <RNPickerSelect
                    placeholder={{
                        label: 'Select Category',
                        value: null,
                    }}
                    items={this.state.items2}
                    onValueChange={(value) => {
                        this.setState({
                            favSport: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={pickerSelectStyles}
                    value={this.state.favSport}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                />

            </View>
        );
    }
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