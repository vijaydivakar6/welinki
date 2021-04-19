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
        <Text>From Date*</Text>
        <Text> {date.toString()} </Text>
        <Button onPress={showDatepicker} title=" Enter start date" />
      </View>
      <View style={[styles.selectExpiryDate]}>
        <Text>Expiry Date*</Text>
        <Text> {date.toString()} </Text>
        <Button onPress={showDatepicker} title=" Enter expiry date" />
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
    marginTop:12
  },
  selectExpiryDate:{
    marginTop:12
  }

})
export default datePicker;