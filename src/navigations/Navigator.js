import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/HomoScreen/Home';
import Detail from '../screens/Detail';
import GlobalScreen from '../screens/GlobalScreen';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name= "Home"
                component={Home}
            />
             <Stack.Screen
                name= "GlobalScreen"
                component={GlobalScreen}
            />
            <Stack.Screen
                name= "Detail"
                component={Detail}
            />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;