import React, { FC } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import styles from "./ScreenHeader.styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const logoImg = require("../../../assets/logo.png");
const bgImage = require("../../../assets/background-img.png");

interface Props {
  logo?: boolean;
  title?: string;
  arrow?: boolean;
}

const ScreenHeader: FC<Props> = ({ logo, title, arrow }) => {
    const {goBack} = useNavigation();
  return (
    <ImageBackground
      style={styles.container}
      source={bgImage}
      resizeMode="cover"
      imageStyle={styles.bgImage}
    >
      {logo ? (
        <Image source={logoImg} style={styles.logo} />
      ) : (
        <View style={[styles.titleContainer, arrow && styles.padding]}>
          {arrow && (
            <TouchableOpacity onPress={()=>goBack()}>
            <FontAwesome name="long-arrow-left" size={24} color="black" />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </ImageBackground>
  );
};
export default ScreenHeader;
