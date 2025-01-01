import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
interface StatusSpinProps {
  status: "WIN" | "LOSE";
}
const StatusSpin: FC<StatusSpinProps> = ({ status }) => {
  return (
    <ImageBackground
      resizeMode="contain"
      style={{
        width: "100%",
        height: 260,
        alignItems: "center",
        justifyContent: "center",
      }}
      source={require("../../assets/images/statusBG.png")}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 41,
            fontFamily: "BlackOpsOne-Regular",
            textAlign: "center",
            color: status === "WIN" ? "#FFE500" : "#FF0000",
          }}
        >
          {status}
          {"\n"}
        </Text>
        <Text
          style={{
            lineHeight: 86,
            fontSize: 90,
            color: "#fff",
            fontFamily: "BlackOpsOne-Regular",
            textAlign: "center",
          }}
        >
          100{"\n"}
          <Text
            style={{
              fontSize: 44,
              lineHeight: 30,
              color: "#fff",

              fontFamily: "BlackOpsOne-Regular",
              textAlign: "center",
            }}
          >
            coins
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default StatusSpin;

const styles = StyleSheet.create({});
