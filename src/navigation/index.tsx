import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DetailsScreen,
  DisclaimerScreen,
  LoginScreen,
  SelectStation,
} from "../screens";
import { ScreenHeader } from "../components";

const RootNavigation: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="disclaimer"
          component={DisclaimerScreen}
          options={{
            header: () => <ScreenHeader logo={true} />,
          }}
        />
        <Stack.Screen
          name="selectStation"
          component={SelectStation}
          options={{
            header: () => <ScreenHeader title="Select Station" />,
          }}
        />
        <Stack.Screen
          name="stationDetails"
          component={DetailsScreen}
          options={{
            header: () => <ScreenHeader title="Details" arrow={true} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
