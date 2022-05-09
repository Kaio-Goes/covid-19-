import axios from 'axios';
import React, {useState} from 'react';
import { useEffect } from 'react';
import {View, Image,StyleSheet, Text, ImageBackground} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'

// "NewConfirmed": 369551,
// "TotalConfirmed": 515229199,
// "NewDeaths": 1466,
// "TotalDeaths": 6244683,
// "NewRecovered": 0,
// "TotalRecovered": 0,
// "Date": "2022-05-07T16:15:47.508Z"

const GlobalScreen = () => {
    const url = 'https://api.covid19api.com/summary';
    const [report , setReport] = useState({})

    useEffect(() =>{
        const getData = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data.Global;
                setReport(data)
                console.log(data)
            }catch (error) {
                alert(error.message);
            }
        };
    
        getData()
    }, [])

    return (
        <View style={styles.container}>
              <ImageBackground
                    source={require("../images/mapa1.png")}
                    style={styles.map}
                >
                    <View style={styles.col}>
                        <View style={{width: '50%'}}>
                        </View>
                        <View styles={styles.avatarContainer}>
                            <Image 
                                source={require('../images/logodollar.png')}
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                    <Text style={styles.textDash}>CORONA DASH</Text>
                </ImageBackground>
            <Card containerStyle={styles.card}>
            <Card.Title style={styles.cardTitle}>REPORT COVID-19</Card.Title>
                <Card.Divider/>
                <View style={styles.row}>
                <ListItem.Title style={styles.listItem}>New Confirmed:</ListItem.Title>
                <ListItem.Subtitle style={styles.listItem2}>{report.NewConfirmed}</ListItem.Subtitle>
                </View>
                <Card.Divider/>
                <View style={styles.row}>
                <ListItem.Title style={styles.listItem}>Total Confirmed:</ListItem.Title>
                <ListItem.Subtitle style={styles.listItem2}>{report.TotalConfirmed}</ListItem.Subtitle>
                </View>
                <Card.Divider/>
                <View style={styles.row}>
                <ListItem.Title style={styles.listItem}>New Deaths:</ListItem.Title>
                <ListItem.Subtitle style={styles.listItem2}>{report.NewDeaths}</ListItem.Subtitle>
                </View>
                <Card.Divider/>
                <View style={styles.row}>
                <ListItem.Title style={styles.listItem}>Total Deaths:</ListItem.Title>
                <ListItem.Subtitle style={styles.listItem2}>{report.TotalDeaths}</ListItem.Subtitle>
                </View>
                <Card.Divider/>
                <View style={styles.row}>
                <ListItem.Title style={styles.listItem}>New Recovered:</ListItem.Title>
                <ListItem.Subtitle style={styles.listItem2}>{report.NewRecovered}</ListItem.Subtitle>
                </View>
                <Card.Divider/>
                <View style={styles.row}>
                <ListItem.Title style={styles.listItem}>Total Recovered:</ListItem.Title>
                <ListItem.Subtitle style={styles.listItem2}>{report.TotalRecovered}</ListItem.Subtitle>
                </View>
                <Card.Divider/>
            </Card>
        </View>
    );
};

export default GlobalScreen;

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: '#191A1A'
    },
    map: {
        height: 200,
        paddingTop: 25,
        paddingHorizontal: 20,
        marginBottom: 15
    },
    col: {
        flexDirection: 'row',
    },
    minusIcon: {
        marginTop: -20,
        marginLeft: 5,
    }, 
    avatarContainer: {
        width: "50%",
        alignItems: "flex-end",
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 130
    },
    textDash: {
        color: "#FFF",
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#191A1A'
    },
    cardTitle:{
      color: 'white'  
    },
    row: {
        flexDirection:"row",
    },
    listItem: {
        marginLeft: 2,
        color: 'white',
        fontWeight: "bold",
        fontSize: 14,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        },
    listItem2: {
        color: 'white',
        marginLeft: 40,
        fontWeight: "bold",
        fontSize: 12
    }
})
