import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import SvgButtonStart from "../../core/SvgButtonStart/SvgButtonStart";
import { SafeAreaView } from "react-native-safe-area-context";

const StartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        <LogoIcon />
        <SvgButtonStart />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
