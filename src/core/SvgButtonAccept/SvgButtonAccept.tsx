import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigation/RootNavigation.types";

const SvgButtonAccept = () => {
  const navigation = useNavigation<RootStackScreenProps["navigation"]>();

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        navigation.navigate("MenuScreen");
      }}
    >
      <Svg width={360} height={77}>
        <Path
          fill="url(#a)"
          stroke="#FFF1F1"
          strokeWidth={4}
          d="M46.789 4.39A5 5 0 0 1 51.053 2h260.768a5 5 0 0 1 4.338 2.514l36.1 63c1.91 3.333-.496 7.486-4.338 7.486H12.491c-3.905 0-6.303-4.279-4.264-7.61l38.562-63Z"
        />
        <G filter="url(#b)">
          <Path
            fill="#fff"
            d="m111.399 54.032-1.266-3.198-9.601.08 1.986-5.835 5.31-.044-8.025-20.265 9.535-.08 11.95 29.258-9.889.084Zm-22.897.192 10.25-28.118 4.434 11.622-5.238 16.416-9.446.08Zm39.092-.329-5.934-5.813-.148-17.632 5.835-5.912 3.894-.033.247 29.358-3.894.032Zm11.799-17.688-.05-5.907-6.504.055-.049-5.863 10.42-.087 5.911 5.813.05 5.907-9.778.082Zm-6.357 17.643-.049-5.863 6.504-.055-.036-4.291 9.778-.083.037 4.292-5.814 5.912-10.42.088Zm25.509-.215-5.934-5.813-.148-17.632 5.835-5.912 3.894-.033.247 29.358-3.894.032Zm11.799-17.688-.05-5.907-6.504.055-.049-5.863 10.42-.087 5.911 5.813.05 5.907-9.778.082Zm-6.357 17.642-.049-5.862 6.504-.055-.036-4.292 9.779-.082.036 4.292-5.814 5.912-10.42.087Zm19.934-.167-.247-29.357 9.779-.082.098 11.636 9.358-.078.047 5.663-9.358.079.101 12.057-9.778.082Zm17.236-21.008-.024-2.81-6.084.051-.048-5.686 15.287-.128.072 8.495-9.203.078Zm-5.909 20.913-.049-5.863 5.508-.046-.024-2.942 9.778-.083.074 8.805-15.287.129Zm30.003-7.797-.05-5.885 7.102-.06-.085-10.065-7.101.06-.049-5.863 10.973-.092 5.911 5.813.085 10.066-5.813 5.934-10.973.092Zm-11.087 7.638-.247-29.357 9.602-.081.247 29.357-9.602.08Zm29.32-23.212-.053-6.393 25.485-.215.054 6.394-25.486.214Zm7.848 22.9-.18-21.438 10.176-.085.18 21.437-10.176.086Z"
          />
        </G>
        <Defs>
          <LinearGradient
            id="a"
            x1={208.579}
            x2={208.579}
            y1={0}
            y2={96.899}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#F88B00" />
            <Stop offset={0.9} stopColor="#925200" />
          </LinearGradient>
        </Defs>
      </Svg>
    </TouchableOpacity>
  );
};

export default SvgButtonAccept;

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 77,
    bottom: 0,
    alignItems: "center",
    zIndex: 11,
    position: "absolute",
  },
});
