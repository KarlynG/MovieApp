import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
    home: undefined;
    details: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

const Navigations = () => {
    return (
        <Stack.Navigator
            initialRouteName = 'home'
            screenOptions = {{
                headerShown: false,
                cardStyle: {
                    //backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen 
                name = 'home' 
                component = {HomeScreen}
            />
            
            <Stack.Screen 
                name = 'details'
                component = {DetailsScreen}
            />

        </Stack.Navigator>
    )
}

export default Navigations;
