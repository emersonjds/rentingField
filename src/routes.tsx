import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";

import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import Map from "./screens/Map";
import Adventure from "./screens/Adventure";
import DetailsHouse from "./screens/DetailsHouse";
import PaymentScreen from "./screens/PaymentScreen";
import DetailsAdventure from "./screens/DetailsAdventure";

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

function Home() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name=" "
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: "#000",
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Locais"
        component={Map}
        options={{
          tabBarLabel: "Locais",
          tabBarLabelStyle: {
            color: "#000",
          },
          tabBarIcon: ({ color }) => (
            <Foundation name="map" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Aventura"
        component={Adventure}
        options={{
          tabBarLabel: "Aventura",
          tabBarLabelStyle: {
            color: "#000",
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="nature" size={24} color="black" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailsHouse"
          component={DetailsHouse}
          options={{
            headerTitle: "Detalhes",
          }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            headerTitle: "Pagar Estadia",
          }}
        />
        <Stack.Screen
          name="DetailsAdventure"
          component={DetailsAdventure}
          options={{
            headerTitle: "Aventura",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
