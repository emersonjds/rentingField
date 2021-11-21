import React, { useState } from 'react';
import { Button, Platform, View } from 'react-native';
import { Box, Container, HorizontalDivider } from '../../components/Spacing';
import DateTimePicker from '@react-native-community/datetimepicker';


const HomeScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  return (
    <Container>
      <Box>
        <View>
          <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              minimumDate={new Date()}
              placeholderText="Select a date"
              textColor="red"
              compact
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </Box>
      <HorizontalDivider />
    </Container>
  );
}

export default HomeScreen;