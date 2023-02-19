import React from 'react';
import { Image } from "react-native";
import Text from '../Text';
import Card from '../Card';
import diseases from "../../assets/data/diseases.json";
import { StackNavigationType } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import tw from '../../utils/tw';
import { Styles } from '../../constants/Styles';
import { AntDesign } from '@expo/vector-icons'; 
import HorizontalRule from '../HorizontalRule';
import Pill from '../Pill';
import useDarkMode from '../../hooks/useDarkMode';

const Discover = () => {
  const navigation = useNavigation<StackNavigationType>();
  const { renderTheme } = useDarkMode();
  renderTheme();
  
  return (
    <Card twStyles = "mt-2">
      <Text twStyles = "text-xl font-bold text-black dark:text-white">
        Discover
      </Text>
      <Card 
        twStyles = 'flex-col mt-2 w-full rounded-2xl p-4 bg-white dark:bg-[#262628]'
      >
        { diseases.map((value: any, index: any) => (
          <Card
            twStyles = "flex-row justify-center items-center w-full"
            key = { index }
          >
            <Card twStyles = "flex-1 flex-col">
              <Card twStyles = "flex-1 flex-row">
                <Card
                  pressable
                  twStyles = "flex-row flex-1"
                  onPress = {() => {
                    navigation.navigate("Diseases", {
                      selectedDisease: value
                    });
                  }}
                >
                  <Card twStyles = "flex-row justify-center items-center">
                    <Image 
                      style = {[ tw `rounded-lg`, Styles.flatListImagesDiscover ]}
                      resizeMode = "stretch"
                      source = { require("../../assets/images/abstract-tree.jpg") }
                    />
                    <Card twStyles = 'flex justify-center items-start mx-2'>
                      <Text twStyles = "font-bold text-black dark:text-white">
                        { value.disease }
                      </Text>
                      <Pill
                        twBackgroundColor = "gray-300"
                        twDarkBackgroundColor = "gray-500"
                      >
                        <Text twStyles = "text-sm font-bold text-black dark:text-white">
                          gege
                        </Text>
                      </Pill>
                    </Card>
                  </Card>
                </Card>
                <Card 
                  twStyles = "justify-center"
                >
                  <AntDesign 
                    name = "right" 
                    size = { 24 } 
                    style = {[ tw `text-black dark:text-white`]}
                  />
                </Card>
              </Card>
              <Card
                twStyles = {`${index === diseases.length - 1 ? '': 'my-5'}`}
              >
                <HorizontalRule 
                  twStyles = {`${index === diseases.length - 1 ? '': 'border-black dark:border-white'}`}
                  noRender = { index === diseases.length - 1 ? true : false }
                />
              </Card>
            </Card>
          </Card>
        ))} 
      </Card>
    </Card>
  )
}

export default Discover;