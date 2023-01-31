import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SvgIcon } from '../../assets/SvgIcon';
import { palette } from '../themes/palette';
import { NormalText } from './CustomText';
import Spacer from './Spacer';

const operations = [
    {
        icon: "homeIcon",
        title: "All"
    },
    {
        icon: "heart",
        title: "Health"
    },
    {
        icon: "bag",
        title: "Travel"
    },
    {
        icon: "food",
        title: "Food"
    },
];

const Operations = ({ active, setActive, handlePress }) => {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {operations.map((item, itemIndex) => (
                    <Pressable
                        key={item.icon}
                        style={{
                            alignItems: 'center',
                            marginRight: 10,
                            backgroundColor: active === itemIndex? palette.primaryColor : palette.white,
                            paddingVertical: 20,
                            width: 90,
                            borderRadius: 200,
                        }}
                        onPress={() => handlePress()}
                    >
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',                                
                                height: 60,
                                width: 60,
                                backgroundColor: palette.white,
                                borderRadius: 30
                            }}
                        >
                            <SvgIcon name={item.icon} />
                        </View>
                        <Spacer space="sm" />

                        <NormalText caption={item.title} style={{ fontSize: 12, }} />
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

export default Operations;

const styles = StyleSheet.create({});