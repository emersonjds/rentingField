import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import {
  Box,
  ButtonDefault,
  HorizontalDivider,
  TextButtonDefault,
} from "../../components/Spacing";
import { Subtitle, Title } from "../../components/Texts";

const DetailsAdventure: React.FC = ({ route }) => {
  const {
    id,
    name,
    image,
    description,
    value,
    propertieName,
    avaliation,
    owner,
    guide,
    agency,
    photos,
    assets,
    extraActivities,
    descriptionPropertie,
  } = route.params;

  const navigation = useNavigation();

  useEffect(() => {
    console.log(photos);
  }, []);

  const handleNext = () => {
    navigation.navigate("PaymentScreen");
  };
  return (
    <Box height="100%">
      <Box width="100%" height="40%">
        <SliderBox images={photos} sliderBoxHeight={300} />
      </Box>
      <Box height="40%" p={20}>
        <Box height="100%">
          <Title>{propertieName}</Title>
          <Subtitle style={{ marginTop: 20 }}>{descriptionPropertie}</Subtitle>
          <HorizontalDivider />

          <Title> Disponivel no Local</Title>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {assets.map((item, index: number) => (
              <Box key={index} mt={10}>
                <Box flexDirection="row">
                  {item.icon}
                  <Subtitle style={{ marginLeft: 10, marginTop: 5 }}>
                    {item.name}
                  </Subtitle>
                </Box>
              </Box>
            ))}
          </Box>

          <Box mt={20}>
            <Title>Atividades Extras</Title>
            <Subtitle style={{ textAlign: "left", marginTop: 10 }}>
              {extraActivities}
            </Subtitle>
          </Box>

          <Box mt={10}>
            <Title>Rapel</Title>
            <Subtitle style={{ textAlign: "left", marginTop: 10 }}>
              Os instrutores que acompanham os hospedes são de agencias
              especializadas na prática
            </Subtitle>
          </Box>
        </Box>
      </Box>
      <Box height="20%" alignItems="center" justifyContent="center" p={20}>
        <ButtonDefault onPress={handleNext}>
          <TextButtonDefault>Agendar Estadia</TextButtonDefault>
        </ButtonDefault>
      </Box>
    </Box>
  );
};

export default DetailsAdventure;
