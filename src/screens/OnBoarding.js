import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Button, Background, Title } from '../components';
import Swiper from "react-native-swiper";
import LinearGradient from 'react-native-linear-gradient';
import { wp, hp } from '../utils/Responsive'
import images from '../constant/images';

export default function OnBoarding({navigation: {navigate}}) {
  const [index, setIndex] = useState(0); 
  const swiperRef = React.createRef(); // Swiper bileşenine referans verdik.

  const handleContinue = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.state.index;
      if (currentIndex < 2) {
        if (currentIndex === 1) {
          setIndex(1);
        }
        swiperRef.current.scrollBy(1); // Bir sonraki slayda kaydırın
      }
    }
  };


  return (
    <View style={styles.container}>

      <View style={{ height: hp("100%") }}>
        <Swiper ref={swiperRef} loop={false}
          showsButtons={false}
          dotStyle={{
            backgroundColor: "#13231B40",
            width: 6,
            height: 6,
            borderRadius: 6,
          }}
          activeDotStyle={{
            borderColor: "#fff",
            width: 10,
            height: 10,
            borderRadius: 6,
          }}
          activeDotColor="#13231B"

        >
          <View>
            <Title type={1} />

            <View style={styles.body}>
              <Image
                source={images.onBoarding}
                style={styles.image}
              />
            </View>
          </View>

          <View>
            <Background />
            <Title type={2} />

            <View style={styles.body}>
              <Image
                source={images.iphone}
                style={styles.image2}
              />

              <Image
                source={images.artwork}
                style={styles.image3}
              />

              <LinearGradient style={styles.backgroundView} colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
              />
            </View>
          </View>


        </Swiper>
      </View>
      <View style={[styles.footer, { alignItems: 'center', position: 'absolute' }]}>
        <Button text="Contiune" onPress={() => {swiperRef.current.state.index === 1 ? navigate('Paywell') :  handleContinue() }} />
      </View>


    </View>
  )
}
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: wp(100),
    height: hp(83),
    resizeMode: 'contain'
  },
  image2: {
    width: wp(100),
    height: hp(64),
    resizeMode: 'contain',
    marginTop: hp(12)
  },
  image3: {
    width: wp(100),
    height: hp(35),
    resizeMode: 'contain',
    marginTop: hp(4),
    position: 'absolute'
  },
  footer: {
    bottom: hp(10),
    alignItems: 'center',
  },
  linearGradient: {
    width: 375,
    height: 235,
    bottom: hp(0),
    position: "absolute",
  },
  backgroundView: {
    width: wp(100),
    height: hp(27),
    bottom: -hp(8),
    position: 'absolute',
    overflow: 'visible',
    opacity: 0.5
  },
}