import React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message';
import { UserPhotoNull } from '../../assets/illustration';
import { Gap, Header, Profile } from '../../components/index-components';
import {List} from '../../components/index-components'
import Fire from '../../config/firebase';
import { colors, getData } from '../../utils/index-utils';

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullname: '',
        profession: '',
        photo: UserPhotoNull,
    });
    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.photo = {uri: res.photo};
            setProfile(data);
        })
    }, []);

    const signOut = () => {
        Fire.auth()
            .signOut()
            .then(() => {
                console.log('success logout');
                navigation.navigate('GetStarted');
            })
            .catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                })
            })
    }

    return (
        <View style={styles.page}>
            <Header title='Profile' type='dark' onPress={() => navigation.goBack()}/>
            <Gap height={40}/>
            {profile.fullname.length >0 &&  (<Profile name={profile.fullname} profession={profile.profession} photo={profile.photo}/>)}
            <Gap height={40}/>
            <List 
                name='Edit Profile' 
                desc='Last update 12/02/20' 
                icon='edit-profile' 
                type='next' 
                onPress={() =>navigation.navigate('UpdateProfile')}/>
            
            <List 
                name='Rate' 
                desc='Last update 12/02/20' 
                icon='rate' 
                type='next' />
            <List 
                name='Help' 
                desc='Last update 12/02/20' 
                icon='help' 
                type='next' />
            <List 
                name='Log Out' 
                desc='Last update 12/02/20' 
                icon='language' 
                type='next'
                onPress={signOut}
                 />
        </View>
    )
}

export default UserProfile;

const styles = StyleSheet.create({
    page :{
        flex: 1,
        backgroundColor: 'white',
    }
})
