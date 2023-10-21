import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { wp, hp, RFValue } from '../utils/Responsive'
import {Button} from '../components/';
import LinearGradient from 'react-native-linear-gradient';
import images from '../constant/images';


export default function Welcome({navigation: {navigate}}) {

  return (
    <LinearGradient style={styles.linearGradient} colors={[
      "#F8FAFF",
      "#FAFAFA",
    ]}>

      <View style={styles.textView}>
        <Text style={styles.welcomeText}>Welcome to <Text style={[styles.test, { fontWeight: 700 }]}>PlantApp</Text></Text>
        <Text style={styles.detailText}>Identify more than 3000+ plants and 88% accuracy.</Text>
      </View>

      <View style={styles.body}>
        <Image
          source={images.getStarted}
          resizeMode='contain'
          style={styles.image} /> 
      </View>

      <View style={styles.footer}>
        <Button text={"Get Started"} onPress={() => navigate('OnBoarding')} />

        <View style={styles.text}>
          <Text style={styles.descriptionText}>By tapping next, you are agreeing to PlantID</Text>

          <View style={styles.termsView}>
            <TouchableOpacity>
              <Text style={styles.descriptionText2}>Terms of Use</Text>
            </TouchableOpacity>
            <Text style={[styles.descriptionText2, { textDecorationLine: 'none' }]}>& </Text>
            <TouchableOpacity>
              <Text style={styles.descriptionText2}>Privacy Policy.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </LinearGradient>
  )
}
const styles = {
  linearGradient: {
    width: wp(100),
    height: hp(100),
    flex: 1,
    justifyContent: 'space-between'
  },
  welcomeText: {
    fontFamily: 'Rubik',
    fontWeight: 400,
    fontSize: RFValue(24),
    color: '#13231B'
  },
  textView: {
    marginTop: 59,
    marginLeft: 24
  },
  detailText: {
    width: RFValue(220),
    marginTop: hp(1),
    color: '#13231BB2',
    fontSize : RFValue(12),
  },
  image: {
    marginTop : hp(1),
    width: wp(100),
    height: hp(63),
  },
  footer: {
    alignItems: 'center',
    marginBottom: hp(5),
  },
  text: {
    alignItems: 'center'
  },
  termsView: {
    flexDirection: 'row',
  },
  descriptionText: {
    marginTop: hp(2),
    width: wp(65),
    fontFamily: 'Rubik',
    fontSize: 11,
    color: '#597165B2',
    fontWeight: 400,
    textAlign: 'center'
  },
  descriptionText2: {
    marginTop: hp(0.3),
    fontFamily: 'Rubik',
    fontSize: 11,
    color: '#597165B2',
    fontWeight: 400,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },

}