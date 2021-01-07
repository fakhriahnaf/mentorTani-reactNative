import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {IconBackDark} from '../../../assets/index-assets'
import { colors } from '../../../utils/color'
import { Button, Gap } from '../../box'
import { DarkProfile } from '../index-partItem'

const Header = ({onPress, title, type}) => {
    if (type === 'dark-profile') {
        return <DarkProfile onPress={onPress}/>
    }
    return (
        <View style={styles.container(type)}>
            <View style={{paddingTop: 25}}>
                {/* <IconBackDark/> */}
                <Button type='icon-only' icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress}/>
            </View>
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={29}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : type => ({
        paddingHorizontal : 20,
        paddingTop: 30,
        paddingVertical : type === 'dark' ? 40 :25,
        backgroundColor: type === 'dark' ? colors.secondary : colors.white,
        flexDirection: 'row',
        alignItems: 'center',  
        borderBottomLeftRadius : type === 'dark' ? 20 : 0,
        borderBottomRightRadius : type === 'dark' ? 20 : 0,
    }),
    text : type => ({
        textAlign: 'center',
        paddingTop : type === 'dark' ? 38: 22,
        flex: 1,
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: type === 'dark' ? colors.white : colors.text.primary,
    }),
})
