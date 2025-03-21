import React from "react";
import {Text, StyleSheet} from "react-native";

export default function Texto({children, style, titulo, tituloVideo}: any) {
    let estilo = estilos.padrao;
    if (style?.fontWeight === "bold") {
        estilo=estilos.bold;

    }

    return <Text style={[estilo, style, titulo, tituloVideo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao: {
        fontFamily: "FonteRegular",
        fontSize: 20,
        textAlign: "justify",
        lineHeight: 25,
    },
    bold: {
        fontFamily: "FonteBold",
        fontSize: 16,
        textAlign: "justify",
        lineHeight: 25,    
    }
});