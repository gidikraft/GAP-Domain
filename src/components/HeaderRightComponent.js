import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SvgIcon } from '../../assets/SvgIcon';
import { palette } from '../themes/palette';

const HeaderRightComponent = ({ openDrawer }) => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <Pressable
                onPress={() => openDrawer()}
            >
                <SvgIcon name='drawer' />
            </Pressable>
        </SafeAreaView>
    );
};

export default HeaderRightComponent;

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        backgroundColor: palette.white,
        alignItems: 'center',
        justifyContent: 'center'
        // padding: 15
    },

});
