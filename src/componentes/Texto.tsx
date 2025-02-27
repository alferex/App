import React from "react";
import {Text, StyleSheet} from "react-native";

export default function Texto({children}: any) {
    return <Text style={estilos.estilo_texto}>{children}</Text>
}

const estilos = StyleSheet.create({
    estilo_texto: {
        color: "navy",
        fontSize: 20
    }
});