import React from "react";
import { Card } from "react-native-paper";
import Texto from "../../componentes/Texto";
import { StyleSheet, View, StatusBar , Image, ScrollView } from "react-native";


export default function item({item:{id, nome, descricao, imagem}}:any) {
    return <ScrollView style = {estilos.fundo}>
            <View>
                <Card mode="elevated">
                    <Card.Content>
                        <Texto>{nome}</Texto>
                        <Texto>{descricao}</Texto>
                    </Card.Content>
                    <Card.Cover source={imagem} style = {estilos.estiloImageHeader}/>
                </Card>
            </View>
        </ScrollView>
}

const estilos = StyleSheet.create({
    fundo:{
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 16,
        
    },
    estiloImageHeader:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
    },
});