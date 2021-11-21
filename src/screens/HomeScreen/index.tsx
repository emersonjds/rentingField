import React, { useState } from 'react';
import { Button, Platform, ScrollView, View } from 'react-native';
import { Box, Container, HorizontalDivider } from '../../components/Spacing';
import DateTimePicker from '@react-native-community/datetimepicker';
import BoxHouse from '../../components/BoxHouse';
import { Title } from '../../components/Texts';
import { useNavigation } from '@react-navigation/core';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleDetails = (params: any) => {
    navigation.navigate('DetailsHouse', { ...params });
  }

  const properties = [
    {
      id: '1',
      name: 'Recanto Rasalina',
      description: `Fazenda Rosalina, localizado as margens da Rodovia um lugar calmo e tranquilo, com várias áreas de lazer. Pensado para familias que querem passar um fim de semana na natureza
      `,
      value: 1000,
      avaliation: 4,
      owner: 'Antonio de Souza',
      image: require('../../assets/properties/f1.webp'),
      photos: [
        require('../../assets/properties/f1.webp'),
        require('../../assets/properties/f2.jpeg'),
        require('../../assets/properties/f3.jpeg'),
      ],
      onPress: () => handleDetails(properties[0]),
    },
    {
      id: '2',
      name: 'Rio do Ouro',
      description: 'Fazenda Rio do Ouro, localizado na margem da Rodovia',
      value: 2000,
      avaliation: 3,
      owner: 'Antonio de Souza',
      image: require('../../assets/properties/f2.jpeg')
    }
  ]


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
          {
            properties.map((item, index) => (
              <BoxHouse key={index} {...item} />
            ))
          }
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