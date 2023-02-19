import React from 'react';
import Layout from '../../components/Layout';
import Text from "../../components/Text";
import Card from '../../components/Card';
import Header from '../../components/Header';
import { FlatList } from 'react-native';

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
    <Layout twStyles = "flex-1 justify-center items-center bg-white dark:bg-[#131313]">
      <Card  twStyles = "flex-1 items-center">
        <Header 
          center = {
            <Text twStyles = "text-xl font-bold text-black dark:text-white">
              History
            </Text>
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