import { StyleSheet } from "react-native";
import { colors } from "../../../../../constants";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  img: {
    width: 35,
    height: 40,
  },
  card: {
    paddingBottom: 26,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    marginBottom: 28,
    width: "100%",
    flexDirection: "row",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 27,
  },
  subTitle: {
    color: colors.placeholderColor,
    fontWeight: "600",
    fontFamily: "Poppins",
    lineHeight: 21,
  },
  titleContainer: {
    paddingLeft: 28,
  },
});
