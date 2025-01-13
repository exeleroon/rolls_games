import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import React, {
  FC,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CatchGoldItem from "../CatchGoldItem/CatchGoldItem";
import { getRandomEveryNth } from "../../utils/getRandomEveryNth";
import { shuffle } from "../../utils/shuffle";

const ITEM_HEIGHT = 140;
const SCREEN_HEIGHT = 600;
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
      shuffle(
        Array.from({ length: 100 }, (_, i) => {
          const item = slots[i % slots.length]; // Циклічний доступ до елементів шаблону
          return {
            id: `${item.id}-${Date.now()}-${i}`, // Унікальний ID
            img: item.img,
          };
        })
      ),
    []
  );
  const _visibleIndexes = useMemo(
    () => getRandomEveryNth(_slots, visibleIndexes),
    [visibleIndexes]
  );

  const onViewableItemsChanged = useRef(({ changed }: any) => {
    let newScrolledOutItems = changed
      .filter((item: any) => !item.isViewable)
      .map((item: any) => item.item);

    newScrolledOutItems = newScrolledOutItems.filter(
      (item: { id: string; img: string }) =>
        _visibleIndexes.find((i) => i.id === item.id)
    );

    setScrolledOutItems((prevItems) => [...prevItems, ...newScrolledOutItems]);
  }).current;

  useEffect(() => {
    if (isScroll) {
      // Animate scroll
      offsetY.value = withTiming(position * ITEM_HEIGHT + 10, {
        duration: 35000,
        easing: Easing.linear,
      });
    }
  }, [isScroll, position]);
  return (
    <View style={{ flex: 1, height: 600 }}>
      <Animated.FlatList
        scrollEnabled={false}
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
    </View>
  );
};

export default CatchSlot;

const styles = StyleSheet.create({});
