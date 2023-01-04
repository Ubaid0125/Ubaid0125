import React, { FC } from "react";
import { TouchableOpacity, ViewStyle, Text } from "react-native";
import styles from "./button.styles";
import { AntDesign } from '@expo/vector-icons';

interface Props {
  onPress: () => void;
  title: string;
  arrow?: boolean;
  style?:any;
  disabled?:boolean;
}

const Button: FC<Props> = ({  onPress, title, arrow ,style , disabled}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style && style
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
      {arrow && <AntDesign name="arrowright" size={18} color="white" style={styles.arrowIcon} /> }
    </TouchableOpacity>
  );
};
export default Button;
