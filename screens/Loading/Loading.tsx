import { BarIndicator } from "react-native-indicators";
import React from 'react';
import Layout from '../../components/Layout';
import useDarkMode from "../../hooks/useDarkMode";

const Loading = () => {
  const { theme } = useDarkMode();

  return (
    <Layout twStyles = "flex-1 justify-center items-center bg-white dark:bg-[#0B0E11]">
      <BarIndicator color = { theme === "dark" ? "white" : "black"} count = { 5 } />
    </Layout>
  )
}

export default Loading;