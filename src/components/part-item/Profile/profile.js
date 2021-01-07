import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils/index-utils';
import { IconRemovePhoto, UserDummy } from '../../../assets/index-assets'


const Profile = ({ name, profession, isRemove, photo , onPress}) => {
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderPicture}>
                    <Image source={photo} style={styles.avatar} />
            </View>
            )}
            {isRemove && (
                <TouchableOpacity style={styles.borderPicture} onPress={onPress}>
                    <Image source={photo} style={styles.avatar} />
                    {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
                </TouchableOpacity>
            )}
            {name && (
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
            )}

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,

    },
    borderPicture: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 16,
        textTransform: 'capitalize'
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 2,
    },
    removePhoto: {
        position: 'absolute',
        right: 8,
        bottom: 8,
    }
})
