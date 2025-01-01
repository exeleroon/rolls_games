import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonImageBG from "../../core/ButtonImageBG/ButtonImageBG";
import { useData } from "./useData";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import ScreenWrapper from "../wrappers/ScreenWrapper/ScreenWrapper";

const MenuScreen = () => {
  const { listMenu } = useData();
  return (
    <ScreenWrapper>
      <>
        <HeaderScreen title="menu" />
        {listMenu.map((item, index) => (
          <ButtonImageBG
            key={index}
            label={item.label}
            onPress={item.onPress}
          />
        ))}
      </>
    </ScreenWrapper>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 32,
    rowGap: 22,
  },
});
