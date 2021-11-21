import React, { useState } from 'react';
import { Button, Platform, ScrollView, View } from 'react-native';
import { Box, Container, HorizontalDivider } from '../../components/Spacing';
import DateTimePicker from '@react-native-community/datetimepicker';
import BoxHouse from '../../components/BoxHouse';
import { Title } from '../../components/Texts';


const HomeScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  // const onChange = (event: any, selectedDate: Date) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode: React.SetStateAction<string>) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };


  return (
    <Container>

      <Box width="100%">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <BoxHouse />
          <BoxHouse />
        </ScrollView>
      </Box>

      <HorizontalDivider />

      <Title>
        Melhores Ofertas
      </Title>

      <HorizontalDivider />

      <Title>
        Procurando Aventura ?!
      </Title>



      {/* <View>
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
        </View> */}


    </Container>
  );
}

export default HomeScreen;