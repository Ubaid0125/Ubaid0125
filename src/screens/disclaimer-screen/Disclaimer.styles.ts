import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    paddingTop: 33,
    paddingLeft: 34,
    paddingRight: 30,
    textAlign: "center",
    alignItems: "center",
    backgroundColor:'white'
  },
  title: {
    fontSize: 21,
    fontWeight: "700",
    fontFamily: "Poppins",
    lineHeight: 32,
  },
  description: {
    marginTop: 13,
  },
  descriptionText: {
    fontWeight: "400",
    fontSize: 14,
    fontFamily: "Poppins",
    lineHeight:30
  },
  buttonContainer: {
    marginTop: 24,
  },
  button: {
    width: 230,
    height: 55,
  },
});
