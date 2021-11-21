import React, { useState } from 'react';
import { Button, Image, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import { Box, Container, HorizontalDivider } from '../../components/Spacing';
import BoxHouse from '../../components/BoxHouse';
import { Subtitle, Title } from '../../components/Texts';
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

  const adventure = [
    {
      id: '1',
      name: 'Rapel',
      image: require('../../assets/adventure/rapel.jpeg'),
    },
    {
      id: '2',
      name: 'Trilha',
      image: require('../../assets/adventure/trilha.jpeg'),
    },
    {
      id: '3',
      name: 'Motocross',
      image: require('../../assets/adventure/moto.jpeg'),
    },
    {
      id: '4',
      name: 'Escalada',
      image: require('../../assets/adventure/escalada.jpeg'),
    },
    {
      id: '5',
      name: 'Cachoeiras',
      image: require('../../assets/adventure/cachoeira.webp'),
    }
  ]

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

      <Box height={180}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            adventure.map((item, index) => (
              <Box alignItems="center" justifyContent="center">
                <TouchableOpacity style={{
                  height: 120,
                  width: 150,
                  marginRight: 10,

                }}>
                  <Image source={item.image} style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 10,
                  }} />
                  <Subtitle style={{ marginTop: 10, alignSelf: 'center' }}>
                    {item.name}
                  </Subtitle>
                </TouchableOpacity>
              </Box>
            ))
          }

        </ScrollView>


      </Box>

    </Container>
  );
}

export default HomeScreen;