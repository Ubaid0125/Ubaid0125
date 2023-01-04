import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 38,
    paddingRight: 32,
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 21,
    lineHeight: 31,
  },
  cardContainer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 350,
    height: 150,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    paddingLeft: 25,
    paddingRight: 22,
    paddingTop: 20,
  },
  activeText: {
    fontWeight: "600",
    fontFamily: "Poppins",
    fontSize: 16,
    lineHeight: 24,
  },
  timerContainer: {
    display: "flex",
    paddingTop: 13,
    flexDirection: "row",
  },
  buttonContainer: {
    marginLeft: "auto",
  },
  button: {
    width: 100,
    height: 27,
  },
  timeText: {
    fontFamily: "Poppins",
    fontSize: 36,
    lineHeight: 54,
  },
  secondsText: {
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 16,
  },
  infoContainer: {
    paddingTop: 5,
    flexDirection: "row",
  },
  detailIcon: {
    marginLeft: 11,
    width: 15,
    height: 15,
  },
  infoText: {
    fontSize: 10,
    fontFamily: "Poppins",
    lineHeight: 15,
    fontWeight: "600",
  },
});
