import {
  Dimensions,
  Image,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import { useData } from "./useData";
import ButtonBottom from "../../core/ButtonBottom/ButtonBottom";
import Animated, {
  Easing,
  FadeOut,
  Layout,
  ReduceMotion,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CatchGoldItem from "../../components/CatchGoldItem/CatchGoldItem";
const DURATION = 1200; // milliseconds
const CatchGoldScreen = () => {
  const { list, setList, selectedSlot, setSelectedSlot } = useData();
  console.log("🚀 ~ CatchGoldScreen ~ selectedSlot:", list.length);
  const numbers = Array.from({ length: list.length }, (_, i) => i);

  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  // Створюємо ефект, щоб змінювати крок відображення між кожним другим і третім елементом
  useEffect(() => {
    const randomNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i += 3) {
      const group = numbers.slice(i, i + 3);
      const randomIndex = Math.floor(Math.random() * group.length);
      randomNumbers.push(group[randomIndex]);
    }
    setVisibleIndexes(randomNumbers);
  }, []); // Викликається при зміні списку
  const offsetY = useSharedValue<number>(0);
  const animatedProps = useAnimatedProps(() => {
    return {
      contentOffset: {
        x: 0,
        y: offsetY.value,
      },
    };
  });

  const scrollToIndex = useCallback((index: number) => {
    offsetY.value = withTiming(list.length - 1, {
      duration: 5200,
      easing: Easing.linear,
      reduceMotion: ReduceMotion.Never,
    });
  }, []);

  const ITEM_HEIGHT = 100;
  const SCREEN_HEIGHT = 500;
  const [visibleItems, setVisibleItems] = useState([]);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      const visibleItems = [...list].filter((_, index) => {
        const itemStart = index * ITEM_HEIGHT;
        const itemEnd = itemStart + ITEM_HEIGHT;
        return itemStart < offsetY + SCREEN_HEIGHT && itemEnd > offsetY;
      });
    },
    []
  );

  useEffect(() => {
    scrollToIndex(list.length - 1);
  }, []);
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/images/catchGoldBg.png")}
    >
      <HeaderScreen title="" visibleGamesBtns />
      <Animated.View style={styles.container}>
        <Animated.FlatList
          inverted
          onScroll={onScroll}
          animatedProps={animatedProps}
          contentContainerStyle={{ rowGap: 20 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={list}
          numColumns={3}
          renderItem={({ item, index }) => (
            <CatchGoldItem
              item={item}
              index={index}
              visibleIndexes={visibleIndexes}
              selectedSlot={selectedSlot}
              setSelectedSlot={setSelectedSlot}
            />
          )}
        />
      </Animated.View>
      <ButtonBottom
        label="START"
        onPress={() => {
          // offsetY.value = withTiming(0, {
          //   duration: 100,
          //   easing: Easing.back(),
          //   reduceMotion: ReduceMotion.Never,
          // });
          // setTimeout(() => {
          //   offsetY.value = withTiming(list.length * 14, {
          //     duration: 50000,
          //     easing: Easing.linear,
          //     reduceMotion: ReduceMotion.Never,
          //   });
          // }, 500);
        }}
      />
    </ImageBackground>
  );
};

export default CatchGoldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  itemContainer: {
    margin: 10,
    backgroundColor: "#f9c2ff",
    alignItems: "center",
    justifyContent: "center",
    height: 100, // Висота елемента
    width: Dimensions.get("window").width / 3, // Елемент займає всю ширину (всі три колонки)
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});
