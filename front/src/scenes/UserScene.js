import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, Image, AsyncStorage, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

function UserScene(props) {
    return(
        <View style={{flex: 1}}>
            <Text>Bonjour</Text>
        </View>
    )
}

export default connect(mapStateToProps)(UserScene);