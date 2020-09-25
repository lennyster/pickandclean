import Axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image, AsyncStorage } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import store from '../redux/store';

const check = () => {
    let click = 0;

    if(click % 2 == 0){
        return {uri: "https://api-lunacy.icons8.com/api/assets/a7517e1c-5a00-4bb7-9809-df63d3f6d817/Check.png"}
    }
    else {
        return {uri: "https://api-lunacy.icons8.com/api/assets/d5b17166-a760-4d74-a5eb-e2222fc92356/Check.png"}
    }
}

const facebook = {uri: "https://api-lunacy.icons8.com/api/assets/3e782648-00ba-4e8b-9d4c-31ef8461f94e/Icon.png"}

const SigninScene = (props) => {

    const [password, onChangePassword] = useState('');
    const [email, onChangeEmail] = useState('');

    const url = "http://pickandclean.eu.ngrok.io/";

    const signIn = () => {
        
        const config = {
            headers: {'Content-Type': 'application/json'}
        }
        const body = {
            "email": email,
            "password": password,
        }
        Axios.post(url +"api/auth/", body, config)
        .then(async data => {
            if (data.status == "200") {
                props.login_success(data.data)
                Actions.replace('setlocation');
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.section1}>
                <Text style={styles.welcomeUser}>Re-Bienvenue</Text>
                <Text style={styles.signUpToJoin}>Connectez-vous pour continuer</Text>
            </View>
            <View style={styles.section2}>
                <TextInput style={styles.input} onChangeText={email => {onChangeEmail(email)}} value={email} placeholder="E-mail" defaultValue={email} />
                <TextInput style={styles.input} secureTextEntry={true}  onChangeText={password => {onChangePassword(password)}} value={password} defaultValue={password} placeholder="Mot de passe" />
            </View>
            <View style={styles.section5}>
                <View style={styles.leftSection5}>
                    <Image source={check()} style={{width: 20, height: 20, top: -2}} />
                    <Text style={{textAlign: "right", marginLeft: 4, color: "rgba(102,102,102,1)", fontSize: 14, lineHeight: 20}}>Remember me</Text>
                </View>
                <View style={styles.leftSection5}>
                    <Text style={{color: "rgba(138,138,143,1)", fontSize: 14,lineHeight: 20}}>Forgot Password ?</Text>
                </View>
            </View>
            <View style={styles.section3}>
                <TouchableOpacity style={styles.button1} underlayColor='none' onPress={() => signIn()}>
                    <ImageBackground
                        style={styles.background}
                        source={{uri:"https://api-lunacy.icons8.com/api/assets/f6325eea-729a-4379-9ff8-30c1224a88da/Background.png"}}
                    >
                        <Text style={styles.signUp}>Se connecter</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity underlayColor='none' style={styles.button2}>
                    <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                        <Image 
                            source={facebook} 
                            style={{width: 16, height: 16, top: -1}} 
                        />
                        <Text style={styles.signUpFacebook}>Se connecter avec Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.section4}>
                <Text style={styles.haveAnAccountSig}>Vous n’avez pas de compte ? S'inscrire</Text>
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
        justifyContent: "center",
        flex: 2
    },
    signUpToJoin: {
        // backgroundColor: "transparent",
        color: "rgba(102,102,102,1)",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
        // position: "absolute",
        // top: 64
    },
    welcomeUser: {
        // backgroundColor: "transparent",
        color: "rgba(0,0,0,1)",
        fontSize: 40,
        textAlign: "center",
    },
    /**
     * Section2
     */
    section2: {
        flex: 2,
        // position: "absolute",
        // top: 234,
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
        // position: "absolute",
        // top: 410,
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
        backgroundColor: "transparent",
    },
    button2: {
        width: 343,
        height: 50,
        borderColor: "rgba(254,83,152,1)",
        borderRadius: 8,
        backgroundColor: "transparent",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
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
    signUpFacebook: {
        backgroundColor: "transparent",
        color: "rgba(254,83,152,1)",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
        marginLeft: 20,
    },
    /**
     * Section4
     */
    section4: {
        // position: "absolute",
        // top: 629,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
        width: "100%"
    },
    haveAnAccountSig: {
        backgroundColor: "transparent",
        color: "rgba(254,83,152,1)",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center"
    },
    /**
     * Section5
     */
    section5: {
        // position: "absolute",
        // top: 366,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 10
    },
    leftSection5: {
        width: 125,
        flexDirection: "row"
    }
});

function mapStateToProps(state){
    return {
        user: state.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        login_success: (user) => dispatch({ type: "LOGIN_SUCCESS", token: user.token })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SigninScene);