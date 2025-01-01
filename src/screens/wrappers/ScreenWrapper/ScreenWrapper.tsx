import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
interface ScreenWrapperProps {}
const ScreenWrapper: FC<PropsWithChildren<ScreenWrapperProps>> = ({
  children,
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.imgBg}
        source={require("../../../assets/images/bg_blur.png")}
      >
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 32,
    rowGap: 22,
  },
});
