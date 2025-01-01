import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import Animated, { FadeOut, Layout } from "react-native-reanimated";

const CatchGoldItem = memo(function GatchGoldItem({
  item,
  index,
  visibleIndexes,
  selectedSlot,
  setSelectedSlot,
}: any) {
  return (
    <Animated.View
      key={item.id}
      layout={Layout.springify()}
      exiting={FadeOut}
      style={[
        {
          height: 140,
          width: 140,
        },
        {
          transform: [
            index % 2 === 0 ? { rotate: "30deg" } : { rotate: "-30deg" },
          ],
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => setSelectedSlot((prev) => [...prev, item.id])}
      >
        {!selectedSlot.find((i) => i === item.id) &&
        visibleIndexes.find((i) => i === index) ? (
          <Image
            resizeMode="contain"
            style={[
              {
                height: 90,
                width: 90,
              },
            ]}
            source={item.img}
          />
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
const styles = StyleSheet.create({});
