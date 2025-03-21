import React from "react";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold,   } from "@expo-google-fonts/montserrat";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { Lato_700Bold } from "@expo-google-fonts/lato";
import SobreNos from "./src/telas/SobreNos";
import { View } from "react-native";


export default function App() {

    const [fonteCarregada] = useFonts({"FonteRegular": Montserrat_400Regular,
                                        "FonteBold": Montserrat_700Bold,
                                      "FonteLato": Lato_700Bold});

    if (!fonteCarregada) {
        return <View/>
    }

  return <SobreNos />
}
