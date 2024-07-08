import React from 'react';
import HomeScreen from './src/Screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <HomeScreen />
        </NavigationContainer>
    );
}
