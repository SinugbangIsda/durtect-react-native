import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Styles } from '../../constants/Styles';
import { GlobalContext } from '../../context/Global';
import useDarkMode from '../../hooks/useDarkMode';
import { LayoutProps } from '../../interfaces/Interfaces';
import tw from '../../utils/tw';
import Card from '../Card';

const Layout = ({ children, twStyles, noSpacing }: LayoutProps ) => {
  const { theme } = useDarkMode();

  return (
    <>
      <StatusBar style = { theme  === "dark" ? "light" : "dark"} />
      <SafeAreaView style = {[ Styles.AndroidSafeArea, tw `${twStyles}`]}>
        { noSpacing ?
          <Card>
            { children }
          </Card>
        :
          <Card twStyles =  "mx-4">
            { children }
          </Card>
        }
      </SafeAreaView>
    </>
  )
}

export default Layout;