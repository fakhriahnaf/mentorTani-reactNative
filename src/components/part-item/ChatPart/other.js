import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyTopRated1 } from '../../../assets/index-assets'
import { colors, fonts } from '../../../utils/index-utils'

const Other = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyTopRated1} style={styles.avatar} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>apakah barang ini bisa diperbaiki kembali? bagaimana prosedurnya</Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>

        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container: {

        marginBottom: 20,
        //paddingBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: 'row'
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        marginRight: 12,
    },
    chatContent: {
        padding: 12,
        maxWidth: '80%',
        paddingRight: 18,
        backgroundColor: colors.primary,
        borderRadius: 12,
        borderBottomLeftRadius: 0,

    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.white,
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary[300],
        color: colors.secondary,
        marginTop: 8,
    }
})
