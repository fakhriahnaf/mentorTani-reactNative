import React from 'react';
import { StyleSheet, Text, View , ImageBackground} from 'react-native';
import { BackgroudGetStarted, Illogo } from '../../assets/index-assets';
import {Button, Gap} from '../../components/index-components';



const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={BackgroudGetStarted} style={styles.page}>
            <View>
                <Illogo/>
                <Text style={styles.title}>Konsultasi dengan sang ahli menjadi lebih mudah & flexibel</Text>
            </View>
            <View>
                <Button 
                    title="Get Started" 
                    onPress={() => navigation.navigate('RegisterScreen')}/>
                <Gap height={16}/>
                <Button type='secondary' title ='Sign In' onPress={() => navigation.replace('LoginScreen') }/>
            </View>
        </ImageBackground>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        paddingTop: 100,
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
        flex: 1
    }, 
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 28,
        fontWeight: '600',
        color: 'white',
        marginTop: 35,
    },

})
