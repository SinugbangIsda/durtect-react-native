import { ScrollView } from 'react-native';
import React from 'react';
import Layout from "../../components/Layout";
import { Route, useRoute } from '@react-navigation/native';
import tw from '../../utils/tw';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Text from "../../components/Text";

const Diseases = ({ route }: any) => {
  const { disease, info, symptoms, treatment, variety } = route.params.selectedDisease;
  return (
    <Layout twStyles = "flex-1 justify-center items-center bg-white dark:bg-[#131313]">
      <ScrollView  style = {[ tw `flex-1`]}>
        <Header
          center = {
            <Text twStyles = "text-xl font-bold text-black dark:text-white">
              { disease }
            </Text>
          }
        />
        <Card>
        <Text twStyles = "text-black dark:text-white">
          { info }
        </Text>
        </Card>
        <Card>
          { symptoms.map((value: any, index: any) => (
            <Card 
              key = { index }
            >
              <Text twStyles = "font-bold text-black dark:text-white">
                { value.name }
              </Text>
              <Text twStyles = "text-black dark:text-white">
                { value.description }
              </Text>
            </Card>
          ))} 
        </Card>
        <Card>
          { treatment.map((value: any, index: any) => (
            <Card 
              key = { index }
            >
              <Text twStyles = "font-bold text-black dark:text-white">
                { value.name }
              </Text>
              <Text twStyles = "text-black dark:text-white">
                { value.description }
              </Text>
            </Card>
          ))} 
        </Card>
        <Card>
          { variety.map((value: any, index: any) => (
            <Card 
              key = { index }
            >
              <Text twStyles = "font-bold text-black dark:text-white">
                { value.name }
              </Text>
              <Text twStyles = "text-black dark:text-white">
                { value.description }
              </Text>
            </Card>
          ))}
        </Card>
      </ScrollView>
    </Layout>
  )
}

export default Diseases;