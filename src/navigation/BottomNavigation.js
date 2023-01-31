import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FONT_BOLD } from '../utils';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Cards, History, Home, Profile } from '../screens';
import { NormalText } from '../components/CustomText';
import { palette } from '../themes/palette';
import { SvgIcon } from '../../assets/SvgIcon';
import CardsNavigation from './CardsNavigation';
// import HomeNavigation from './HomeNavigation';
// import ActionsNavigation from './ActionsNavigation';
// import PanicNavigation from './PanicNavigation';
// import ProfileNavigation from './ProfileNavigation';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const hideScreen = (routename) => {
        let allscreenswithnotabs = [
            "Collections",
            "AddUsers",
            "DomainBills",
            "ManageArtisans",
            "BroadcastScreen",
            "MakePaymentsScreen",
            "TopUpScreen",
            "DashboardScreen",
            "CreateInviteScreen",
            "EmergencyScreen",
            "FindArtisans",
            "UpdateAddressScreen",
            "ManageOccupantsScreen",
            "ManageVehiclesScreen",
            "ScanQrScreen",
            "ChangePasswordScreen",

        ];
        const locindex = allscreenswithnotabs.findIndex((obj) => obj == routename);
        if (locindex == -1) {
            return "flex";
        }
        else {
            return "none"
        }
    }

    return (
        <BottomTab.Navigator
            initialRouteName="HomeNavigation"
            screenOptions={(props) => {
                return {
                    tabBarShowLabel: false,
                    showLabel: true,
                    tabBarStyle: {
                        display: hideScreen(getFocusedRouteNameFromRoute(props.route)),
                        padding: 5,
                        height: Platform.OS === 'android' ? 65 : 90,
                        paddingHorizontal: 20,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                    },
                };
            }}
        >
            <BottomTab.Screen
                name="HomeNavigation"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <View style={styles.labelFocusedContainer}>
                                <SvgIcon name='home' stroke={palette.primaryAltColor} />
                                {/* <NormalText caption={`Home`} style={styles.labelFocusedStyle} /> */}
                            </View>
                        ) : (
                            <View style={styles.labelContainer}>
                                <SvgIcon name='home' stroke={palette.darkGrey} />
                                {/* <NormalText caption={`Home`} style={styles.labelStyle} /> */}
                            </View>
                        );
                    },
                    tabBarLabelPosition: 'below-icon',
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                }}
            />

            <BottomTab.Screen
                name="HistoryNavigation"
                component={History}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <View style={styles.labelFocusedContainer}>
                                <SvgIcon name='historyActive' stroke={palette.primaryAltColor} />
                                {/* <NormalText caption={`History`} style={styles.labelFocusedStyle} /> */}
                            </View>
                        ) : (
                            <View style={styles.labelContainer}>
                                <SvgIcon name='historyInactive' stroke={palette.darkGrey} />
                                {/* <NormalText caption={`History`} style={styles.labelStyle} /> */}
                            </View>
                        );
                    },
                    tabBarLabelPosition: 'below-icon',
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                }}
            />

            <BottomTab.Screen
                name="CardsNavigation"
                component={CardsNavigation}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <View style={styles.labelFocusedContainer}>
                                <SvgIcon name='cardsActive' stroke={palette.primaryAltColor} />
                                {/* <NormalText caption={`Cards`} style={styles.labelFocusedStyle} /> */}
                            </View>
                        ) : (
                            <View style={styles.labelContainer}>
                                <SvgIcon name='cardsInactive' stroke={palette.darkGrey} />
                                {/* <NormalText caption={`Cards`} style={styles.labelStyle} /> */}
                            </View>
                        );
                    },
                    tabBarLabelPosition: 'below-icon',
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                }}
            />

            <BottomTab.Screen
                name="ProfileNavigation"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <View style={styles.labelFocusedContainer}>
                                <SvgIcon name='profileActive' stroke={palette.primaryAltColor} />
                                {/* <NormalText caption={`Profile`} style={styles.labelFocusedStyle} /> */}
                            </View>
                        ) : (
                            <View style={styles.labelContainer}>
                                <SvgIcon name='profileActive' stroke={palette.darkGrey} />
                                {/* <NormalText caption={`Profile`} style={styles.labelStyle} /> */}
                            </View>
                        );
                    },
                    tabBarLabelPosition: 'below-icon',
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                }}
            />

        </BottomTab.Navigator>
    )
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
    labelFocusedContainer: {
        alignItems: 'center',
        width: '100%',
        // borderBottomWidth: 3,
        // borderBottomColor: '#4317C0',
    },
    labelFocusedStyle: {
        textAlign: 'center',
        margin: 8,
        color: palette.primaryAltColor,
        backgroundColor: 'transparent',
        fontSize: 13,
        // fontFamily: FONT_BOLD
    },
    labelContainer: {
        alignItems: 'center',
        width: '100%',
    },
    labelStyle: {
        textAlign: 'center',
        marginVertical: 5,
        color: 'gray',
        backgroundColor: 'transparent',
        fontSize: 12,
    },
});
