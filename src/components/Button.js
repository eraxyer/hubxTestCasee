import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { wp, hp, RFValue } from '../utils/Responsive'


export default function Button(props) {
  return (
      <TouchableOpacity style={styles.button} onPress={props.onPress} >
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
  )
}
const styles = {
  button : {
    width : wp(90),
    height : hp(7),
    backgroundColor : '#28AF6E',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 12,
  },
  buttonText : {
    fontFamily : 'Rubik',
    fontWeight : 700,
    fontSize : RFValue(15),
    color : '#ffff'
  }
}