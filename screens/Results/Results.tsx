import React, { useContext } from 'react';
import { GlobalContext } from '../../context/Global';
import ResultsData from '../../components/Results/ResultsData';
import { ScrollView } from 'react-native';
import tw from '../../utils/tw';
import ResultsImage from '../../components/Results/ResultsImage';
import { SheetProvider } from 'react-native-actions-sheet';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import ResultsEmpty from '../../components/Results/ResultsEmpty';
import ResultsHeader from '../../components/Results/ResultsHeader';

const Results = ({ route }: any) => {
  const { data, id } = route.params;

  return (
    <SheetProvider>
      <Layout twStyles = "flex-1 justify-center items-center bg-white dark:bg-[#131313]">
        <ScrollView
          style = {[ tw `flex-1`]}
          showsVerticalScrollIndicator = { false }
          contentContainerStyle = {{ flexGrow: 1 }}
        >
          <ResultsHeader 
            data = { data }
            id = { id }
          />
          <Card twStyles = "flex-1">
            { data[0].status === "OK" ?
              <>
                <ResultsImage  data = { data } />
                <ResultsData  data = { data }/>
              </>
              :
                <ResultsEmpty />
            }
          </Card>
        </ScrollView>
      </Layout>
    </SheetProvider>
  )
}
export default Results;