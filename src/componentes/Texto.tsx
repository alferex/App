import React from "react";
import {Text, StyleSheet} from "react-native";

export default function Texto({children, style, titulo}: any) {
    return <Text style={[estilos.padrao, style, titulo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "justify",
        margin: 10,
        lineHeight: 25,
    }
});