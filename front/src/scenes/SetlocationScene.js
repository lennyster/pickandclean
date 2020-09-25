import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, Image, AsyncStorage, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';


const logo = {uri: "https://api-lunacy.icons8.com/api/assets/d6064dcc-a182-4c02-97f1-f0646be50d79/Icon%20Marker.png"};
const image = {uri:"https://api-lunacy.icons8.com/api/assets/396f517a-37ed-4c5f-9078-9178520e5fad/background-onboardingScene-min.png"}

function Setlocation() {
    return(
        <View style={styles.container}>
            <View style={styles.section1}>
                <Image source={logo} style={{width: 52, height: 64}}/>
            </View>
            <View style={styles.section2}>
                <Text style={{color: "black", fontWeight: "bold", fontSize: 40}}>Hello, nice to meet you!</Text>
                <Text style={{color: "#666666", fontWeight: "400", fontSize: 17, width: "90%", marginTop: 20}}>Set your location to start find services around you</Text>
            </View>
            <View style={styles.section3}>
                <TouchableOpacity style={styles.button1}>
                    <ImageBackground
                        style={styles.background}
                        source={{uri:"https://api-lunacy.icons8.com/api/assets/f6325eea-729a-4379-9ff8-30c1224a88da/Background.png"}}
                    >
                        <Image style={{height: 16, width: 16}} source={{uri: "https://api-lunacy.icons8.com/api/assets/e4cf9752-4d60-4258-856f-7a36d3a9da20/Icon%20Location.png"}} />
                        <Text style={styles.currentLocation}>Se géolocaliser</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <Text style={{width: 285, fontSize: 13, color: "#8A8A8F", marginTop: 16, lineHeight: 18, textAlign: "left"}}>Nous accédons à votre position seulement lorsque vous utilisez l'application</Text>
                <Text style={{ color: "#FE5398", fontSize: 17, lineHeight: 22, marginTop: 40, width: 218, textAlign: "left" }} onPress={() => Actions.replace('choosescene')}>Ou définissez votre position manuellement</Text>
            </View>
        </View>
    )
}

function mapStateToProps(state){
    console.log(state)
    return {
        user: state.data
    }
}

export default connect(mapStateToProps)(Setlocation);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingRight: "10%",
      paddingLeft: "10%"
    },
    section1: {
        marginTop: 70,
        height: "15%",
        flexDirection: "row",
        alignItems: "center"
    },
    section2: {
        marginTop: 10,
        height: "25%",
        flexDirection: "column",
    },
    section3: {
        height: "10%",
        marginTop: 35,
    },
    background: {
        height: 50,
        width: 287,
        borderRadius: 8,
        backgroundColor: "transparent",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    button1: {
        width: 287,
        height: 50,
        borderRadius: 8,
        backgroundColor: "transparent",
    },
    currentLocation: {
        backgroundColor: "transparent",
        color: "white",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
        marginLeft: 20,
    },
})
