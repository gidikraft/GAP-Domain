import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BoldText } from './CustomText';

const HeaderTitle = ({ title }) => {
    return (
        <View style={{ flex: 1,  }}>
            <BoldText caption={title} style={{ textAlign: "center" }} />
        </View>
    );
};

export default HeaderTitle;

const styles = StyleSheet.create({});