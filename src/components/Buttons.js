import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

const Buttons = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.circle}>
                <Text style={styles.textInfo}>i</Text>
            </View>
            <Text style={styles.btnName}>{props.name}</Text>
            <Text style={styles.number}>{props.number}</Text>
        </View>
    );
}

const styles =  StyleSheet.create({
    container:{
        borderRadius: 30,
        borderColor: "#6a706e",
        borderWidth: 0.3,
        marginHorizontal: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 10,
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 20,     
        backgroundColor: '#2b3240',
        marginTop: 20,
        marginBottom: 20,
    },
    textInfo: {
        color: "#6a706e",
        fontWeight: 'bold'
    },
    btnName: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 13,
        marginLeft: 20
    },
    number: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 14,
        marginLeft: 90,
    }
})

export default Buttons;