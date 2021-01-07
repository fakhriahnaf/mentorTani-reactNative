import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Link = ({size, title, align, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text(size, align)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => ({
        fontSize: size,
        color: '#7D8797',
        fontFamily: 'Nunito-Regular',
        textDecorationLine: 'underline',
        textAlign: align
        
    }),
})
