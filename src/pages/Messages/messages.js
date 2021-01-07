import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DummyTopRated1, DummyTopRated2, DummyTopRated3 } from '../../assets/index-assets'
import { Gap } from '../../components/box'
import List from '../../components/part-item/List/list'
import { colors } from '../../utils/color'
import { fonts } from '../../utils/font'

const Messages = ({navigation}) => {
    const [mentors] = useState([
        {
            id:1,
            pict: DummyTopRated1,
            name: 'Alex Nurmanto',
            message: 'wow, its nice to be meet you..'
        },
        {
            id:2,
            pict: DummyTopRated2,
            name: 'Ardi Nurmansyah',
            message: 'terimakasih pak, atas kerjasama..'
        },
        {
            id:3,
            pict: DummyTopRated3,
            name: 'Asti Nurmala',
            message: 'ok'
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                <Gap height={10}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {mentors.map(mentors => {
                        return ( <List
                            key={mentors.id}
                            pict ={mentors.pict}
                            name={mentors.name}
                            desc={mentors.message}
                            onPress={()=> navigation.navigate('Chatting')}
                        />);
                    })}
                </ScrollView>

            </View>
        </View>
    )
}

export default Messages;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 26,
        fontFamily: fonts.primary[700],
        color: colors.text.primary,
        marginTop: 40,
        marginLeft: 16,

    }

})
