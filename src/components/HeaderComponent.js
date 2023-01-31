import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';
import React from 'react';
// import { SvgIcon } from '../../../assets/SvgIcon';
import { BoldText, NormalText } from './CustomText';
import { palette } from '../themes/palette';
import { SvgIcon } from '../../assets/SvgIcon';

const HeaderLeftComponent = ({ backPress, title, titleprops }) => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <Pressable
                onPress={() => backPress()}
            >
                <SvgIcon name='backButton' />
            </Pressable>

            {/* <BoldText caption={title} style={[styles.title, titleprops]} /> */}
        </SafeAreaView>
    )
};

export default HeaderLeftComponent;

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        backgroundColor: palette.white,
        alignItems: 'center',
        justifyContent: 'center'
        // padding: 15
    },
    title: {
        marginLeft: 30
    }
});