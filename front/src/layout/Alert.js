import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image, AsyncStorage } from "react-native";

const Alert = props => {
    return(
        <View style={styles.container}>
            <Text>Good</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

Alert.PropTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect()(Alert)