import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { palette } from '../themes/palette';
// import { FONT_REGULAR } from '../utils';
// import { SvgIcon } from '../../../assets/SvgIcon';

const PrimaryButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.buttonPress}
            style={[styles.primaryButtonActive, props.wrapperstyle, props.fullbtn && { width: "100%" }]}
            {...props}
        >
            {props.leftIcon &&
                <View style={{}} >
                    {/* <SvgIcon name={props.leftIcon} /> */}
                </View>
            }

            <Text style={[styles.primaryButtonText, props.labelstyle]} >{props.label}</Text>

            {props.rightIcon &&
                <View style={{}} >
                    {/* <SvgIcon name={props.rightIcon} /> */}
                </View>
            }
        </TouchableOpacity>
    )
};

export default PrimaryButton;

const styles = StyleSheet.create({
    primaryButtonActive: {
        flexDirection: 'row',
        backgroundColor: palette.primaryColor,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        borderRadius: 4,
        height: 54,
    },
    primaryButtonText: {
        color: palette.white,
        fontSize: 16,
        // fontFamily: FONT_REGULAR
    },

});
