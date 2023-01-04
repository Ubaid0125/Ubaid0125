import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../constants";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? "35%" : "25%",
    textAlign: "center",
  },
  loginText: {
    fontSize: 21,
    fontFamily: "Poppins",
    fontWeight: "700",
    lineHeight: 32,
    marginTop: 48,
  },
  logo: {
    width: 80,
    height: 70,
  },
  emailIcon: {
    width: 15,
    height: 15,
    marginTop: Platform.OS === "android" ? 9 : 2,
    position: "absolute",
    left: 40,
  },
  passwordIcon: {
    width: 15,
    height: 20,
    position: "absolute",
    marginTop: Platform.OS === "android" ? 9 : 0,
    marginLeft: 40,
  },
  textInputContainer: {
    marginTop: 50,
  },
  passwordInputContainer: {
    marginTop: 40,
  },
  textInput: {
    borderRadius: 20,
    width: 300,
    marginLeft: 30,
    marginTop: 2,
    fontWeight: "700",
    paddingBottom: 10,
    paddingLeft: 50,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
  },
  buttonContainer: {
    marginTop: 32,
  },
  button: {
    width: 110,
    height: 50,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    fontWeight: "300",
    marginTop: 10,
    marginLeft:40
  },
  forgotPassword: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "700",
    marginTop: 23,
  },
  bgImageContainer: {
    width: "100%",
    flex: 1,
  },
  bgImage: {
    opacity: 0.5,
    height: "100%",
  },
});
