import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { Box, ButtonDefault, Container, TextButtonDefault } from '../../components/Spacing';
import { SliderBox } from "react-native-image-slider-box";
import { Subtitle, Title } from '../../components/Texts';

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

  return (
    // <Container>
    <Box height="100%">
      <Box width="100%" height="40%">
        <SliderBox images={photos}
          sliderBoxHeight={300}
        />
      </Box>
      <Box height="40%" p={20}>
        <Box height="100%" bg="orange">
          <Title>
            {name}
          </Title>
          <Subtitle>
            {description}
          </Subtitle>
        </Box>

      </Box>
      <Box height="20%" alignItems="center" justifyContent="center" p={20}>
        <ButtonDefault>
          <TextButtonDefault>
            Ir para pagamento
          </TextButtonDefault>
        </ButtonDefault>
      </Box>
    </Box>

    // </Container>
  )

}

export default DetailsHouse;