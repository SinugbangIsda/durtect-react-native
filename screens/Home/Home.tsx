import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../../components/Layout';
import tw from '../../utils/tw';
import HomeHeader from '../../components/Home/HomeHeader';
import NavMenu from '../../components/Home/NavMenu';
import RecentHistory from '../../components/Home/RecentHistory';
import Discover from '../../components/Home/Discover';

const Home = () => {
  return (
    <>
      <Layout twStyles = "flex-1 justify-center items-center bg-white dark:bg-[#141414]">
        <ScrollView 
          style = {[ tw `flex-1` ]}
          showsVerticalScrollIndicator = { false }
          nestedScrollEnabled = { true }
        >
          <HomeHeader />
          <NavMenu />
          <RecentHistory />
          <Discover />
        </ScrollView>
      </Layout>
    </>
  );
}

export default Home;