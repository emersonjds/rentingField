import React, { useState } from "react";
import { Button, Platform, TouchableOpacity, View, Text } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Subtitle, Title } from "../../components/Texts";
import {
  Box,
  ButtonDefault,
  Container,
  TextButtonDefault,
} from "../../components/Spacing";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Contants";
import moment from "moment";
import { useNavigation } from "@react-navigation/core";

const PaymentScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const onChange2 = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date1;
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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startedDate, setStartedDate] = useState(new Date());
  const [startedDate1, setStartedDate1] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showDatePicker1 = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setStartedDate(date);
    hideDatePicker();
  };

  const handleConfirm1 = (date) => {
    setStartedDate1(date);
    hideDatePicker();
  };

  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("SuccessScreen");
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

      <Box>
        <Title
          onPress={showDatePicker}
          style={{
            marginBottom: 10,
          }}
        >
          Entrada
        </Title>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm1}
          onCancel={hideDatePicker}
        />
        <Text>{moment(startedDate).format("DD/MM/YYYY")}</Text>
        <Subtitle
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {" "}
          até{" "}
        </Subtitle>

        <Title onPress={showDatePicker1}>Saida</Title>
        <Text
          style={{
            marginTop: 10,
          }}
        >
          {moment(startedDate1).format("DD/MM/YYYY")}
        </Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </Box>

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

        <Box alignItems="center" justifyContent="center" p={20}>
          <ButtonDefault onPress={handleNext}>
            <TextButtonDefault>Finalizar Pagamento</TextButtonDefault>
          </ButtonDefault>
        </Box>
      </Box>
    </Container>
  );
};

export default PaymentScreen;
