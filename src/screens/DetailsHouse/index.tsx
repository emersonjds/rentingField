import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { Box, Container } from '../../components/Spacing';
import { SliderBox } from "react-native-image-slider-box";


// import { Container } from './styles';

const DetailsHouse: React.FC = ({ route }) => {
  const {
    id,
    name,
    description,
    value,
    avaliation,
    owner,
    image,
    photos,
  } = route.params;

  useEffect(() => {
    console.log(
      route.params.photos,
    )
  }, [])

  return (
    // <Container>
    <Box height="100%">
      <Box width="100%" height="40%">
        <SliderBox images={photos}
          sliderBoxHeight={300}
        />
      </Box>
      <Box height="60%">

      </Box>
    </Box>

    // </Container>
  )

}

export default DetailsHouse;