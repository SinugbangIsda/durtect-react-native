import { Image, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Card from '../Card';
import Text from "../Text";
import tw from '../../utils/tw';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from "../../types/types";
import { BASE_URL, Styles } from '../../constants';
import { GlobalContext } from '../../context/Global';
import moment, { unix } from 'moment';

const RecentHistory = () => {
  const navigation = useNavigation<StackNavigationType>();
  const [ recentLogs, setRecentLogs ] = useState<any>();
  const [ allLogs, setAllLogs ] = useState<any>();
  const [ recentLogsIDs, setRecentLogsID ] = useState<any>();
  const [ allLogsIDs, setAllLogsIDs ] = useState<any>();
  const [ loading, setLoading ] = useState<boolean>(false);
  const { dispatch, data } = useContext(GlobalContext);
  const { user_id } = data;

  const fetchData = async () => {
    setLoading(true);
    const recentData = new FormData();
    const allData = new FormData();
    recentData.append("user_id", user_id);
    allData.append("user_id", user_id);

    fetch(BASE_URL.recent_history, {
      method: "POST",
      mode: "cors",
      body: recentData,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    .then((res) => res.json())
    .then(async (value) => {
      const keys = Object.keys(value);
      const data = Object.values(value);
      if (data[0] === "empty"){ 
        setRecentLogs(null)
        setRecentLogsID(null)
      } else {
        setRecentLogsID(keys);
        setRecentLogs(data);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "SET_ERROR",
        payload: err
      });
      setRecentLogs(null);
    });

    fetch(BASE_URL.all_history, {
      method: "POST",
      mode: "cors",
      body: allData,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    .then((res) => res.json())
    .then(async (value) => {
      const keys = Object.keys(value);
      const data = Object.values(value);
      if (data[0] === "empty"){ 
        setAllLogs(null)
        setAllLogsIDs(null)
      } else {
        setAllLogs(keys);
        setAllLogsIDs(data);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "SET_ERROR",
        payload: err
      });
      setAllLogs(null);
      setLoading(false);
    });

  };

  const noData = () => {
    return (
      <Text twStyles = "text-black dark:text-white">
        No data avaiable.
      </Text>
    )
  }

  const sortResultsData = (data: any) => {
    const { xmin, ymin, xmax, ymax, confidence, class: classValue, name, image_uri, status} = data;
    if (status === "null") {
      return Object.values(data);
    } else {
        return Object.keys(xmin).map(index => {
            return {
                xmin: xmin[index], 
                ymin: ymin[index], 
                xmax: xmax[index], 
                ymax: ymax[index], 
                confidence: confidence[index], 
                class: classValue[index], 
                name: name[index],
                image_uri: image_uri,
                status: status
            };
        });
    }
  }

  useEffect(() => {
    fetchData();
  }, [ data ]);

  return (
    <Card twStyles = 'mt-2'>
      <Card twStyles = 'flex-row justify-between items-center'>
        <Text twStyles = "font-bold text-xl text-black dark:text-white">
          Recent History
        </Text>
        <Text 
          twStyles = "font-bold text-black dark:text-white"
          onPress = {() => { 
            navigation.navigate("History", { 
              data: allLogs,
              id: allLogsIDs
            });
          }}
        >
          See all
        </Text>
      </Card>
      <Card twStyles = "flex-row justify-between items-center mt-2">
        <Card twStyles = "flex-1 w-full">
          <FlatList 
            data = { recentLogs }
            horizontal
            showsHorizontalScrollIndicator = { false }
            renderItem = {({ item, index  }: any) => { 
              const timestamp = moment(unix(recentLogs[index]["timestamp"].toString())).format("L")
              return (
                <Card 
                  pressable
                  twStyles = {`flex-1 flex justify-center items-center ${index === recentLogs.length - 1 ? '' : 'mr-4'}`}
                  key = { index}
                  onPress = {() => {
                    const data = sortResultsData(recentLogs[index])
                    navigation.replace("Loading");
                    setTimeout(() => {
                      navigation.replace("Results", { 
                        data: data,
                        id: recentLogsIDs[index]
                      });
                    }, 1000)
                  }}
                >
                  <Image 
                    style = {[ tw `rounded-lg`, Styles.flatListImagesHistory ]}
                    resizeMode = "stretch"
                    source = {{
                      uri: recentLogs[index]["image_uri"],
                      cache: "force-cache"
                    }}

                  />
                  <Text twStyles = "text-black dark:text-white text-center mt-2">
                    { timestamp }
                  </Text>
                </Card>
              )
            }}
            ListEmptyComponent = { noData }
          />
        </Card>
      </Card>
    </Card>
  )
}

export default RecentHistory;