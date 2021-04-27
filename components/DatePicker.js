import React, { useState } from 'react';
import { View, Button, Platform, Text ,StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const datePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {

    const currentDate = selectedDate || date;
    
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  //   const showTimepicker = () => {
  //     showMode('time');
  //   };

  return (
    <View>
      <View style={[styles.selectStartDate]}>
        <Text style={[styles.inputTitle]}>From Date*</Text>
        <Text> {date.toString()} </Text>
        <View style={[styles.datePickStyle]}>
        <Button onPress={showDatepicker} title=" Enter start date" />
        </View>
      </View>
      <View style={[styles.selectExpiryDate]}>
        <Text style={[styles.inputTitle]}>Expiry Date*</Text>
        <Text> {date.toString()} </Text>
        <View style={[styles.datePickStyle]}>
        <Button onPress={showDatepicker} title=" Enter expiry date" />
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selectStartDate:{
    marginTop:12,
    
  },
  selectExpiryDate:{
    marginTop:12
  },
  datePickStyle:{
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding:10
  },
  inputTitle:{
    color:'#17297C',
    lineHeight:26,
    fontSize:14,
    letterSpacing:0.2,
  }

})
export default datePicker;