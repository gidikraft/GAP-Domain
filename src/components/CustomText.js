import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { palette } from '../themes/palette';
// import { FONT_BOLD, FONT_REGULAR } from '../utils';

const BoldText = ({ caption, style }) => (
    <Text 
        style={[styles.boldText, style]}
        adjustsFontSizeToFit
    >
        {caption}
    </Text>
);

const NormalText = ({ caption, style }) => (
    <Text
        style={[styles.normalText, style]}
        adjustsFontSizeToFit
    >
        {caption}
    </Text>
);

const SmallText = ({ caption, style }) => (
    <Text
        style={[styles.smallText, style]}
        adjustsFontSizeToFit
    >
        {caption}
    </Text>
);

export { BoldText, NormalText, SmallText };

const styles = StyleSheet.create({
    boldText: {
        fontSize: 20,
        // fontFamily: FONT_BOLD,
        color: palette.textColor        
    },
    normalText: {
        fontSize: 16,
        // fontFamily: FONT_REGULAR,
        color: palette.textColor,
        lineHeight: 24,
    },
    smallText: {
        fontSize: 10,
        // fontFamily: FONT_REGULAR,
        color: palette.textColor
    },
})