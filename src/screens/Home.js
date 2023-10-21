import { View, Text, Image, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { wp, hp, height, RFValue } from '../utils/Responsive'
import {GradientText} from '../components/';
import images from '../constant/images';
import APIS from '../services/api/';

export default function Home(props) {
    const [questions, setQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [initComplete, setInitComplete] = useState(false);

    useEffect(() => {
        async function fetchData() {
          try {
            const categoriesData = await APIS.getCategories();
            setCategories(categoriesData);
            const data = await APIS.getQuestions();
            setQuestions(data);
            setInitComplete(true);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        if (!initComplete ) {
            fetchData();
        }
            
      }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/homebg.png')}
                style={styles.bg}
            />
            <View style={styles.headerText}>
                <Text style={styles.hiText}>Hi, plant lover!</Text>
                <Text style={styles.goodAfternoonText}>Good Afternoon! ⛅</Text>
            </View>

                <View style={styles.searchBar}>
                    {images.searchIcon}
                    <TextInput placeholder="Search for plants" style={styles.searchInput} />
                </View>
                <ScrollView>
                <View style={{ alignItems: 'center', marginTop: hp('1%') }}>


                <View style={styles.premiumBox}>
                    {images.send}
                    <View>
                        <GradientText colors={['rgba(229, 201, 144, 1)', 'rgba(228, 176, 70, 1)']} style={styles.premiumText}>FREE Premium Available</GradientText>
                        <GradientText colors={['rgba(255, 222, 156, 0.8)', 'rgba(245, 194, 91, 0.8)']} style={styles.premiumDescriptionText}>Tap to upgrade your account!</GradientText>
                    </View>

                    {images.arrow}
                </View>


                <View style={styles.getStarted}>

                    <Text style={styles.getStartedText}>Get Started</Text>

                    <FlatList
                        data={questions}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.questionBox}>
                                <Image
                                    source={{uri : item.image_uri}}
                                    style={styles.img}
                                />
                                <Text style={styles.imgText}>{item.title}</Text>
                            </View>
                        )}
                    />
                </View>

                <View style={styles.plants}>
                    <FlatList
                        data={categories}
                        contentContainerStyle={{ paddingBottom: hp(2) }}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={styles.plantBox}>
                                <Image
                                    source={{uri : item.image.url}}
                                    style={styles.imgCategory}
                                />
                                <Text style={styles.plantBoxText}>{item.title}</Text>
                            </View>
                        )}
                    />

                </View>



            </View>
            </ScrollView>
        </View>
    )
}
const styles = {
    container: {
        flex: 1,
    },
    bg: {
        width: wp(100),
        height: hp(21),
        position: 'absolute',
    },
    headerText: {
        marginTop: hp(6),
        marginLeft: 24
    },
    hiText: {
        fontFamily: 'Rubik',
        fontWeight: 400,
        fontSize: RFValue(13),
        lineHeight: 19,
    },
    goodAfternoonText: {
        fontFamily: 'Rubik',
        fontWeight: 500,
        fontSize: RFValue(19),
        lineHeight: 28,
    },
    searchBar: {
        width: wp(90),
        height: hp(6),
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#3C3C4340',
        opacity: 0.88,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf   : 'center',
        marginTop : hp(1),
        paddingHorizontal : wp(3)
    },
    searchInput: {
        width: wp(85),
        height: hp(6),
        fontFamily: 'Rubik',
        fontWeight: 400,
        fontSize: RFValue(13),
        lineHeight: 16,
        color: '#AFAFAF',
        marginTop : height <= 736 ? hp(0) : hp(0.5),
        marginLeft: wp(1),
    },
    premiumBox: {
        width: wp(90),
        height: hp(8),
        borderRadius: 12,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#24201A',
        marginTop: hp('4%'),
        paddingHorizontal : 15
    },
    premiumText: {
        fontFamily: 'Rubik',
        fontWeight: 700,
        fontSize: RFValue(16),
        lineHeight: 21,
    },
    premiumDescriptionText: {
        fontFamily: 'Rubik',
        fontWeight: 400,
        fontSize: RFValue(14),
    },
    questionBox: {
        width: wp(70),
        height: hp(23),
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        marginRight: 10
    },
    getStarted: {
        width: wp(100),
        borderRadius: 12,
        marginTop: hp(2),
        marginLeft: wp(10)
    },
    getStartedText: {
        fontFamily: 'Rubik',
        fontWeight: 500,
        fontSize: RFValue(16),
        lineHeight: 20,
        color: '#13231B',
        marginBottom: 12
    },
    img: {
        width: wp(70),
        height: hp(23),
        borderRadius: 12
    },
    imgCategory: {
        width: wp(43),
        height: hp(20),
        borderRadius: 12
    },
    imgText: {
        width: wp(55),
        fontFamily: 'Rubik',
        fontWeight: 500,
        fontSize: RFValue(14),
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 5,
        padding: 10
    },
    plants: {
        width: wp(90),
        marginTop: hp(2),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    plantBox: {
        width: wp(43),
        height: hp(20),
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(41, 187, 137, 0.18)',
        backgroundColor: '#FFFFFF1A',
        marginRight: 15,
        marginBottom: 15
    },
    plantBoxText: {
        width: wp(30),
        fontFamily: 'Rubik',
        fontWeight: 500,
        fontSize: RFValue(15),
        lineHeight: 21,
        color: '#13231B',
        position: 'absolute',
        top: 10,
        padding: 10
    }

}