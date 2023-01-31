import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SvgIcon } from '../../assets/SvgIcon';
import { NormalText } from './CustomText';
import { palette } from '../themes/palette';

const TransactionsList = ({ icon, title, date, time, amount, }) => {
    return (
        <View
            style={{
                elevation: 4,
                shadowColor: palette.black,
                shadowOffset: {
                    height: 3,
                    width: 3,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 15,
                    alignItems: 'center',
                }}
            >

                <View style={{ flexDirection: 'row' }}>
                    <SvgIcon name={icon} />

                    <View style={{ marginLeft: 10}} >
                        <NormalText caption={title} />

                        <View style={{ flexDirection: 'row' }} >
                            <NormalText caption={`${date}, `} />
                            <NormalText caption={time} />
                        </View>

                    </View>
                </View>
                <NormalText caption={amount} />

            </View>
        </View>
    );
};

export default TransactionsList;

const styles = StyleSheet.create({});
