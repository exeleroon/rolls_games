import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { FC } from "react";
interface ButtonBottomProps {
  label: string;
  isDisabled?: boolean;
}
const ButtonBottom: FC<ButtonBottomProps & TouchableOpacityProps> = ({
  label = "",
  isDisabled,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled}>
      <ImageBackground
        resizeMode="contain"
        style={{
          height: 100,
          width: "98%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("../../assets/images/bottomBtn.png")}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "BlackOpsOne-Regular",
            fontSize: 33,
            color: "#fff",
          }}
        >
          {label}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ButtonBottom;

const styles = StyleSheet.create({});
