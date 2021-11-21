import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { Box, ButtonDefault, Container, HorizontalDivider, TextButtonDefault } from '../../components/Spacing';
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
    assets,
    extraActivities
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
        <Box height="100%" >
          <Title>
            {name}
          </Title>
          <Subtitle style={{ marginTop: 20 }}>
            {description}
          </Subtitle>
          <HorizontalDivider />

          <Title> Disponivel no Local</Title>

          <Box flexDirection="row" justifyContent="space-between" flexWrap="wrap">
            {
              assets.map((item, index: number) => (
                <Box key={index} mt={10} >
                  <Box flexDirection="row" >
                    {
                      item.icon
                    }
                    <Subtitle style={{ marginLeft: 10, marginTop: 5 }}>
                      {item.name}
                    </Subtitle>
                  </Box>
                </Box>
              ))
            }
          </Box>

          <Box mt={20}>
            <Title>
              Atividades Extras
            </Title>
            <Subtitle style={{ textAlign: 'left', marginTop: 10 }}>
              {extraActivities}
            </Subtitle>
          </Box>
        </Box>

      </Box>
      <Box height="20%" alignItems="center" justifyContent="center" p={20}>
        <ButtonDefault>
          <TextButtonDefault>
            Ir para pagamento
          </TextButtonDefault>
        </ButtonDefault>
      </Box>
    </Box >

    // </Container>
  )

}

export default DetailsHouse;