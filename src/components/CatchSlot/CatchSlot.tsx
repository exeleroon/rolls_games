import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect, useMemo, useRef } from "react";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CatchGoldItem from "../CatchGoldItem/CatchGoldItem";
import { getRandomEveryNth } from "../../utilits/getRandomEveryNth";
const ITEM_HEIGHT = 140;
interface CatchSlotProps {
  slots: any[];
  isScroll: boolean;
  position: number;
  visibleIndexes: number;
  selectedSlot: string[];
  setSelectedSlot: React.Dispatch<React.SetStateAction<string[]>>;
}
const CatchSlot: FC<CatchSlotProps> = ({
  slots,
  isScroll,
  position,
  visibleIndexes,
  selectedSlot,
  setSelectedSlot,
}) => {
  const _slots = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => {
        const item = slots[i % slots.length]; // Циклічний доступ до елементів шаблону
        return {
          id: `${item.id}-${Date.now()}-${i}`, // Унікальний ID
          img: item.img,
        };
      }),
    []
  );

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
        duration: 75000,
        easing: Easing.linear,
      });
    }
  }, [isScroll, position]);
  // const randomNumbers: number[] = [];
  // for (let i = 0; i < slots.length; i += 3) {
  //   const group = slots.slice(i, i + 3); // Беремо групу з 3 чисел
  //   const randomIndex = Math.floor(Math.random() * group.length); // Випадковий індекс у межах групи
  //   randomNumbers.push(group[randomIndex]); // Додаємо випадкове число
  // }
  return (
    <View style={{ flex: 1 }}>
      <Animated.FlatList
        scrollEnabled={false}
        inverted
        animatedProps={animatedStyle}
        data={_slots}
        renderItem={({ index, item }) => (
          <CatchGoldItem
            item={item}
            index={index}
            visibleIndexes={getRandomEveryNth(_slots, visibleIndexes)}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        )}
      />
    </View>
  );
};

export default CatchSlot;

const styles = StyleSheet.create({});
