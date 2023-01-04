import React, { FC, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { colors, Stations } from "../../../constants";
import styles from "./SelectStation.styles";
import { Feather } from "@expo/vector-icons";
import Station from "./components/stations/Station";
import { useNavigation } from "@react-navigation/native";

const SelectStation: FC = () => {
    const {navigate} = useNavigation();
  const [data, updatedData] = useState(Stations);
  const [search, setSearch] = useState("");
//   const handleSearch = (e: string) => {
//     setSearch(e);
//   };
  const handleSearch = (text:string) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = Stations.filter(function (item) {
        const itemData = item.location || item?.code
          ? item.location.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      const filterData = Stations.filter(function (item) {
        const itemData =  item?.code;
        return itemData;
      });
      updatedData(newData);
      console.log('filterData',filterData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      updatedData(Stations);
      setSearch(text);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Search by ID, Name, City"
          placeholderTextColor={colors.placeholderColor}
          style={styles.textInput}
          onChangeText={handleSearch}
          value={search}
        />
        <Feather
          name="search"
          size={24}
          color={colors.placeholderColor}
          style={styles.searchIcon}
        />
      </View>
      <View>
        <FlatList
          style={styles.stationList}
          data={data}
          renderItem={({
            item,
          }: {
            item: {
              id: number;
              code: number;
              location: string;
              time:number
            };
          }) => {
            return (
              <Station
                key={item.id}
                location={item.location}
                code={item.code}
                onPress={() => navigate('stationDetails' , item?.id)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
export default SelectStation;
