import React from "react";
import { ScrollView, View } from "react-native";
import {
  Box,
  ButtonDefault,
  Container,
  TextButtonDefault,
} from "../../components/Spacing";
import { Subtitle, Title } from "../../components/Texts";

const Adventure: React.FC = () => {
  return (
    <Container>
      <Box>
        <Title>Veja outros Eventos</Title>
      </Box>

      <ScrollView>
        <Box mt={20}>
          <Title>Trilha Fazenda da Alma</Title>
          <Subtitle
            style={{
              marginTop: 10,
            }}
          >
            A fazenda da Alma tem corredeiras e cachoeiras para aproveitar alem
            de uma trilha super desafiadora para os admiradores.
          </Subtitle>
          <Subtitle
            style={{
              marginTop: 10,
            }}
          >
            Trilheiro conveniado a agencia Trilhas PR.
          </Subtitle>
          <Box alignItems="center" justifyContent="center" p={20}>
            <ButtonDefault onPress={() => {}}>
              <TextButtonDefault>Saiba Mais ...</TextButtonDefault>
            </ButtonDefault>
          </Box>
        </Box>

        <Box mt={20}>
          <Title>Rapel Fazenda Rodrigues</Title>
          <Subtitle
            style={{
              marginTop: 10,
            }}
          >
            Rapel com dificuldade 3 na Fazenda Rodrigues, para os amantes do
            esporte e paredoes verticais.
          </Subtitle>
          <Subtitle
            style={{
              marginTop: 10,
            }}
          >
            O instrutor de Rapel é conveniado a agencia Radical Rapel - PR{" "}
          </Subtitle>
          <Box alignItems="center" justifyContent="center" p={20}>
            <ButtonDefault onPress={() => {}}>
              <TextButtonDefault>Saiba Mais ...</TextButtonDefault>
            </ButtonDefault>
          </Box>
        </Box>

        <Box mt={20}>
          <Title>Motocross 250 CC - Fazenda Araucaria</Title>
          <Subtitle
            style={{
              marginTop: 10,
            }}
          >
            Com uma pista nova construida para o esporte, para os amantes de
            velocidade perder isso é coisa de maluco.
          </Subtitle>
          <Subtitle
            style={{
              marginTop: 10,
            }}
          >
            As motos tem locais para estacionair e pilotos profissionais irao
            acompanhar o evento alem de médicos.
          </Subtitle>
          <Box alignItems="center" justifyContent="center" p={20}>
            <ButtonDefault onPress={() => {}}>
              <TextButtonDefault>Saiba Mais ...</TextButtonDefault>
            </ButtonDefault>
          </Box>
        </Box>
      </ScrollView>
    </Container>
  );
};

export default Adventure;
