import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Stop, Defs, LinearGradient } from "react-native-svg";
import { connect } from 'react-redux';

const image = {
    uri: "https://api-lunacy.icons8.com/api/assets/bdeb7da7-9350-484d-b971-37ea755f3aad/Background.png"
}


const switchtoOnboarding = () => {
    Actions.replace('onboarding')
}

function LoadingScene() {
    setTimeout(switchtoOnboarding, 3000)
    return(
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={image}
                >
                    <Image source=
                    {{uri: "https://api-lunacy.icons8.com/api/assets/7701ec52-c5aa-4e69-a6a1-4c8b48147ba3/Logo.png"}}
                    style={styles.logo}
                    />
                </ImageBackground>
            </View>
    )
}

function mapStateToProps(state){
    console.log(state)
    return {
        user: state.data
    }
}

export default connect(mapStateToProps)(LoadingScene)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column', 
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 48,
        width: 220
    }
})
