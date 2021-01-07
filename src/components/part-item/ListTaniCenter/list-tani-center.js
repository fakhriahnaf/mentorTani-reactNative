import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyTaniCenter1 } from '../../../assets/dummy/index-dummy'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'

const ListTaniCenter = ({name, address, pict}) => {
    return (
        <View style={styles.container}>
            <Image source={pict} style={styles.picture}/>
            <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.locations}>3km. from you</Text>
            </View>
        </View>
    )
}

export default ListTaniCenter

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth:1,
        borderBottomColor: colors.border,
    },
    picture: {
        width: 100,
        height: 80,
        borderRadius:11,
        marginRight: 16,
    },
    title :{
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        fontSize: 18,
    },
    address :{
        fontFamily: fonts.primary.normal,
        fontSize: 14,

    },
    locations :{
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
        marginTop: 6,
    }

})
