import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { palette } from '../themes/palette';
import { BoldText, NormalText } from '../components/CustomText';
import Spacer from '../components/Spacer';
import PrimaryButton from '../components/PrimaryButton';
import { SvgIcon } from '../../assets/SvgIcon';

const AppLanding = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container} >
                <Spacer space="xxl" />

                <View style={{ alignItems: "center"}} >
                    <SvgIcon name='illustration' />
                </View>

                <BoldText caption="Finance App" style={styles.title} />
                <Spacer space="md" />

                <NormalText caption="Carrying out financial transactions with the best security." style={styles.subheader} />
                <Spacer space="xxl" />
                <Spacer space="xl" />

                <PrimaryButton
                    label="Get Started"
                    wrapperstyle={styles.button}
                    labelstyle={styles.buttonlabel}
                    buttonPress={() => {
                        navigation.navigate("BottomTabs")
                    }}
                />
                <Spacer space="xl" />

                <View style={{ alignItems: 'center' }} >
                    <SvgIcon name="slider" />
                </View>

            </View>
        </SafeAreaView>
    )
};

export default AppLanding;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: palette.primaryColor,
    },
    container: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        color: palette.white,
        textAlign: "center",
    },
    subheader: {
        color: palette.white,
        textAlign: "center",

    },
    button: {
        backgroundColor: palette.white,
        borderRadius: 100,
        width: "60%",
    },
    buttonlabel: {
        color: palette.primaryColor,
    },

});
