import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 37,
    paddingLeft: 34,
    paddingRight: 34,
    borderTopLeftRadius:46,
    borderTopRightRadius:46,
  },
  searchIcon: {
    position: "absolute",
    left: 20,
    top:12
  },
  textInput: {
    borderRadius: 11,
    backgroundColor: colors.lightGrey,
    alignSelf: "center",
    width: 300,
    height: 50,
    paddingLeft: 50,
  },
  stationList:{
    marginTop:28
  }
});
