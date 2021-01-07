import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import { DummyTopRated1, IconStar } from '../../../assets/index-assets';
import { colors } from '../../../utils/color';
import { fonts } from '../../../utils/font';

const RatedMentor = ({onPress, name, desc, avatar}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{desc}</Text>
            </View>
            <View style={styles.rate}>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
            </View>
        </TouchableOpacity>
    )
}

export default RatedMentor;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
        //backgroundColor: 'yellow'
    },
    profile :{
        flex: 1,
        //backgroundColor: 'yellow'
    },  
    avatar : {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginRight: 15,
        marginLeft: 10,
    },
    rate :{
        paddingTop: 15,
        flexDirection:'row',
    },
    name : {
        fontSize: 17,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 3,
    },
    category :{
        fontSize : 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2,
    }
})
