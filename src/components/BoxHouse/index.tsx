import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import Colors from '../../Contants';

import { Box } from '../Spacing';
import { Title } from '../Texts';

interface BoxHouseProps {
  id?: number;
  name?: string;
  description?: string;
  value?: number;
  avaliation?: number;
  owner?: string;
  image?: string;
  onPress?: () => void;
}

const BoxHouse: React.FC<BoxHouseProps> = ({
  id,
  name,
  description,
  value,
  avaliation,
  owner,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 350,
        height: 250,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 20,
        marginRight: 10,
      }}
      onPress={onPress}
    >

      <Box height="65%">
        <Image source={image}
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
            {name}
          </Title>
          <Title>
            R$ {value}
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
            {avaliation}
          </Text>
          <Text>
            {owner}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}

export default BoxHouse;