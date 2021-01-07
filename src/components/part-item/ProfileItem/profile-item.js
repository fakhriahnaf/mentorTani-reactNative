import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'

const ProfileItem = ({label,value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container :{
        padding :16,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
    label :{
        fontSize: 16,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
        marginBottom: 6,
    },
    value :{
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary,
    }
})
