import React from 'react';
import Layout from '../../components/Layout';
import Text from "../../components/Text";
import Card from '../../components/Card';
import Header from '../../components/Header';
import { FlatList } from 'react-native';
import Button from '../../components/Button';
import { SheetManager } from 'react-native-actions-sheet';
import { BASE_URL } from '../../constants';

const History = ({ route }: any) => {
  const { data } = route.params;


  const noData = () => {
    return (
      <Text twStyles = "text-black dark:text-white">
        No data avaiable.
      </Text>
    )
  }

  return (
    <Layout twStyles = "flex-1 justify-center items-center defaultBg">
      <Card  twStyles = "flex-1 items-center">
        <Header 
          center = {
            <Card twStyles = "flex-row justify-center items-center">
              <Text twStyles = "text-xl font-bold defaultText">
                History
              </Text>
              <Button 
                onPress = {() => {
                  SheetManager.show("delete-result", { payload: [ BASE_URL.delete_all ] })
                }}
              >
                <Text twStyles = "defaultText mx-5">
                  Wow
                </Text>
              </Button>
            </Card>
          }
        />
        <FlatList 
            data = { data }
            showsVerticalScrollIndicator = { false }
            renderItem = {({ item, index  }: any) => { 
              return (
                <Card>
                  <Text twStyles = "text-black dark:text-white">
                    gege
                  </Text>
                </Card>
              )
            }}
            ListEmptyComponent = { noData }
          />
      </Card>
    </Layout>
  )
}

export default History;