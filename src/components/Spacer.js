import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Spacer = ({ space }) => {
    return (
        <View>
            {space === 'xs' && <View style={{ height: 4 }} />}
            {space === 'sm' && <View style={{ height: 8 }} />}
            {space === 'md' && <View style={{ height: 16 }} />}
            {space === 'mmd' && <View style={{ height: 16 }} />}
            {space === 'slg' && <View style={{ height: 20 }} />}
            {space === 'lg' && <View style={{ height: 24 }} />}
            {space === 'xl' && <View style={{ height: 30 }} />}
            {space === 'xxl' && <View style={{ height: 40 }} />}
        </View>
    )
};

export default Spacer;
