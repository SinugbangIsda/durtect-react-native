import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import tw from '../../utils/tw';
import { HeaderProps } from '../../interfaces/Interfaces';
import useDarkMode from '../../hooks/useDarkMode';

const Header = ({ left, center, right }: HeaderProps) => {
  return (
    <>
      <View  style = {[ tw `w-full flex-row my-3 justify-between items-center`]}>
        { left ? 
          left 
        :
          <View style = {[ tw `mx-4` ]}/> 
        }
        { center ? 
          center 
        :
          <View style = {[ tw `mx-4` ]}/>
        }
        { right ? 
          right
        :
          <View style = {[ tw `mx-4` ]}/>
        }
      </View>
    </>  
  )
}

export default Header;