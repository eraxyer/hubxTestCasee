import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Background() {
    return (
        <View style={styles.container}>
             <Image
                source={require('../assets/images/Object.png')}
                style={styles.image}
              />
        </View>
    )
}
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    },
    image : {
        width : wp('100%'),
        height : hp('100%'),
        resizeMode : 'contain',
        marginTop : hp('95%')

    }
}