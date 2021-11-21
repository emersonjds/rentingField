import React, { useState } from "react";
import { Button, Platform, TouchableOpacity, View, Text } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Subtitle, Title } from "../../components/Texts";
import { Box, Container, HorizontalDivider } from "../../components/Spacing";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Contants";

const PaymentScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const [valuePerson, setValuePerson] = useState(0);
  const [personValue, setPersonValue] = useState(280);

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const handleAdd = () => {
    setValuePerson(valuePerson + 1);
  };

  const handleMinus = () => {
    if (valuePerson > 0) {
      setValuePerson(valuePerson - 1);
    }
  };

  return (
    <Container>
      <Box>
        <Title
          style={{
            marginTop: 10,
          }}
        >
          Dados da Hospedagem
        </Title>
        <Title
          style={{
            marginTop: 10,
          }}
        >
          Fazenda Ouro Fino
        </Title>
        <Subtitle
          style={{
            marginTop: 10,
          }}
        >
          Rua do Ouro, nº 416
        </Subtitle>
        <Subtitle
          style={{
            marginTop: 10,
          }}
        >
          Ouro Fino - PR
        </Subtitle>
        <Subtitle
          style={{
            marginTop: 10,
          }}
        >
          Proprietário: José da Silva
        </Subtitle>

        <Subtitle
          style={{
            marginTop: 10,
          }}
        >
          Guia para Rapel: Mauricio Souza
        </Subtitle>
        <Subtitle
          style={{
            marginTop: 10,
          }}
        >
          Agencia: Radical - Rapel PR
        </Subtitle>
      </Box>

      <Title style={{ marginBottom: 10, marginTop: 20 }}>
        Escolha a data para hospedagem
      </Title>

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

      <Box mt={20}>
        <Box>
          <Title>Forma de Pagamento</Title>
        </Box>
        <Box mt={10}>
          <Subtitle>Cartao de Credito</Subtitle>
          <Subtitle>Numero do Cartao: **** **** **** 4322</Subtitle>
        </Box>
      </Box>

      <Box mt={20}>
        <Box>
          <Title>Quantidade de Pessoas</Title>
        </Box>
        <Box mt={10} flexDirection="row" width={150}>
          <TouchableOpacity
            onPress={handleAdd}
            style={{
              height: 30,
              width: 30,
              backgroundColor: Colors.blue_green,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <AntDesign name="plus" size={18} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.gray,
            }}
          >
            {valuePerson}
          </Text>
          <TouchableOpacity
            onPress={handleMinus}
            style={{
              height: 30,
              width: 30,
              backgroundColor: Colors.blue_green,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <AntDesign name="minus" size={18} color="black" />
          </TouchableOpacity>
        </Box>

        <Box mt={20}>
          <Title>Valor</Title>
          <Subtitle>Total por pessoa: R$ {personValue},00</Subtitle>
        </Box>

        <Box mt={20}>
          <Title>
            Total a pagar: R${" "}
            <Box bg={Colors.orange}>
              <Title
                style={{
                  fontSize: 20,
                }}
              >
                {personValue * valuePerson},00
              </Title>
            </Box>
          </Title>
        </Box>
      </Box>
    </Container>
  );
};

export default PaymentScreen;
