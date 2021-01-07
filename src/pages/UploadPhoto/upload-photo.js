import React, {useState} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserPhotoNull, IconAddPhoto, IconRemovePhoto, UserDummy } from '../../assets/index-assets'
import { Button, Gap, Header, Link } from '../../components/index-components'
import { colors } from '../../utils/color'
import { fonts } from '../../utils/font';
//import launchImageLibrary from  '../../../node_modules/react-native-image-picker/lib/typescript/index';
import { showMessage } from 'react-native-flash-message'
import { storeData } from '../../utils/index-utils';
import Fire from '../../config/firebase'
import {
    launchImageLibrary
  } from 'react-native-image-picker';



const UploadPhoto = ({ navigation, route }) => {
    const {fullname, profession, uid} = route.params;
    const [photoForDB, setPhotoForDB] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(UserPhotoNull);

    const getImage = () => {
        let options = {
            maxWidth: 200,
            maxHeight: 200,
            quality: 1,
            includeBase64: true,
          };
        launchImageLibrary(options, response => {
                console.log('response :', response);
                if(response.didCancel || response.error){
                    showMessage({
                        message: 'pilih foto dulu',
                        type: 'default',
                        backgroundColor: colors.error,
                        color: colors.white,
                    });
                } else {
                    console.log('response getImage: ', response);
                    const source = {uri: response.uri};

                    setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
                    setPhoto(source);
                    setHasPhoto(true);
                }
            });
    };
    

    const uploadAndContinue = () => {
        Fire.database()
          .ref(`mentors/${uid}/`)
          .update({photo: photoForDB});
    
        const data = route.params;
        data.photo = photoForDB;
        
        storeData('user', data);
        navigation.replace('MainApp');
      };
    return (
        <View style={styles.page}>
            <Header title='Upload Photo' onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto }/>}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Gap height={30}/>
                    <Text style={styles.name}>{fullname}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
                <View>
                    <Button title='upload and contiunue' onPress={uploadAndContinue} />
                    <Gap height={30} />
                    <Link title='Skip for this' align='center' size={18}/>
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 60,
        flex: 1,
        justifyContent: 'space-between',


    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        alignItems: 'center',
        //backgroundColor: 'green',
        flex:1,
        justifyContent: 'center',
    },  
    addPhoto: {
        position: 'absolute', //supaya bisa ditumpuk, tapi ditengah
        bottom: 8,
        right: 3,
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4,
    },




})
