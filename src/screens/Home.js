import React, {Component} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Button, 
    ImageBackground 
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import Deck from '../components/Deck';
import Cards from '../components/Cards';
import Buttons from '../components/Buttons';

export default class Home extends Component {
    render() {
        return(
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}       