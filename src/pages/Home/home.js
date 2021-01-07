import React,  {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Gap, HomeProfile,  NewsItem } from '../../components/index-components';
import { colors } from '../../utils/color';
import { fonts } from '../../utils/font';
import Fire from '../../config/firebase';
import { showError } from '../../utils/index-utils';

const Home = ({ navigation }) => {
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        //firebase database news-> static
        Fire.database()
            .ref('news/')
            .once('value')
            .then(res => {
                console.log('data :', res.val());
                if (res.val()) {
                    setNews(res.val());
                }
            })
            .catch(err => {
                showError(err.message);
            })
    }, [])

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
                    <Text style={styles.sectionLabel}> News</Text>
                    {
                        news.map(item => {
                            return (
                                <NewsItem
                                    key={item.id}
                                    title={item.title}
                                    date={item.date}
                                    image={item.image}
                                />
                            );
                        })
                    }

                </ScrollView>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 16,
        paddingTop: 40,
        borderBottomRightRadius: 22,
        borderBottomLeftRadius: 22,
    },
    wellcome: {
        fontSize: 26,
        fontFamily: fonts.primary[700],
        color: colors.text.primary,
        marginTop: 20,
        marginBottom: 16,
        maxWidth: 230,
        paddingLeft: 10,
        //backgroundColor: 'yellow'
    },
    category: {
        flexDirection: 'row'
    },
    wrappedScroll: {
        marginHorizontal: -16,
    },
    sectionLabel: {
        fontSize: 22,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        paddingLeft: 10,

    }
})


