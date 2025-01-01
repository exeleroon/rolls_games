import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigation/RootNavigation.types";

const SvgButtonStart = () => {
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
            d="m131.032 54.051-.093-10.995-12.698.107-5.934-5.835-.056-6.615 5.835-5.912 3.319-.028.088 10.42 13.495-.114 5.735 5.837.06 7.19-5.813 5.912-3.938.033Zm-.178-21.127-.024-2.943-7.832.066-.044-5.287 11.747-.099 5.131 5.068.026 3.12-9.004.075Zm-13.472 21.242-4.983-5.821-.025-2.942 9.779-.083.029 3.496 7.257-.061.044 5.31-12.101.101Zm24.608-23.172-.054-6.394 25.486-.214.054 6.394-25.486.214Zm7.847 22.9-.18-21.438 10.177-.085.18 21.437-10.177.085Zm37.279-.314-1.266-3.197-9.602.08 1.987-5.835 5.309-.045-8.024-20.265 9.535-.08 11.95 29.259-9.889.083Zm-22.898.193 10.251-28.119 4.434 11.623-5.238 16.416-9.447.08Zm45.744-9.19-.048-5.686 7.345-.062-.076-9.004-7.344.062-.05-5.863 11.172-.094 5.934 5.813.074 8.805-4.519 4.596 5.638 10.086-10.442.088-4.233-8.77-3.451.029Zm-11.253 8.9-.247-29.358 9.779-.082.246 29.358-9.778.082Zm29.807-23.216-.054-6.394 25.486-.214.054 6.394-25.486.214Zm7.847 22.9-.18-21.438 10.177-.085.18 21.437-10.177.085Z"
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

export default SvgButtonStart;

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
