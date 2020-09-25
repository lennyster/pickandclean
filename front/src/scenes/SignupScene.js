import Axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Actions } from 'react-native-router-flux';

export default function SignupScene() {

    const [name, onChangeName] = useState('');
    const [password, onChangePassword] = useState('');
    const [email, onChangeEmail] = useState('');
    const [telephone, onChangeNumber] = useState('');
    const url = "http://pickandclean.eu.ngrok.io/";

    const signUp = () => {
        const config = {
            headers: {'Content-Type': 'application/json'}
        }
        const body = {
            "email": email,
            "name": name,
            "password": password,
            "telephone": telephone
        }
        Axios.post(url +"api/users/", body, config)
        .then(data => {
            console.log(data.json())
        })
        .catch(err => {
            console.log(err.json())
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.section1}>
                <Text style={styles.welcomeUser}>Bienvenue</Text>
                <Text style={styles.signUpToJoin}>Inscrivez-vous pour rejoindre</Text>
            </View>
            <View style={styles.section2}>
                <TextInput style={styles.input} onChangeText={name => {onChangeName(name)}} value={name} placeholder="Nom" defaultValue={name} />
                <TextInput style={styles.input} onChangeText={email => {onChangeEmail(email)}} value={email} placeholder="E-mail" defaultValue={email} />
                <TextInput style={styles.input} secureTextEntry={true}  onChangeText={password => {onChangePassword(password)}} value={password} defaultValue={password} placeholder="Mot de passe" />
                <TextInput style={styles.input} keyboardType={'phone-pad'} onChangeText={telephone => {onChangeNumber(telephone)}} value={telephone} defaultValue={telephone} placeholder="Numéro de téléphone" />
            </View>
            <View style={styles.section3}>
                <TouchableOpacity style={styles.button1} underlayColor='none' onPress={() => signUp()}>
                    <ImageBackground
                        style={styles.background}
                        source={{uri:"https://api-lunacy.icons8.com/api/assets/f6325eea-729a-4379-9ff8-30c1224a88da/Background.png"}}
                    >
                        <Text style={styles.signUp}>Inscription</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <Text style={styles.haveAnAccountSig}>Have an account? Sign in</Text>
            </View>
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
        flexDirection: "column",
        alignItems: "center",
        height: "30%",
        justifyContent: "center"
    },
    signUpToJoin: {
        backgroundColor: "transparent",
        color: "rgba(102,102,102,1)",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
      },
    welcomeUser: {
        backgroundColor: "transparent",
        color: "rgba(0,0,0,1)",
        fontSize: 40,
        textAlign: "center",
    },
    /**
     * Section2
     */
    section2: {
        height: "50%",
        flexDirection: "column",
        alignItems: "center",
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
        height: "20%",
        borderRadius: 8,
        flexDirection: "column",
        alignItems: "center",
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
    haveAnAccountSig: {
        backgroundColor: "transparent",
        color: "rgba(254,83,152,1)",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
        position:"absolute",
        bottom: 15
    }
});