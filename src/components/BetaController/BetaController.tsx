import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  decrementBeta,
  incrementBeta,
  selectBeta,
} from "../../store/features/balance";

const BetaController = () => {
  const dispatch = useAppDispatch();
  const beta = useAppSelector(selectBeta);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(decrementBeta(100));
        }}
      >
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../../assets/images/minus.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/images/beta.png")}
        style={styles.imgBeta}
      >
        <Text style={styles.textBeta}>{beta}</Text>
      </ImageBackground>
      <TouchableOpacity
        onPress={() => {
          dispatch(incrementBeta(100));
        }}
      >
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../../assets/images/plus.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BetaController;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    justifyContent: "center",
  },
  imgBeta: {
    width: 160,
    height: 82,
    justifyContent: "center",
    alignItems: "center",
  },
  textBeta: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    fontFamily: "SuezOne-Regular",
  },
});
