import React from "react";
import { StyleSheet, View, StatusBar , Image, ScrollView } from "react-native";
import Texto from "../componentes/Texto";
import { useVideoPlayer, VideoView } from "expo-video";

export default function SobreNos() {

    const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player => {
        player.loop = true,
        player.play()
    });

    return <ScrollView style = {estilos.fundo}>
        <StatusBar />
            <Texto style={estilos.estilo_titulo}>Adega Kennedy</Texto>
            <Image source={require('../../images/logo.png')} style = {estilos.logo} resizeMode="contain"/>
            <Texto style={estilos.texto_sobre}>Av. Teresa Campanela, 165{'\n'}{'\n'}CEP: 09561-210{'\n'}{'\n'}Telefone: (11) 98504-9931</Texto>
            <Image source={require('../../images/image.jpg')} style = {estilos.estiloImageHeader} resizeMode="contain"/>
            <Texto style={estilos.texto_sobre}> Coelho </Texto>
            <VideoView player={player} style={estilos.video} allowsFullscreen allowsPictureInPicture/>
    </ScrollView>
}

const estilos = StyleSheet.create({
    fundo:{
        backgroundColor: "yellow",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    logo:{
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 100,
        borderColor: "gray",
        borderWidth: 3,
    },
    estiloImageHeader:{
        width: "100%",
        height: 200,
        alignSelf: "center",
    },
    texto_sobre:{
        color: "black",
        alignSelf: "center",
    },
    estilo_titulo:{
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        lineHeight: 25,
    },
    video:{
        width: "75%",
        height: 200,
        alignSelf: "center",
    }
})
