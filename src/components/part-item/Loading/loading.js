import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator  size='large' color='green'/>
            <Text style={styles.text}>Loadding.. </Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper : {
        flex: 1, 
        position: 'absolute',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: colors.loadingBackground,
        width: '100%',
        height: '100%',
    },
    text :{
        fontSize: 18,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        marginTop: 16,
    }
})
