import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AuthStackNavigation from './AuthStackNavigation';
import { navigationRef } from './AltNavigation';
import RootStackNavigation from './RootStackNavigation';

const AppNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <RootStackNavigation />
        </NavigationContainer>
    )
};

export default AppNavigation;
