import { FlatList, Image } from "react-native";
import { Styles } from "../../constants";
import { HistoryComponentsProps } from "../../interfaces/Interfaces";
import { getDateFromTimestamp } from "../../utils/getDateFromTimestamp";
import tw from "../../utils/tw";
import Card from "../Card";
import Text from "../Text";

const HistoryList = ({ data }: HistoryComponentsProps) => {

    const noData = () => {
        return (
          <Text twStyles = "text-black dark:text-white">
            No data avaiable.
          </Text>
        )
    }

    return (
        <Card twStyles = "flex-1 justify-center">
            <FlatList 
                data = { data }
                showsVerticalScrollIndicator = { false }
                renderItem = {({ item, index  }: any) => {
                    const timestamp = getDateFromTimestamp(data[index]["timestamp"])
                return (
                    <Card twStyles = "mt-2">
                        <>
                            { index === 0 ? 
                                <Card twStyles = "my-2">
                                <Text twStyles = "font-bold text-xl defaultText">
                                    Today
                                </Text>
                            </Card>
                            :
                                null
                            }
                        </>
                        <Card twStyles = "flex-row items-center">
                            <Image 
                                style = {[ tw `rounded-lg`, Styles.flatListImagesHistory ]}
                                resizeMode = "stretch"
                                source = {{
                                uri: data[index]["image_uri"],
                                cache: "force-cache"
                                }}

                            />
                            <Text twStyles = "text-black dark:text-white text-center ml-4 mt-2">
                                something
                            </Text>
                        </Card>
                    </Card>
                )
                }}
                ListEmptyComponent = { noData }
            />
        </Card>
    )
}

export default HistoryList;