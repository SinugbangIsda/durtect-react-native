import { Pressable, View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { CardProps } from '../../interfaces/Interfaces';
import tw from '../../utils/tw';
import { BlurView } from "expo-blur";
const Card = ({ children, twStyles, onPress, blur, touchableOpacity, activeOpacity, pressable }: CardProps ) => {
  if (pressable) {
    return (
      <Pressable 
        style = {[ twStyles ?  tw `${twStyles}` : null ]}
        onPress = { onPress }
      >
        { children }
      </Pressable>
    )
  } else if ( touchableOpacity ) {
    return (
      <TouchableOpacity
        activeOpacity = { activeOpacity }
        onPress = { onPress}
      >
        { children}
      </TouchableOpacity>
    )
  } else if (blur) {
    return (
      <BlurView
        style = {[ twStyles ? tw `${twStyles}`: null ]}
      >
        { children }
      </BlurView>
    )
  } else {
    return(
      <View
        style = {[ twStyles ?  tw `${twStyles}` : null ]}
      >
        { children }
      </View>
    )
  }
}

export default Card;
