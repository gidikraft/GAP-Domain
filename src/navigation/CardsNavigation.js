import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cards } from '../screens';
import HeaderLeftComponent from '../components/HeaderComponent';
import HeaderTitle from '../components/HeaderTitle';
import HeaderRightComponent from '../components/HeaderRightComponent';

const CardStack = createNativeStackNavigator();

const CardsNavigation = () => {
    return (
        <CardStack.Navigator>
            <CardStack.Screen
                name='CardsLanding'
                component={Cards}
                options={({ navigation, route }) => ({
                    headerShadowVisible: false,
                    // title: 'My Cards',
                    headerLeft: () => (
                        <HeaderLeftComponent
                            backPress={() => {
                                navigation.goBack()
                            }}
                        />
                    ),
                    headerTitle: () => (
                        <HeaderTitle title="My Cards" />
                    ),
                    headerRight: () => (
                        <HeaderRightComponent
                            openDrawer={() => {
                                navigation.goBack()
                            }}
                        />
                    )
                })}
            />

            {/* <CardStack.Screen
                name='CardsLanding'
                component={Cards}
            /> */}
        </CardStack.Navigator>
    );
};

export default CardsNavigation;

const styles = StyleSheet.create({});