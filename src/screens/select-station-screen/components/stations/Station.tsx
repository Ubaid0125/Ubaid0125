import React, { FC } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./Station.styles";
const stationIcon = require("../../../../../assets/station-icon.png");

interface Props {
  location: string;
  code: number;
  onPress:()=>void
}

const Station: FC<Props> = ({ location, code , onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
        <Image source={stationIcon} style={styles.img} />
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{code}</Text>
        <Text style={styles.subTitle}>{location}</Text>
        </View>
      </View>
      <Text></Text>
    </TouchableOpacity>
  );
};
export default Station;
