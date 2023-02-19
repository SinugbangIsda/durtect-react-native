import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    dropShadow:{
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    bottomSheetShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    flatListImagesHistory: {
        height: deviceWidth / 3,
        width: deviceWidth / 3
    },
    flatListImagesDiscover: {
        height: deviceWidth / 5,
        width: deviceWidth / 5
    },
    resultsImage: {
        height: deviceHeight / 3,
        width: deviceWidth - 32,
        resizeMode: "stretch"
    },
    lineStyle:{
        borderWidth: 0.5,
   }
});