import React, {Component, useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    ImageBackground 
} from 'react-native';
import {Button} from 'react-native-elements'
import Icon from '@expo/vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import Deck from '../../components/Deck';
import Cards from '../../components/Cards';
import Buttons from '../../components/Buttons';
// import  axios  from 'axios';
import api from '../../Services/Api'
import { FlatList } from 'react-native-gesture-handler';



// "NewConfirmed": 369551,
// "TotalConfirmed": 515229199,
// "NewDeaths": 1466,
// "TotalDeaths": 6244683,
// "NewRecovered": 0,
// "TotalRecovered": 0,
// "Date": "2022-05-07T16:15:47.508Z"

// const url = "https://api.covid19api.com/summary";
// const [report, setReport] = useState({})

// useEffect(() =>{
//     const getData = async() => {
//         try {
//             const response = await axios.get(url);
//             const data = response.data.Global;
//             setReport(data)
//         } catch (error) {
//             alert(error.message)
//         }
//     }
//     })



// const DATA = [
//     {
//         id:1,
//         title: "CORANAVIRUS CASES",
//         number: '1.838.56'
//     },
//     {
//         id:2,
//         title: "TOTAL DEATHS",
//         number: '1 29 863'
//     },
//     {
//         id:3,
//         title: "RECOVERED",
//         number: '838 456'
//     }

// ]

// const Home = () => {
    
// }

class Home extends Component  {

    constructor(props){
        super(props);
        this.state = {
            DATA : [
                {
                    id:1,
                    title: "CORANAVIRUS CASES",
                    number: this.componentDidMount
                },
                {
                    id:2,
                    title: "TOTAL DEATHS",
                    number: '1 29 863'
                },
                {
                    id:3,
                    title: "RECOVERED",
                    number: '838 456'
                }
            ]
        }

    }

    async componentDidMount(){
        const response = await api.get('summary')
        const data = response.data.Global.NewConfirmed;
        // console.log(data)
        return data
    }
    

    renderCard(item){
    return(
        <View key={item.id} style={styles.cardContainer}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Icon
                        name="ios-remove"
                        size={40}
                        color="red"
                        style={{marginTop:25}}
                    />
                    <Text style={styles.number}>{item.number}</Text>
                </View>
                <View style={{marginLeft:150}}>
                    <Icon name="md-options" size={24} color="#FFF" />
                    <Text style={styles.textCovid}>COVID-19</Text>
                </View>
            </View>
        </View>
    );
    }

    renderNoMoreCards(){ 
        return(
            <View title="All Domne!">
                <Text style={styles.noCard}>NO MORE CARDS HERE</Text>
                <Button backgroundColor="#03A9F4" title="Get more!"/> 
            </View>
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../images/mapa1.png")}
                    style={styles.map}
                >
                    <View style={styles.col}>
                        <View style={{width: '50%'}}>
                            <Icon name="md-remove" color="#FFF" size={26} />
                            <Icon
                                name="md-remove"
                                color="#FFF"
                                size={26}
                                style={styles.minusIcon}
                            />
                        </View>
                        <View styles={styles.avatarContainer}>
                            <Image 
                                source={require('../../images/logodollar.png')}
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                    <Text style={styles.textDash}>CORONA DASH</Text>

                    <View style={styles.colContainer}>
                        <Button onPress={() => this.props.navigation.navigate('GlobalScreen')}
                         title = "Global" containerStyle={styles.buttonGlobal}
                            buttonStyle={styles.textGlobal} />
                        <Button  title = 'País' containerStyle={styles.buttonPais} 
                         buttonStyle={styles.textPais}/>
                        {/* <Text style={styles.textGlobal}>GLOBAL</Text> */}
                        {/* <Text style={styles.textRussia}>RUSSIA</Text> */}
                        <View style={styles.reloadContainer}>
                            <Icon name="md-refresh" size={24} color="red"/>
                        </View>
                    </View>
                </ImageBackground>
                  <Deck
                            data={this.state.DATA}
                            renderCard={this.renderCard}
                            renderNoMoreCards={this.renderNoMoreCards}
                    />
                        <ScrollView 
                            style={{marginTop:170}}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        >
                            <Cards 
                                  onPress={() => this.props.navigation.navigate('Detail')}
                                icon="md-pulse"
                                title="TOTAL CASES"
                                bg="red"
                                number="113 329"
                            />
                            <Cards 
                                icon="ios-git-network"
                                title="RECOVERED"
                                bg="#FFF"
                                number="442 329"
                            />
                            <Cards 
                                icon="ios-heart-dislike"
                                title="DEATH CASES"
                                bg="#FFF"
                                number="113 329"
                            />
                        </ScrollView>
                        <View style={{marginBottom:34}}>
                            <Buttons 
                                name="ASYMPTOMATIC"
                                number="1 778"
                            />
                            <Buttons 
                                name="SYMPTOMATIC"
                                number="1 578"
                            />
                        </View>
            </View>
        )
    }
}       

export default Home;

  

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#191A1A"
    },
    cardContainer: {
        height: 150,
        width: 320,
        alignSelf: "center",
        backgroundColor: "#6A706E",
        borderRadius: 30
    },
    card: {
        height: 150,
        width: 260,
        paddingTop: 20,
        paddingHorizontal: 30,
        backgroundColor: "#2b3240",
        borderRadius: 30,
        flexDirection: 'row'
    },
    title: {
        color: "#6A706E",
        width: 100,
        fontSize: 12,
        fontWeight: "bold",
    },
    number: {
        color: "#FFF",
        width: 100,
        fontSize: 22,
        fontWeight: "bold",
        marginTop: -10,
    },
    textCovid: {
        transform: [{ rotate: "-90deg"}],
        color: "#3a4b4f",
        fontSize: 14,
        width: 90,
        marginLeft: -35,
        fontWeight: 'bold',
        marginTop: 20,
    },
    noCard: {
        marginBottom: 10,
        color: '#FFF',
        alignSelf: "center",
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
    colContainer: {
        flexDirection: "row",
        paddingHorizontal: 30,
        marginTop: 40,
        alignItems: 'center'
    },
    buttonGlobal: {
        marginRight: 30,
        borderRadius: 10
    },
    buttonPais: {
        borderRadius: 10,
    },  
    textGlobal: {
        fontWeight: "bold",
        fontSize: 16,
        paddingHorizontal: 30,
        backgroundColor: '#2b3240'
    },
    textPais: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingHorizontal: 30,
        backgroundColor: '#2b3240'
    }, 
    reloadContainer: {
        backgroundColor: "#FFF",
        elevation: 2,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: 50
    }
})