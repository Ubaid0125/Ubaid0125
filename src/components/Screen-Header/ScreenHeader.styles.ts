import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 220,
    width: "100%",
    justifyContent: "center",
    paddingLeft:32,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    opacity: 0.2,
  },
  logo: {
    width: 80,
    height: 70,
    marginLeft:'auto',
    marginRight:'auto'
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 21,
    lineHeight: 32,
    marginLeft:'auto',
    marginRight:'auto',
  },
  titleContainer:{
    flexDirection:'row',
    alignItems:'center',
    
  },
  padding:{
    paddingRight:25
  }
});
