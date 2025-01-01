import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import { useData } from "./useData";
import FlipSlot from "../../components/FlipSlot/FlipSlot";
import ButtonBottom from "../../core/ButtonBottom/ButtonBottom";
import StatusSpin from "../../components/StatusSpin/StatusSpin";

const MineQuestScreen = () => {
  const {
    slots,
    resetFlips,
    statusSpin,
    setResetFlips,
    onSelectSlot,
    onPressAgain,
  } = useData();
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/images/mineQuestBg.png")}
    >
      <HeaderScreen title="" visibleGamesBtns />
      <View style={{ flex: 1, alignItems: "center" }}>
        {/* {["WIN", "LOSE"].includes(statusSpin) ? (
          <StatusSpin status={statusSpin} />
        ) : ( */}
        <FlatList
          numColumns={3}
          data={slots}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: 10,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) =>
            item.id !== "man" ? (
              <FlipSlot
                resetFlips={resetFlips}
                onSelectSlot={onSelectSlot}
                slotId={item.id}
                img={item.img}
                _index={index}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={{
                  height: Dimensions.get("window").width / 3 - 20,
                  width: Dimensions.get("window").width / 3 - 20,
                  margin: 2,
                }}
                source={item.img as ImageSourcePropType}
              />
            )
          }
        />
        {/* )} */}
      </View>

      <ButtonBottom label="AGAIN" onPress={onPressAgain} />
    </ImageBackground>
  );
};

export default MineQuestScreen;

const styles = StyleSheet.create({});
