import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from "react-native";
import React, { FC, useCallback, useEffect, useMemo, useRef } from "react";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CatchGoldItem from "../CatchGoldItem/CatchGoldItem";
import { getRandomEveryNth } from "../../utils/getRandomEveryNth";

const ITEM_HEIGHT = 140;
const SCREEN_HEIGHT = 500;
interface CatchSlotProps {
  slots: any[];
  isScroll: boolean;
  position: number;
  visibleIndexes: number;
  selectedSlot: string[];
  setSelectedSlot: React.Dispatch<React.SetStateAction<string[]>>;
  scrolledOutItems: { id: string; img: string }[];
  setScrolledOutItems: React.Dispatch<
    React.SetStateAction<{ id: string; img: string }[]>
  >;
}
const CatchSlot: FC<CatchSlotProps> = ({
  slots,
  isScroll,
  position,
  visibleIndexes,
  selectedSlot,
  setSelectedSlot,
  scrolledOutItems,
  setScrolledOutItems,
}) => {
  console.log("🚀 ~ selectedSlot:", selectedSlot);
  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };
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
  const _visibleIndexes = useMemo(
    () => getRandomEveryNth(_slots, visibleIndexes),
    [visibleIndexes]
  );
  const _selectedIndexes = useMemo(() => selectedSlot, [selectedSlot]);
  const onViewableItemsChanged = useRef(({ changed }: any) => {
    let newScrolledOutItems = changed
      .filter((item: any) => !item.isViewable)
      .map((item: any) => item.item);

    newScrolledOutItems = newScrolledOutItems.filter(
      (item: { id: string; img: string }) =>
        _visibleIndexes.find((i) => i.id === item.id)
    );
    // newScrolledOutItems = newScrolledOutItems.filter(
    //   (item: { id: string; img: string }) =>
    //     !_selectedIndexes.find((i) => i === item.id)
    // );
    setScrolledOutItems((prevItems) => [...prevItems, ...newScrolledOutItems]);
  }).current;

  useEffect(() => {
    if (isScroll) {
      // Animate scroll
      offsetY.value = withTiming(position * ITEM_HEIGHT + 10, {
        duration: 75000,
        easing: Easing.linear,
      });
    }
  }, [isScroll, position]);

  return (
    <Animated.View style={{ flex: 1, height: 500 }}>
      <Animated.FlatList
        // scrollEnabled={false}
        inverted
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        animatedProps={animatedStyle}
        data={_slots}
        renderItem={({ index, item }) => (
          <CatchGoldItem
            item={item}
            index={index}
            visibleIndexes={_visibleIndexes}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        )}
      />
    </Animated.View>
  );
};

export default CatchSlot;

const styles = StyleSheet.create({});
