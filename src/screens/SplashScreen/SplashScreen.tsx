import {
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useGetBannerQuery } from "../../store/api/banerApi";

const SplashScreen = () => {
  const { data } = useGetBannerQuery();
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => {
        data?.action && Linking.openURL(data?.action);
      }}
    >
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/images/splash.png")}
      />
    </TouchableOpacity>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
