import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBackDark, IconBackWhite } from '../../../assets/index-assets'
import { Gap } from '../../box'

const HeaderLogin = () => {
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 50 }}>
                <IconBackWhite />
            </View>
            <View style={{paddingTop: 30}}>
                <Text style={styles.text}>Daftar Akun</Text>
                <Text style={styles.subtitle}>Mulai dan dapatkan manfaat</Text>
            </View>
        </View>
    )
}

export default HeaderLogin;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingVertical: 30,
        backgroundColor: '#529D63',
        flexDirection: 'row',
        alignContent: 'center'
    },
    text: {
        alignContent: 'center',
        //textAlign: 'center',
        paddingLeft: 22,
        fontSize: 30,
        fontFamily: 'Nunito-Bold',
        color: 'white',
    },
    subtitle: {
        paddingLeft: 22,
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
        color: 'white',

    }

})