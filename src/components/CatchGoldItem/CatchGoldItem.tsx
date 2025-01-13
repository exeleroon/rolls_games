import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import Animated, {
  FadeOutRight,
  LinearTransition,
} from "react-native-reanimated";

const CatchGoldItem = memo(function CatchGoldItem({
  item,
  index,
  visibleIndexes,
  selectedSlot,
  setSelectedSlot,
}: any) {
  return (
    <View
      key={item.id}
      style={[
        styles.item,
        {
          transform: [
            index % 2 === 0 ? { rotate: "30deg" } : { rotate: "-30deg" },
          ],
        },
      ]}
    >
      <TouchableOpacity
        onPress={() =>
          item.id.toString().slice(0, 4) === "dead"
            ? setSelectedSlot((prev: any) => [...prev, "dead"])
            : setSelectedSlot((prev: any) => [...prev, item.id])
        }
      >
        {(!selectedSlot.find((i: any) => i === item.id) &&
          visibleIndexes.find((i: any) => i.id === item.id)) ||
        !item.id.toString().search("dead") ? (
          <Image resizeMode="contain" style={[styles.img]} source={item.img} />
        ) : (
          <View
            style={{
              width: Dimensions.get("window").width / 3,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
});
export default CatchGoldItem;
const styles = StyleSheet.create({
  item: {
    height: 140,
    width: Dimensions.get("window").width / 3 - 10,
    paddingHorizontal: 24,
  },
  img: {
    height: 100,
    width: Dimensions.get("window").width / 3 - 20,
  },
});
