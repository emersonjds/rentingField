import React from 'react';
import { Image, Text } from 'react-native';
import Colors from '../../Contants';

import { Box } from '../Spacing';
import { Title } from '../Texts';

const BoxHouse: React.FC = () => {
  return (
    <Box height={250} width={350} borderWidth={1} borderColor={
      Colors.gray
    }
      borderRadius={20}
      marginRight={10}
    >
      <Box height="65%">
        <Image source={require('../../assets/properties/f2.jpeg')}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      </Box>
      <Box height="35%">
        <Box
          mt={20} flexDirection="row"
          width="100%"
          justifyContent="space-between"
          pr={20}
          pl={20}
        >
          <Title>
            Hubbles
          </Title>
          <Title>
            R$ 1.000,00
          </Title>
        </Box>

        <Box
          mt={20} flexDirection="row"
          width="100%"
          justifyContent="space-between"
          pr={20}
          pl={20}
        >
          <Text>
            Avaliação
          </Text>
          <Text>
            Proprietario
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default BoxHouse;