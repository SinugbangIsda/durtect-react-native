import React from 'react';
import Layout from '../../components/Layout';
import HistoryHeader from '../../components/History/HistoryHeader';
import HistoryList from '../../components/History/HistoryList';
import { ScrollView } from 'react-native';
import tw from '../../utils/tw';

const History = ({ route }: any) => {
  const { id, data } = route.params;

  return (
    <Layout twStyles = "flex-1 justify-center items-center defaultBg">
      <ScrollView
        style = {[ tw `flex-1`]}
        showsVerticalScrollIndicator = { false }
        contentContainerStyle = {{ flexGrow: 1 }}
        nestedScrollEnabled = { true }
      >
        <HistoryHeader data = { data } />
        <HistoryList data = { data } id = { id }/>
      </ScrollView>
    </Layout>
  )
}

export default History;