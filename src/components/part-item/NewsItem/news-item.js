import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyNews1 } from '../../../assets/index-assets'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'

const NewsItem = ({title, date, image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapTitle}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Image source ={{uri : image}} style={styles.imageNews}/>
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 10,
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    wrapTitle:{
        flex: 1,
        //marginHorizontal: 10,

    },
    title :{
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        maxWidth: '90%'
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 4,
    },
    imageNews : {
        width: 90,
        height: 70,
        borderRadius:12,
    }
})
