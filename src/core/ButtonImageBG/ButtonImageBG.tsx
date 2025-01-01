import {
  ButtonProps,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { FC } from "react";
import { colors } from "../../theme/colors";
interface ButtonImageBGProps {
  label: string;
}
const ButtonImageBG: FC<ButtonImageBGProps & TouchableOpacityProps> = ({
  label = "",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        resizeMode="contain"
        style={{
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        source={require("../../assets/images/btn.png")}
      >
        <Text
          style={{
            color: colors.orange,
            textAlign: "center",
            fontSize: 30,
            fontFamily: "BlackOpsOne-Regular",
          }}
        >
          {label}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ButtonImageBG;

const styles = StyleSheet.create({});
