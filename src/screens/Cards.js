import { FlatList, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { palette } from '../themes/palette';
import { SvgIcon } from '../../assets/SvgIcon';
import Spacer from '../components/Spacer';
import CardBackground from '../../assets/images/visa_card.png';
import { BoldText, NormalText } from '../components/CustomText';
import Operations from '../components/Operations';
import TransactionsList from '../components/TransactionsList';

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

const transactions = [
    {
        icon: 'travelLogo',
        title: "Traveloka",
        date: '20 March',
        time: '09: 00 AM',
        amount: '-$ 120.00'
    },
    {
        icon: 'starbucks',
        title: "Starbucks",
        date: '18 March',
        time: '07: 15 PM',
        amount: '-$ 120.00'
    },
    {
        icon: 'starbucks',
        title: "Allianz Prime",
        date: '20 February',
        time: '04: 20 PM',
        amount: '-$ 80.99'
    },
]

const Cards = () => {
    const [active, setActive] = useState(0);

    const handleClick = (id) => {
        setActive(id)
        console.log(id)
    };

    const ListHeader = () => (
        <View >
            <Spacer space="md" />

            <View
                style={{
                    flexDirection: "row",
                }}
            >
                <TouchableOpacity style={{ marginRight: 20 }}>
                    <SvgIcon name='plus' />
                </TouchableOpacity>

                <ImageBackground
                    source={CardBackground}
                    style={{
                        height: 154,
                        width: 240,
                        backgroundColor: "#3CBAF0",
                        borderRadius: 20,
                        padding: 20
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <NormalText caption="Debit Card" style={{ color: palette.white, fontSize: 12 }} />

                        <NormalText caption="**** 0610" style={{ color: palette.white, fontSize: 12 }} />
                    </View>
                    <Spacer space="xxl" />

                    <NormalText caption="Balance" style={{ color: palette.white, fontSize: 8 }} />
                    <Spacer space="sm" />

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <NormalText caption="7,658" style={{ color: palette.white, fontSize: 30 }} />

                        <SvgIcon name='visa' />
                    </View>
                </ImageBackground>
            </View>
            <Spacer space="md" />

            <BoldText caption="Popular operations" style={{ fontSize: 20, }} />
            <Spacer space="md" />

            {/* Operations */}
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
                            margin: 10,
                            backgroundColor: active === itemIndex ? palette.primaryColor : palette.white,
                            paddingVertical: 20,
                            width: 90,
                            borderRadius: 200,
                            elevation: 4,
                            shadowColor: palette.black,
                            shadowOffset: {
                                height: 3,
                                width: 3,
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                        }}
                        onPress={() => handleClick(itemIndex)}
                    >
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 60,
                                width: 60,
                                backgroundColor: palette.white,
                                borderRadius: 30,
                                borderWidth: active === itemIndex ? null : 1,
                                borderColor: active === itemIndex ? null : "#C5D1DE"
                            }}
                        >
                            <SvgIcon name={item.icon} />
                        </View>
                        <Spacer space="sm" />

                        <NormalText
                            caption={item.title}
                            style={{
                                fontSize: 12,
                                color: active === itemIndex ? palette.white : palette.textColor
                            }}
                        />
                    </Pressable>
                ))}
            </ScrollView>
            <Spacer space="md" />

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <BoldText caption="Transactions" style={{ fontSize: 20, }} />

                <Pressable
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: 'rgba(56, 115, 221, 0.1)',
                        borderRadius: 30,
                        paddingHorizontal: 15,
                        paddingVertical: 8
                    }}
                >
                    <NormalText caption="All" style={{ fontSize: 12, marginRight: 5 }} />
                    <SvgIcon name='downArrow' />
                </Pressable>
            </View>
        </View>

    )

    return (
        <View style={styles.maincontainer}>
            <View style={styles.container} >
                <FlatList
                    data={transactions}
                    keyExtractor={(item, itemIndex) => itemIndex}
                    ListHeaderComponent={<ListHeader />}
                    renderItem={({item}) => (
                        <TransactionsList
                            amount={item.amount}
                            title={item.title}
                            date={item.date}
                            icon={item.icon}
                            time={item.time}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        </View>
    );
};

export default Cards;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: palette.white,
    },
    container: {
        paddingHorizontal: 20,
    },

});
