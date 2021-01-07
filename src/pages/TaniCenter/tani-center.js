import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { BackgroundTaniCenter, DummyTaniCenter1 , DummyTaniCenter2} from '../../assets/dummy/index-dummy';
import ListTaniCenter from '../../components/part-item/ListTaniCenter/list-tani-center';
import {fonts, colors} from '../../utils/index-utils';

const TaniCenter = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={BackgroundTaniCenter} style={styles.background}>
                <Text style ={styles.title}>Nearby TaniCenter</Text>
                <Text style={styles.desc}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListTaniCenter 
                    name='Farm House Lembang' 
                    address='Jl. Lembang bandung no.2' 
                    pict={DummyTaniCenter1}/>
                <ListTaniCenter
                    name='Cikarawang Tani Center'
                    address='Jl. Wr. supraptman Bogor'
                    pict={DummyTaniCenter2}/>
            </View>
           
        </View>
    )
}

export default TaniCenter;

const styles = StyleSheet.create({
    background :{
        height: 240,
        paddingTop: 70,
    },
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.primary[600],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center',
    },
    desc: {
        fontSize: 16,
        fontFamily: fonts.primary[300],
        color: colors.white,
        marginTop: 4,
        textAlign: 'center',
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 23,
        flex: 1,
        marginTop: -30,
        paddingTop: 14,
        paddingHorizontal: 10,
    }

})
