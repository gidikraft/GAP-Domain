import { StyleSheet, Pressable, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { palette } from '../themes/palette';
import { BoldText, NormalText } from './CustomText';
import { SvgIcon } from '../../assets/SvgIcon';
// import { FONT_MEDIUM } from '../utils';
// import { SvgIcon } from '../../../assets/SvgIcon';

const PrimaryInput = props => {
    const [focus, setFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleSecureText = () => {
        setShowPassword(!showPassword)
    };

    return (
        <View
            style={[
                { width: "100%" }, props.containerstyle,
            ]}
        >
            {/* labels */}
            {/* {
                (props.title && helper.isValidText(props.sidetext) == false) &&
                <NormalText
                    caption={props.title}
                    style={{ fontSize: 15, color: palette.primaryColor, marginVertical: 7 }}
                />
            }

            {
                (props.title && helper.isValidText(props.sidetext) == true) &&
                <View style={[gstyles.rowsb, { alignItems: 'center' }]}>
                    <NormalText
                        caption={props.title}
                        style={{ fontSize: 15, color: palette.textColor, marginVertical: 7 }}
                    />

                    <Text style={[props.sidetextstyle, { color: palette.textColor }]}>{props.sidetext}</Text>
                </View>
            } */}

            <View style={[focus ? styles.focused : styles.notFocused, styles.container, props.wrapperstyle]}>
                {/* left icons */}
                {
                    props.leftIcon === true &&
                    <View style={styles.leftIcon} >
                        <SvgIcon name='search' />
                    </View>
                }

                {
                    props.currency === true &&
                    <View style={styles.leftIcon} >
                        <BoldText caption='₦' style={{ fontSize: 28, }} />
                    </View>
                }
                <View style={[{ flex: 1 }]}>
                    <TextInput
                        placeholderTextColor={palette.placeholderColor}
                        setFocus={focus}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        secureTextEntry={!showPassword ? props.secureTextEntry : null}
                        style={[styles.input, props.style, { fontSize: 15 }]}
                        {...props}
                    />
                </View>

                {/* right icons */}
                {props.secureTextEntry &&
                    <Pressable
                        style={styles.rightIcon}
                        onPress={() => toggleSecureText()}
                    >
                        {/* <Icon
                            name={!showPassword ? 'eye-sharp' : 'eye-off-sharp'}
                            size={25}
                            color={palette.darkGrey}
                        /> */}
                    </Pressable>
                }

            </View>
        </View>
    )
};

export default PrimaryInput;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: palette.borderColor,
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    focused: {
        // fontFamily: FONT_MEDIUM,
        fontSize: 14,
        color: '#67656E',
        backgroundColor: 'white',
        borderColor: palette.primaryColor,
        borderWidth: 1,
    },
    notFocused: {
        // fontFamily: FONT_MEDIUM,
        fontSize: 14,
        color: 'gray',
        borderColor: '#E2E3E4',
        // backgroundColor: '#F7F6FC',
    },
    input: {
        // fontFamily: FONT_MEDIUM,
        paddingVertical: 10,
        paddingHorizontal: 16,
        height: 45,
        color: palette.textColor
    },
    leftIcon: {
        width: 35,
        alignItems: 'center'
    },
    rightIcon: {
        width: 35,
        alignItems: 'center',
        // marginRight: 5
    }
})