import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import { useData } from "./useData";
import Animated from "react-native-reanimated";
import BetaController from "../../components/BetaController/BetaController";
import ButtonBottom from "../../core/ButtonBottom/ButtonBottom";
import Slot from "../../components/Slot/Slot";
const SpinTreasureScreen = () => {
  const { slotOptions, setPositions, beta, onSpinSlots } = useData();

  return (
    <ImageBackground
      style={{ flex: 1, paddingTop: 32 }}
      source={require("../../assets/images/spinBg.png")}
    >
      <HeaderScreen title="spin" visibleGamesBtns />
      <Animated.View
        style={{
          backgroundColor: "##F88B00",
          flex: 1,
          top: -40,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          columnGap: 8,
        }}
      >
        {[1, 4, 6, 7].map((item, index) => (
          <Slot
            key={index}
            setPositions={setPositions}
            isScroll={slotOptions[item]?.isScroll}
            position={slotOptions[item]?.position}
            slots={[
              { id: "1", img: require("../../assets/images/slots/barge.png") },
              { id: "2", img: require("../../assets/images/slots/wagon.png") },
              { id: "3", img: require("../../assets/images/slots/train.png") },
              { id: "4", img: require("../../assets/images/slots/diger.png") },
              {
                id: "5",
                img: require("../../assets/images/slots/piramida.png"),
              },
              {
                id: "6",
                img: require("../../assets/images/slots/train_2.png"),
              },
              {
                id: "7",
                img: require("../../assets/images/slots/wagon_2.png"),
              },
            ]}
          />
        ))}
      </Animated.View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            color: "#fff",
            fontFamily: "BlackOpsOne-Regular",
          }}
        >
          WIN:{"  "}
        </Text>
        <Text
          style={{
            fontFamily: "BlackOpsOne-Regular",
            fontSize: 36,
            color: "#FFC400",
          }}
        >
          {beta * 2}
        </Text>
      </View>
      <BetaController />
      <ButtonBottom label="START" onPress={onSpinSlots} />
    </ImageBackground>
  );
};

export default SpinTreasureScreen;

const styles = StyleSheet.create({});
