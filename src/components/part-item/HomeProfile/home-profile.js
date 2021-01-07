import React , {useEffect, useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated';
import { UserDummy, UserPhotoNull } from '../../../assets/index-assets';
import { colors } from '../../../utils/color';
import { fonts } from '../../../utils/font';
import {getData} from '../../../utils/localstorage/localstorage';

const HomeProfile = ({onPress}) => {
    const[profile, setProfile] = useState({
        photo: UserPhotoNull,
        fullname: '',
        profession: ''
    });
    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.photo = {uri: res.photo}
            console.log('new profile: ', res)
            setProfile(res)
        });
    }, [])

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>{profile.fullname}</Text>
                <Text style={styles.profession}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        paddingTop: 20,
        //backgroundColor: 'yellow'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 46/2,
        margin: 12,
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        paddingTop: 10,
        paddingLeft: 15,
        textTransform: 'capitalize',
    },
    profession :{
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        paddingLeft: 15,
        textTransform: 'capitalize',
    }
    

})
