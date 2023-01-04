import { useRoute } from "@react-navigation/native";
import React, { FC, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Stations } from "../../../constants";
import { Button } from "../../components";
import styles from "./DetailsScreen.styles";
const detailIcon = require("../../../assets/detail-btn.png");

const DetailsScreen: FC = () => {
  const route = useRoute();
  const stationData = Stations.find((e: any) => e.id === route?.params);
  const [seconds, setSeconds] = useState(stationData?.time);
  const [btnTitle, setBtnTitle] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!btnTitle) {
        if ((seconds as any) > 0) {
          setSeconds((seconds as any) - 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const handleTimer = () => {
    setBtnTitle((btn) => !btn);
  };
  console.log("stationData", stationData);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {!btnTitle ? "Station Subscribed" : "Station Subscribe"}
      </Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.activeText}>ACTIVE FROM</Text>
          <View style={styles.timerContainer}>
            <Text style={styles.timeText}>{seconds}</Text>
            <Text style={styles.secondsText}>seconds</Text>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                title={btnTitle ? "Start" : "Stop"}
                onPress={() => handleTimer()}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>MORE INFO</Text>
            <TouchableOpacity>
              <Image source={detailIcon} style={styles.detailIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default DetailsScreen;
