import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { DummyTopRated1 } from '../../../assets/index-assets'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'
import { Button } from '../../box'

const DarkProfile = ({onPress}) => {
    return (
        <View style={styles.container}>
            <Button type='icon-only' icon='back-light' onPress={onPress}/>
            <View style={styles.content}>
                <Text style={styles.name}>Alex Nurdiansyah</Text>
                <Text style={styles.desc}>Petani Ladang</Text>
            </View>
            <Image source={DummyTopRated1} style={styles.avatar}/> 
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.secondary,
        paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems:'center',
        //paddingTop: 5,
    }, 
    content : {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center',
        paddingTop: 20,
    },
    desc : {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        marginTop: 6,
        textAlign: 'center',
        color: colors.text.subTitle,
    }, 
    avatar :{
        width: 50,
        height: 50,
        borderRadius: 50/2,
        //paddingTop: 10,
        //alignItems: 'center',
    }
})
