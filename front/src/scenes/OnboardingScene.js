import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const image = {uri:"https://api-lunacy.icons8.com/api/assets/396f517a-37ed-4c5f-9078-9178520e5fad/background-onboardingScene-min.png"}
const image2 = {uri:"https://api-lunacy.icons8.com/api/assets/48af0749-5b34-4fd8-9d08-3095cb6bc385/Logo.png"}

function OnboardingScene() {
    return(
        <View style={styles.container}>
            <ImageBackground
                    style={styles.background}
                    source={image}
            >
            <View style={styles.section1}>
                <Image source=
                    {image2}
                    style={styles.logo}
                />
            </View>
            <View style={styles.section2}>
                <Text style={styles.textSection2}>Faites ce que vous aimez, nous prenons soin de vos vêtements.</Text>
            </View>
            <View style={styles.section3}>
                <TouchableOpacity style={styles.button1} underlayColor='none' onPress={() => Actions.replace('signup')}>
                <ImageBackground
                    style={styles.background2}
                    source={{uri:"https://api-lunacy.icons8.com/api/assets/f6325eea-729a-4379-9ff8-30c1224a88da/Background.png"}}
                >
                    <Text style={styles.signUp}>Inscription</Text>
                </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} underlayColor='none' onPress={() => Actions.replace('signin')}>
                    <View style={styles.background3}>
                        <Text style={styles.signUp}>Connexion</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.section4}>
                <Text style={styles.byJoiningYouAgree}>
                    En vous joignant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                </Text>
            </View>
            </ImageBackground>
        </View>
    )
}

function mapStateToProps(state){
    return {
        user: state.data
    }
}

export default connect(mapStateToProps)(OnboardingScene)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: "column",
      overflow: "hidden"
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
    },
    logo: {
        width: 147,
        height: 32
    },
    section1:{
        flex: 2,
        flexDirection: "column",
        justifyContent: "center"
    },
    section2:{
        flex: 1,
        width: 311,
    },
    textSection2:{
        color: "white",
        lineHeight: 28,
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
    },
    section3:{
        // position: "absolute",
        // top: 533,
        flex: 1,
        flexDirection: "row"
    },
    button1:{
        width: 147,
        height: 50,
        position: "absolute",
        right: 32,
        backgroundColor: "transparent",
    },
    button2: {
        width: 147,
        height: 50,
        position: "absolute",
        left: 32,
        backgroundColor: "transparent",
    },
    background2: {
        height: 50,
        width: 147,
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        flexDirection: "column"
    },
    background3: {
        height: 50,
        width: 147,
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,1)",
        borderRadius: 8,
        backgroundColor: "transparent",
    },
    signUp: {
        color: "rgba(255,255,255,1)",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center"
    },
    section4: {
        flex: 1,
        width: 311,
        height: 36,
    },
    byJoiningYouAgree: {
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 13,
        lineHeight: 18,
        textAlign: "center",
        flex: 1
    }
  });