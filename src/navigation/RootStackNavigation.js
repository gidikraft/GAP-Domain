import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useSelector } from 'react-redux';
// import AuthStackNavigation from './AuthStackNavigation';
// import DomainNavigation from './DomainNavigation';
import BottomTabNavigation from './BottomNavigation';
import { AppLanding } from '../screens';


const RootStack = createNativeStackNavigator();

const RootStackNavigation = () => {
    // const { isAuthenticated, usertype } = useSelector(state => state.userReducer);

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name='AppLanding'
                component={AppLanding}
                options={{
                    headerShown: false
                }}
            />

            <RootStack.Screen
                name='BottomTabs'
                component={BottomTabNavigation}
                options={{
                    headerShown: false
                }}
            />
            {/* {isAuthenticated === false ? (
                <RootStack.Group>
                    <RootStack.Screen
                        name='AuthStack'
                        component={AuthStackNavigation}
                        options={{
                            headerShown: false
                        }}
                    />
                    <RootStack.Screen
                        name='DomainStack'
                        component={DomainNavigation}
                        options={{
                            headerShown: false
                        }}
                    />

                </RootStack.Group>
            ) : (
                <RootStack.Group >
                    <RootStack.Screen
                        name='BottomTabs'
                        component={BottomTabNavigation}
                        options={{
                            headerShown: false
                        }}
                    />

                </RootStack.Group>
            )} */}
        </RootStack.Navigator>
    )
};

export default RootStackNavigation;
