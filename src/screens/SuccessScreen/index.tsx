import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View } from "react-native";
import {
  Box,
  ButtonDefault,
  Container,
  TextButtonDefault,
} from "../../components/Spacing";
import { Title } from "../../components/Texts";

const SuccessScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Box height="80%">
        <Title
          style={{
            marginTop: "20%",
            fontSize: 30,
          }}
        >
          Tudo certo , seu pagamento foi realizado com sucesso
        </Title>

        <Box mt={50}>
          <Title
            style={{
              fontSize: 20,
            }}
          >
            Agora é só se divertir, aguardamos sua visita
          </Title>
        </Box>
      </Box>
      <Box height="20%" alignItems="center" justifyContent="center" p={20}>
        <ButtonDefault onPress={handleNext}>
          <TextButtonDefault>Voltar para Home</TextButtonDefault>
        </ButtonDefault>
      </Box>
    </Container>
  );
};

export default SuccessScreen;
