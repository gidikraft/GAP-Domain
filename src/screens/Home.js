import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { palette } from '../themes/palette';
import PagerView from 'react-native-pager-view';
import { SvgIcon } from '../../assets/SvgIcon';
import { NormalText } from '../components/CustomText';
import Spacer from '../components/Spacer';
import CardBackground from '../../assets/images/visa_card.png';

const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: palette.white, flex: 1 }}>
            <PagerView style={{ height: 160, justifyContent: 'center' }} initialPage={0} offscreenPageLimit={1}>
                <View key="1">
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
                <View key="2">
                    <ImageBackground
                        source={CardBackground}
                        style={{
                            height: 154,
                            width: 240,
                            backgroundColor: "rgba(255, 168, 135, 0.91)",
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
                            <NormalText caption="10,000" style={{ color: palette.white, fontSize: 30 }} />

                            <SvgIcon name='visa' />
                        </View>
                    </ImageBackground>
                </View>
            </PagerView>
            <Text>Home</Text>
        </SafeAreaView>
    )
};

export default Home;

const styles = StyleSheet.create({});
