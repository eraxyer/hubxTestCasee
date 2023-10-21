import { View, Text, Image, FlatList, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { wp, hp, height, RFValue } from '../utils/Responsive'
import { Button } from '../components/';
import LinearGradient from 'react-native-linear-gradient';
import images from '../constant/images';

export default function Paywell({ navigation: { navigate, replace } }) {

    const [isMonthlySelected, setIsMonthlySelected] = useState(true);
    const [isYearlySelected, setIsYearlySelected] = useState(false);

    const handleSelectMonthly = () => {
        setIsMonthlySelected(true);
        setIsYearlySelected(false);
    };

    const handleSelectYearly = () => {
        setIsMonthlySelected(false);
        setIsYearlySelected(true);
    };

    const data = [
        { title: 'Unlimited', description: 'Plant Identify', icon: images.scanner },
        { title: 'Faster', description: 'Process', icon: images.speed },
        { title: 'Detailed', description: 'Plant care', icon: images.speed },
    ];

    return (
        <View style={styles.container}>
            <Image
                source={images.background}
                style={styles.image4}
            />

            <View style={styles.bg} />
            <TouchableOpacity style={styles.close} onPress={() => replace('Home')}>
                {images.close}
            </TouchableOpacity>


            <View style={styles.main}>
                <View style={styles.textGroup}>
                    <Text style={styles.titleText}>PlantApp <Text style={{ fontWeight: 300 }}>Premium</Text></Text>
                    <Text style={styles.descriptionText}>Access All Features</Text>
                </View>

                <View style={styles.body}>
                    <FlatList
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.box}>
                                <View style={styles.icon}>
                                    {item.icon}
                                </View>
                                <View style={styles.boxText}>
                                    <Text style={styles.boxTitleText}>{item.title}</Text>
                                    <Text style={styles.boxDescriptionText}>{item.description}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>


                <View style={styles.footer}>
                    <TouchableOpacity style={isMonthlySelected ? [styles.activeChoiceView, { alignItems: 'center', justifyContent: 'flex-start', }] : styles.choiceView} onPress={handleSelectMonthly}>
                        {isMonthlySelected ? <View style={styles.fullCircle}>
                            <View style={styles.dot} />
                        </View> : <View style={styles.emptyCircle} />}
                        <View style={styles.timeTexts}>
                            <Text style={styles.timeText}>1 Month</Text>
                            <Text style={styles.timeDetailText}>$2.99/month, auto renewable</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSelectYearly}>
                        <LinearGradient
                            colors={['rgba(40, 175, 110, 0.17)', 'rgba(40, 175, 110, 0)']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 0, y: 1 }}
                            style={isMonthlySelected ? [styles.choiceView, { marginBottom: 25 }] : [styles.activeChoiceView, { alignItems: 'center', marginBottom: 25 }]}>

                            <View style={styles.activeView}>
                                {isYearlySelected ? <View style={styles.fullCircle}>
                                    <View style={styles.dot} />
                                </View> : <View style={styles.emptyCircle} />}
                                <View style={styles.timeTexts}>
                                    <Text style={styles.timeText}>1 Year</Text>
                                    <Text style={styles.timeDetailText}>First 3 days free, then $529.99/year</Text>
                                </View>
                            </View>

                            {isYearlySelected ? <View style={styles.saveView}>
                                <Text style={styles.saveText}>Save 50%</Text>
                            </View> : null
                            }
                        </LinearGradient>
                    </TouchableOpacity>

                    <Button text="Try free for 3 days" onPress={()=> navigate('Home')} />

                    <Text style={styles.paymentDescText}>
                        After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
                    </Text>

                    <Text style={styles.termText}>Terms  •  Privacy  •  Restore</Text>
                </View>
            </View>

        </View>
    )
}
const styles = {
    container: {
        flex: 1
    },
    image4: {
        width: wp(100),
        height: hp(60),
    },
    bg: {
        backgroundColor: '#101e16',
        width: wp(100),
        height: hp(40)
    },
    main: {
        width: wp(100),
        position: 'absolute',
        marginTop: height <= 736 ? hp(30) : hp(34),
        alignItems: 'center'
    },
    titleText: {
        fontFamily: 'Rubik',
        fontSize: RFValue(27),
        fontWeight: 800,
        color: '#ffff'
    },
    boxTitleText: {
        fontFamily: 'Rubik',
        fontSize: RFValue(21),
        fontWeight: 500,
        color: '#ffff'
    },
    boxDescriptionText: {
        fontFamily: 'Rubik',
        fontSize: RFValue(12),
        fontWeight: 400,
        color: '#FFFFFFB2',
        lineHeight: 18
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('100%'),
        marginVertical: 10,
        marginLeft: wp(10)
    },
    textGroup: {
        width: wp(90),
        alignItems: 'flex-start',
        marginBottom: 10
    },
    box: {
        width: wp(42),
        height: wp(36),
        backgroundColor: '#24312A',
        borderRadius: 14,
        justifyContent: 'space-between',
        padding: 20,
        marginRight: 10
    },
    descriptionText: {
        fontFamily: 'Rubik',
        fontSize: RFValue(18),
        fontWeight: 300,
        color: '#FFFFFFB2',
        marginTop: 5
    },
    choiceView: {
        width: wp(90),
        height: hp(7),
        borderWidth: 0.5,
        borderRadius: 14,
        borderColor: '#FFFFFF4D',
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1D2A24',
        marginVertical: 5,
    },
    activeChoiceView: {
        width: wp(90),
        height: hp(7),
        borderWidth: 1.5,
        borderRadius: 14,
        borderColor: '#28AF6E',
        marginVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15
    },
    paymentDescText: {
        fontFamily: 'Rubik',
        fontSize: RFValue(8.2),
        fontWeight: 300,
        color: '#FFFFFF',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.53,
        width: wp(90)
    },
    termText: {
        fontFamily: 'Rubik',
        fontSize: RFValue(11),
        fontWeight: 400,
        color: '#FFFFFF',
        opacity: 0.50,
        textAlign: 'center',
        marginTop: 10,
    },
    icon: {
        width: 40,
        height: 40,
        backgroundColor: '#0000003D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyCircle: {
        backgroundColor: '#FFFFFF26',
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    fullCircle: {
        backgroundColor: '#28AF6E',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        backgroundColor: '#ffff',
        width: 8,
        height: 8,
        borderRadius: 4
    },
    timeTexts: {
        marginLeft: 10
    },
    timeText: {
        fontFamily: 'Rubik',
        fontSize: RFValue(15),
        fontWeight: 500,
        lineHeight: 21,
        color: '#FFFFFF',
    },
    timeDetailText: {
        fontFamily: 'Rubik',
        fontSize: RFValue(12),
        fontWeight: 300,
        opacity: 0.70,
        color: '#FFFFFF',
    },
    saveView: {
        width: wp(20),
        height: 26,
        backgroundColor: '#28AF6E',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 12,
        marginBottom: 32,
    },
    saveText: {
        fontFamily: 'Rubik',
        fontSize: RFValue(10),
        fontWeight: 500,
        lineHeight: 18,
        color: '#FFFFFF',
    },
    close: {
        width: 33,
        height: 33,
        backgroundColor: '#000000',
        opacity: 0.60,
        borderRadius: 20,
        position: 'absolute',
        top: hp('6%'),
        right: wp('6%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
}