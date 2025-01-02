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
    <Animated.View
      key={item.id}
      layout={LinearTransition}
      exiting={FadeOutRight}
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
        onPress={() => setSelectedSlot((prev: any) => [...prev, item.id])}
      >
        {!selectedSlot.find((i: any) => i === item.id) &&
        visibleIndexes.find((i: any) => i.id === item.id) ? (
          <Image resizeMode="contain" style={[styles.img]} source={item.img} />
        ) : (
          <View
            style={{
              width: Dimensions.get("window").width / 3,
            }}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
});
export default CatchGoldItem;
const styles = StyleSheet.create({
  item: {
    height: 140,
    width: Dimensions.get("window").width / 3 - 20,
    paddingHorizontal: 24,
  },
  img: {
    height: 140,
    width: Dimensions.get("window").width / 3 - 40,
  },
});
