import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Lato_700Bold } from "@expo-google-fonts/lato";
import SobreNos from "./src/telas/SobreNos";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Produtos from "./src/telas/Produtos";
import ListaDeDesejos from "./src/telas/ListaDeDesejos";
import Perfil from "./src/telas/Perfil";

import Produto from "./src/telas/Produtos";
import MockProdutos from "./src/mocks/listaProduto";

function MenuProdutos() {
  return <Produto {...MockProdutos}/>
}

// Configuração do Menu
const Tab = createBottomTabNavigator();
function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Sobre Nós") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Produtos") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === "Lista de Desejos") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Sobre Nós" component={SobreNos} />
      <Tab.Screen name="Produtos" component={MenuProdutos} />
      <Tab.Screen name="Lista de Desejos" component={SobreNos} />
      <Tab.Screen name="Perfil" component={SobreNos} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    FonteRegular: Montserrat_400Regular,
    FonteBold: Montserrat_700Bold,
    FonteLato: Lato_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return <NavigationContainer>
      <Menu />
    </NavigationContainer>
}
