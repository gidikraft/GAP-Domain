import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SvgIcon } from '../../assets/SvgIcon';
import { NormalText } from './CustomText';
import { palette } from '../themes/palette';

const AppDashboard = ({ username, openSearch, openDrawer }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <SvgIcon name='profile' />

                <NormalText caption={username} style={{ marginLeft: 20, color: palette.white, fontSize: 18 }} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <TouchableOpacity
                    onPress={() => {
                        openSearch();
                    }}
                >
                    <SvgIcon name="search" />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ marginLeft: 20 }}
                    onPress={() => {
                        openDrawer()
                    }}
                >
                    <SvgIcon name="drawer" />
                </TouchableOpacity>
            </View>

        </View>
    )
};

export default AppDashboard;

const styles = StyleSheet.create({});