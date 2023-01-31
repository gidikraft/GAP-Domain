import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BoldText, NormalText } from '../components/CustomText';
import { palette } from '../themes/palette';
import Spacer from '../components/Spacer';
import AppDashboard from '../components/AppDashboard';

const History = () => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container} >
                <Spacer space="md" />

                <AppDashboard
                    username="Cassandra"
                    openDrawer={() => {}}
                    openSearch={() => {}}
                />
                <Spacer space="xl" />

                <View style={{ paddingHorizontal: 20 }} >
                    <NormalText caption="Your balance" style={styles.balance} />
                    <Spacer space="sm" />

                    <BoldText caption="$ 24,165.00" style={styles.amount} />
                    <Spacer space="xl" />
                </View>

                <View style={styles.graphLayout} >
                    <Spacer space="xxl" />

                    <BoldText caption="Reports" style={styles.report} />
                </View>

            </View>
        </SafeAreaView>
    );
};

export default History;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: palette.primaryColor,
    },
    container: {
        flex: 1,
        // paddingHorizontal: 20,
    },
    balance: {
        color: palette.white,
    },
    amount: {
        fontSize: 40,
        color: palette.white,
    },
    graphLayout: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: palette.white,
        flex: 1,
        paddingHorizontal: 20
    },
    report: {
        fontSize: 20,
    },
});