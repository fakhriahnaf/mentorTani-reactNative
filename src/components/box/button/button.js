import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'
import ButtonIconSend from './button-icon-send'
import IconOnly from './icon-only'
//import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({type, title, onPress,icon, disable}) => {
    if (type === 'button-icon-send') {
        return <ButtonIconSend disable={disable}/>
    }
    if (type === 'icon-only') {
        return <IconOnly icon={icon} onPress={onPress}/>
    }
    if (disable) {
        return (
            <View style={styles.disableBg}>
                <Text style={styles.disableText}>{title}</Text>
            </View>
        );
    }
    
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.textButton(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container : (type)=> ({
        backgroundColor: type === 'secondary' ? 'white' :'#529D63',
        paddingVertical: 10,
        borderRadius : 10,
        height: 45,
    }),
    textButton : (type) => ({
        fontSize: 18,
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        color: type === 'secondary' ? 'black' : 'white',
    }),
    disableBg :{
        paddingVertical : 10,
        borderRadius: 10,
        backgroundColor: colors.button.disable.background,
    }, 
    disableText :{
        fontSize: 18,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: colors.button.disable.text,

    }
})
