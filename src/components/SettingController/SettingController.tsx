import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";

interface SettingControllerProps {
  title: string;
  volume: number;
  onChangeVolume: (volume: number) => void;
}
const SettingController: FC<SettingControllerProps> = ({
  title,
  volume,
  onChangeVolume,
}) => {
  const controllerVolume = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.controllerBlock}>
        {controllerVolume.map((item, index) => (
          <TouchableOpacity
            onPress={() => onChangeVolume(index)}
            style={[
              styles.controller,
              index <= volume && {
                backgroundColor: "#F88B00",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default SettingController;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 56, rowGap: 18, paddingTop: 32 },
  title: { fontSize: 25, color: "#fff" },
  controllerBlock: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 18,
    alignItems: "center",
  },
  controller: {
    height: 60,
    width: 60,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
