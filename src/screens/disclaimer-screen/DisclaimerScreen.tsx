import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { Button } from "../../components";
import styles from "./Disclaimer.styles";

const DisclaimerScreen: FC = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disclaimer</Text>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          The information provided by the Zdaly Fuel Network Optimizer app is
          based on historical data. Data on Zdaly Light is updated once daily at
          8:00 a.m. eastern time. Any prospective information is based on that
          data and should not be relied on as a estimation of future
          performance. Any future product prices are the manufacturer's
          suggested retail price (MSRP) only. Sites are independent operators
          free to set their retail price.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="I Accept"
          onPress={() => navigate("selectStation")}
        />
      </View>
    </View>
  );
};
export default DisclaimerScreen;
