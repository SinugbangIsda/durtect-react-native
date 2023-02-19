import { Alert, View } from 'react-native';
import React from 'react';
import Header from '../../Header/Header';
import Button from '../../Button/Button';
import { Fontisto, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import useDarkMode from '../../../hooks/useDarkMode';
import tw from '../../../utils/tw';
import Greetings from '../../Greetings/Greetings';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../../types/RootStackParamList';

const HomeHeader = () => {
    const { setTheme, theme } = useDarkMode();
    const navigation = useNavigation<StackNavigationType>()

  return (
    <Header
        left = {
            <Greetings />
        }
        right = { 
            <>
                <Button
                    twStyles = 'aspect-square rounded-xl'
                    onPress = {() => {
                        navigation.navigate("WhatsNew");
                    }}
                >
                    <MaterialIcons 
                        name = "notifications-none" 
                        size = { 28 } 
                        style = {[ tw `text-black dark:text-white`]} 
                    />
                </Button>
                <Button 
                    onPress = {() => {
                        setTheme(theme === "dark" ? "light": "dark");
                    }}
                    twStyles = 'aspect-square rounded-xl'
                >
                    { theme === "light" ?
                        <Feather 
                            name = "moon" 
                            size = { 28 } 
                            style = {[ tw `text-black dark:text-white`]} 
                        />
                     :
                        <MaterialCommunityIcons 
                            name = "white-balance-sunny" 
                            size = { 28 } 
                            style = {[ tw `text-black dark:text-white`]} 
                        />
                    }
                </Button>
            </>

        }
    />
  )
}

export default HomeHeader
