import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';
import Layout from "../../components/Layout";
import Text from '../../components/Text';
import tw from '../../utils/tw';
import updates from "../../assets/data/updates.json";

const WhatsNew = () => {
  return (
    <Layout twStyles = "flex-1 justify-center items-center bg-white dark:bg-[#131313]">
      <ScrollView style = {[ tw `flex-1`]}>
        <Header
          center = {
            <Text twStyles = "text-xl font-bold text-black dark:text-white">
              Whats New
            </Text>
          }
        />
      </ScrollView>
    </Layout>
  )
}

export default WhatsNew;