import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export default StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: colors.lightRed,
    textAlign: "center",
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 16,
    lineHeight: 24,
    fontStyle: "normal",
    fontWeight:'600',
    color: "white",
  },
  arrowIcon: {
    marginLeft:5,
    marginTop:1
  },
});
