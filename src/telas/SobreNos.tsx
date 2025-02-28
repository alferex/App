import React from "react";
import { StyleSheet, View, StatusBar , Image } from "react-native";
import Texto from "../componentes/Texto";


export default function SobreNos() {
    return <View style = {estilos.fundo}>
            <StatusBar />
                <Texto>Adega Kennedy</Texto>
                <Image source={require('../../logo.jfif')} style = {estilos.logo} resizeMode="contain"/>
                <Texto>Endereço: Av. Teresa Campanela, 165 - Boa Vista, São Caetano do Sul - SP, 09561-210</Texto>
                <Texto>Horário de funcionamento:</Texto>
                <Texto>Aberto ⋅ Fecha às 23:30</Texto>
                <Texto>Mais horários de funcionamento</Texto>
                <Texto>Atualizado por esta empresa há 11 semanas</Texto>
                <Texto>Telefone: (11) 98504-9931</Texto>
                <Texto>Comprar: ifood.com.br</Texto>
        </View>
}

const estilos = StyleSheet.create({
    fundo:{
        backgroundColor: "black",
    },
    logo:{
        width: 200,
        height: 200,
        alignSelf: "center",
    }
})
