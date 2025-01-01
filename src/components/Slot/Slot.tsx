import React, { FC, useEffect, useRef } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface SlotProps {
  slots: any[];
  isScroll: boolean;
  position: number;
}

const ITEM_HEIGHT = 131;

const Slot: FC<SlotProps> = ({ slots, isScroll, position }) => {
  const _slots = Array.from({ length: 50 }, (_, i) => ({
    ...slots[i % slots.length], // Повторення елементів
    id: `${i + 1}`, // Унікальний ідентифікатор
  }));

  const flatListRef = useRef<FlatList>(null);
  const offsetY = useSharedValue(0);

  // Animate scrolling using reanimated
  const animatedStyle = useAnimatedProps(() => {
    return {
      contentOffset: {
        x: 0,
        y: offsetY.value,
      },
    };
  });
  useEffect(() => {
    if (isScroll) {
      // Animate scroll
      offsetY.value = withTiming(position * ITEM_HEIGHT + 10, {
        duration: 1300,
        easing: Easing.linear,
      });
    }
  }, [isScroll, position]);

  return (
    <View
      style={{
        alignItems: "center",
        height: 360,
        width: Dimensions.get("window").width / 4 - 10,
      }}
    >
      {/* <Animated.View style={[animatedStyle]}> */}
      <Animated.FlatList
        ref={flatListRef}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 10,
          backgroundColor: "#232223",
        }}
        animatedProps={animatedStyle}
        data={_slots}
        renderItem={({ item }) => (
          <View
            style={{
              height: ITEM_HEIGHT,
              alignSelf: "center",
              width: Dimensions.get("window").width / 4 - 24,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: "95%", height: "100%" }}
              source={item.img}
            />
          </View>
        )}
      />
      {/* </Animated.View> */}
    </View>
  );
};

export default Slot;

const styles = StyleSheet.create({});
