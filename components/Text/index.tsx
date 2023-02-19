import * as Custom from 'react-native';
import React, { useEffect } from 'react';
import { TextProps } from '../../interfaces/Interfaces';
import tw from '../../utils/tw';
import useDarkMode from '../../hooks/useDarkMode';

const Text = ({ children, twStyles, onPress, key }: TextProps) => {
  return (
    <Custom.Text 
      style = {[ twStyles ? tw `${twStyles}` : null ]}
      key = { key }
      onPress = { onPress }
    >
      { children }
    </Custom.Text>
  )
}

export default Text;