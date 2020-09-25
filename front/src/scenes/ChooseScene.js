import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AsyncStorage, StyleSheet, Text, View, FlatList } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { AppLoading } from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function ChooseScene() {


    // useEffect(() => {
    //     async function location ()
    //     {
    //         const { status } = Permissions.askAsync(Permissions.LOCATION);
    //         if (status !== 'granted') {
    //             setMessage('PERMISSION NOT GRANTED');
    //         }
    //         const location = await Location.getCurrentPositionAsync();
    //         setLocation(location.coords)
    //         setDisplay(true)
    //     }
    //     location();
    // });

    // if (!display) {
    //    return( 
    //    <AppLoading /> 
    // )}



    return(
        <View style={styles.container}>
            {/* <Text>{location.latitude}</Text> */}
            <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyDguFqu_sl5qbBxhci9X_lEzqt5dlumocM',
              language: 'fr',
              components: 'country:cd',
            }}
            // styles={{
            //     textInputContainer: {
            //       backgroundColor: 'rgba(0,0,0,0)',
            //       borderTopWidth: 0,
            //       borderBottomWidth: 0,
            //     },
            //     textInput: {
            //       marginLeft: 0,
            //       marginRight: 0,
            //       height: 38,
            //       color: '#5d5d5d',
            //       fontSize: 16,
            //     },
            //     predefinedPlacesDescription: {
            //       color: '#1faadb',
            //     },
            //   }}
          />
        </View>
    )
}

// function mapStateToProps(state){
//     return {
//         user: state.data
//     }
// }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 13
    }
});

export default ChooseScene;