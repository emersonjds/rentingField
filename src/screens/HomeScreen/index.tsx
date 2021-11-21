import React, { useState } from 'react';
import { Button, Platform, ScrollView, View } from 'react-native';
import { Box, Container, HorizontalDivider } from '../../components/Spacing';
import DateTimePicker from '@react-native-community/datetimepicker';
import BoxHouse from '../../components/BoxHouse';
import { Title } from '../../components/Texts';
import { useNavigation } from '@react-navigation/core';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../Contants';






const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleDetails = (params: any) => {
    navigation.navigate('DetailsHouse', { ...params });
  }

  const properties: Array<any> = [
    {
      id: '1',
      name: 'Recanto Rasalina',
      description: `Fazenda Rosalina, localizado as margens da Rodovia um lugar calmo e tranquilo, com várias áreas de lazer. Pensado para familias que querem passar um fim de semana na natureza
    `,
      value: 1000,
      avaliation: 4,
      owner: 'Antonio de Souza',
      image: require('../../assets/properties/f1.webp'),
      extraActivities: 'A fazenda conta com o cultivo do queijo, para amantes de queijo , os hospedes tem a possibilidade de participar de todo o processo e levar o queijo para casa como cortesia.',
      photos: [
        require('../../assets/properties/f1.webp'),
        require('../../assets/properties/f2.jpeg'),
        require('../../assets/properties/f3.jpeg'),
        require('../../assets/queijo.jpeg'),
        require('../../assets/queijo2.jpeg'),
      ],
      onPress: () => handleDetails(properties[0]),
      assets: [
        {
          id: '1',
          name: 'wifi',
          icon: <AntDesign name="wifi" size={30} color={Colors.blue_green} />,
        },
        {
          id: '2',
          name: 'tv',
          icon: <Feather name="tv" size={30} color={Colors.blue_green} />,
        },
        {
          id: '3',
          name: 'piscina',
          icon: <MaterialCommunityIcons name="pool" size={30} color={Colors.blue_green} />,
        },
        {
          id: '4',
          name: 'parked',
          icon: <MaterialIcons name="local-parking" size={30} color={Colors.blue_green} />
        }
      ]
    },
    {
      id: '2',
      name: 'Rio do Ouro',
      description: 'Fazenda Rio do Ouro, localizado na margem da Rodovia',
      value: 2000,
      avaliation: 3,
      owner: 'Antonio de Souza',
      image: require('../../assets/properties/f2.jpeg'),
      photos: [
        require('../../assets/properties/f1.webp'),
        require('../../assets/properties/f2.jpeg'),
        require('../../assets/properties/f3.jpeg'),
      ],
      onPress: () => handleDetails(properties[1]),
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