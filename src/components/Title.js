import { View, Text, Image } from 'react-native';
import React from 'react';
import { wp, hp, height } from '../utils/Responsive'

export default function Title({ type }) {
    return (
        <View style={styles.container}>
            {type === 1 ? (
                <View>
                    <Text style={styles.onBoardingText}>Take a photo to <Text style={{ fontWeight: 800 }}>identify</Text> the plant!</Text>
                    <Image source={require('../assets/images/Brush.png')}
                        style={styles.brushImage} />
                </View>
            ) : type === 2 ? (
                <View>
                    <Text style={styles.onBoardingText}>Get plant <Text style={{ fontWeight: 800 }}>care guides</Text></Text>
                    <Image source={require('../assets/images/Brush.png')}
                        style={styles.brushImage2} />
                </View>
            ) : null}
        </View>
    );
}

const styles = {
    container: {},
    onBoardingText: {
        width: wp('80%'),
        fontFamily: 'Rubik',
        fontSize: 28,
        fontWeight: 500,
        marginTop: hp('10%'),
        marginLeft: 24,
    },
    onBoardingText2: {
        fontFamily: 'Rubik',
        fontSize: 28,
        fontWeight: 500,
        marginTop: hp('10%'),
        width: 315,
        marginLeft: 24,
    },
    brushImage: {
        width: wp('35%'),
        height: hp('10%'),
        resizeMode: 'contain',
        position: 'absolute',
        marginTop: height <= 736 ? hp(11.5) : hp(9.5),
        marginLeft: height <= 736 ? wp(54) : wp(45),
    },
    brushImage2: {
        width: wp('40%'),
        height: hp('10%'),
        resizeMode: 'contain',
        position: 'absolute',
        marginTop: height <= 736 ? hp(11.5) : hp(9.5),
        marginLeft: height <= 736 ? wp(38) : wp(32),
    },
};
