import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {ICPetaniBuah, ICPetaniBunga, ICPetaniKebun, ICPetaniLadang} from '../../../assets/index-assets';
import {colors, fonts} from '../../../utils/index-utils'

const MentorCategory = ({category, onPress}) => {
    const Icon = () =>{
        if (category === 'Petani Ladang'){
            return <ICPetaniLadang style={styles.ilustration} />;
        }
        if (category === 'Petani Buah'){
            return <ICPetaniBuah style={styles.ilustration} />;
        }
        if (category === 'Petani Bunga'){
            return <ICPetaniBunga style={styles.ilustration} />;
        }
        if (category === 'Petani Kebun'){
            return <ICPetaniKebun style={styles.ilustration} />;
        }
        return <ICPetaniLadang style={styles.ilustration}/>;
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon/>
            <Text style={styles.label}>Mentor</Text>
            <Text style={styles.category}>{category}</Text>
            
        </TouchableOpacity>
    )
}

export default MentorCategory;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 110,
        height: 130,
    },
    ilustration : {
        marginBottom: 28,
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary,
    },
    category: {
        fontSize: 12,
        fontFamily : fonts.primary[600],
        color: colors.text.primary,
    }
})
