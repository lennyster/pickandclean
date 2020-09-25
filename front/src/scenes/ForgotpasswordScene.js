import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, ImageBackground } from "react-native";

export default function ForgotpasswordScene() {
    return(
        <View style={styles.container}>
            <View style={styles.section1}>
                <Text style={styles.welcomeUser}>Mot de passe oublié</Text>
                <Text style={styles.signUpToJoin}>Entrez votre e-mail et recevez un lien pour réinitialiser votre mot de passe.</Text>
            </View>
            <View style={styles.section2}>
                <TextInput style={styles.input} value="E-mail" />
            </View>
            <View style={styles.section3}>
                <TouchableHighlight style={styles.button1}>
                <ImageBackground
                    style={styles.background}
                    source={{uri:"https://api-lunacy.icons8.com/api/assets/f6325eea-729a-4379-9ff8-30c1224a88da/Background.png"}}
                >
                    <Text style={styles.signUp}>Envoyer</Text>
                </ImageBackground>
                </TouchableHighlight>
            </View>
            {/* <View style={styles.section4}>
                <Text style={styles.haveAnAccountSig}>Have an account? Sign in</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    /**
     * Section1
     */
    section1: {
        marginTop: 100,
        flexDirection: "column",
        alignItems: "center",
        flex: 1
    },
    signUpToJoin: {
        backgroundColor: "transparent",
        color: "rgba(102,102,102,1)",
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        position: "absolute",
        top: 64,
        width: 278
      },
    welcomeUser: {
        backgroundColor: "transparent",
        color: "rgba(0,0,0,1)",
        fontSize: 30,
        textAlign: "center",
    },
    /**
     * Section2
     */
    section2: {
        flex: 1,
        position: "absolute",
        top: 234,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 0,
        marginHorizontal: "auto",
        width: "100%"
    },
    input: {
        width: 343,
        height: 50,
        borderRadius: 8,
        backgroundColor: "rgba(239,239,244,1)",
        paddingLeft: 14,
        marginBottom: 8
    },
    input1: {
        width: 343,
        height: 50,
        borderRadius: 8,
        backgroundColor: "rgba(239,239,244,1)",
        paddingLeft: 14
    },
    /**
     * Section3
     */
    section3: {
        position: "absolute",
        top: 310,
        flex: 1,
        borderRadius: 8,
        width: "100%",
        marginVertical: 0,
        marginHorizontal: "auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    button1: {
        width: 343,
        height: 50,
        borderRadius: 8,
    },
    background: {
        height: 50,
        width: 343,
        borderRadius: 8,
        backgroundColor: "transparent",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    signUp: {
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
    },
    /**
     * Section4
     */
    section4: {
        position: "absolute",
        top: 629,
        marginVertical: 0,
        marginHorizontal: "auto",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "100%"
    },
    haveAnAccountSig: {
        backgroundColor: "transparent",
        color: "rgba(254,83,152,1)",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center"
    }
});
