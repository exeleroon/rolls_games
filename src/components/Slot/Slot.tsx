import React, { FC, memo, useEffect, useRef } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Sound from "react-native-sound";

interface SlotProps {
  slots: any[];
  setPositions: React.Dispatch<React.SetStateAction<number[]>>;
  isScroll: boolean;
  position: number;
}

const ITEM_HEIGHT = 120;

const Slot = memo(function Slot({
  slots,
  isScroll,
  position,
  setPositions,
}: SlotProps) {
  const _slots = Array.from({ length: 50 }, (_, i) => ({
    ...slots[i % slots.length], // Повторення елементів
    id: slots[i % slots.length].id + `${i + 1}`, // Унікальний ідентифікатор
  }));
  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };

  const onViewableItemsChanged = ({ viewableItems, changed }: any) => {
    console.log("🚀 ~ onViewableItemsChanged ~ changed:", changed);
    console.log("🚀 ~ viewableItems:", viewableItems);
    setPositions((prev) => [
      ...prev,
      // viewableItems.length >= 3 &&
      viewableItems
        .map((item) => item.isViewable && item.item.img + "")
        .filter((item) => typeof item !== "boolean"),
    ]);
  };
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
    try {
      if (isScroll) {
        // Animate scroll
        offsetY.value = withTiming(position * ITEM_HEIGHT, {
          duration: 1200,
          easing: Easing.linear,
        });
        // setPositions((prev) => [...prev, _slots[position]?.id]);
      }
    } catch (error) {}
  }, [isScroll, position]);

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        height: 360,
        width: Dimensions.get("window").width / 4 - 10,
      }}
    >
      {/* <Animated.View style={[animatedStyle]}> */}
      <Animated.FlatList
        pagingEnabled
        disableIntervalMomentum={true}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        scrollEnabled={false}
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
              justifyContent: "center",
              alignItems: "center",
              width: Dimensions.get("window").width / 4 - 24,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: "95%", height: "100%" }}
              source={item.img}
            />
            {/* <Text>{item.img}</Text> */}
          </View>
        )}
      />
      {/* </Animated.View> */}
    </View>
  );
});

export default Slot;

const styles = StyleSheet.create({});
