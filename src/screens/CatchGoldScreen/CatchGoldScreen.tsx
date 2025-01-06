import {
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import { useData } from "./useData";
import {
  Easing,
  ReduceMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CatchSlot from "../../components/CatchSlot/CatchSlot";
import { useAppDispatch } from "../../store/hooks";
import { updateLife, resetLife } from "../../store/features/slot";

const CatchGoldScreen = () => {
  const dispatch = useAppDispatch();
  const { list, setList, selectedSlot, setSelectedSlot } = useData();
  const [wastedLife, setWastedLife] = useState(0);
  const [scrolledOutItems, setScrolledOutItems] = useState<
    { id: string; img: string }[]
  >([]);

  const offsetY = useSharedValue<number>(0);

  const scrollToIndex = useCallback((index: number) => {
    offsetY.value = withTiming(list.length - 1, {
      duration: 5000,
      easing: Easing.linear,
      reduceMotion: ReduceMotion.Never,
    });
  }, []);

  useEffect(() => {
    scrollToIndex(list.length - 1);
  }, []);
  useEffect(() => {
    console.log(scrolledOutItems);

    if (scrolledOutItems.length > 0 && scrolledOutItems.length < 4)
      // if (
      //   !selectedSlot.find((i) =>
      //     scrolledOutItems.find((item) => item.id === i)
      //   )
      // )
      setWastedLife(
        scrolledOutItems.filter((i) => !selectedSlot.includes(i.id)).length
      );
    // } else if (scrolledOutItems.length > 3) dispatch(resetLife());
  }, [scrolledOutItems, selectedSlot]);
  // useEffect(() => {
  //   setScrolledOutItems((prev) =>
  //     prev.filter((item) => selectedSlot.includes(item.id))
  //   );
  // }, [scrolledOutItems, selectedSlot]);

  useEffect(() => {
    dispatch(updateLife(wastedLife));
    console.log("🚀 ~ useEffect ~ wastedLife:", wastedLife);
    return () => {};
  }, [wastedLife]);

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../assets/images/catchGoldBg.png")}
    >
      <HeaderScreen title="" visibleGamesBtns visibleLifeCounts />
      <View style={styles.slotContainer}>
        <CatchSlot
          slots={list}
          isScroll={true}
          position={list.length - 1}
          visibleIndexes={2}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          scrolledOutItems={scrolledOutItems}
          setScrolledOutItems={setScrolledOutItems}
        />
        <CatchSlot
          slots={list}
          isScroll={true}
          position={list.length - 1}
          visibleIndexes={5}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          scrolledOutItems={scrolledOutItems}
          setScrolledOutItems={setScrolledOutItems}
        />
        <CatchSlot
          slots={list}
          isScroll={true}
          position={list.length - 1}
          visibleIndexes={9}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          scrolledOutItems={scrolledOutItems}
          setScrolledOutItems={setScrolledOutItems}
        />
      </View>
      <View style={styles.winContainer}>
        <ImageBackground
          resizeMode="contain"
          style={styles.winBackground}
          source={require("../../assets/images/btn.png")}
        >
          <Text style={styles.winText}>WIN:</Text>
          <Text style={styles.winAmount}>{selectedSlot.length * 100}</Text>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    paddingTop: 32,
  },
  slotContainer: {
    flex: 1,
    rowGap: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  winContainer: {
    width: "100%",
    alignSelf: "center",
    paddingBottom: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  winBackground: {
    height: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  winText: {
    textAlign: "center",
    fontFamily: "BlackOpsOne-Regular",
    fontSize: 24,
    lineHeight: 22,
    color: "#fff",
  },
  winAmount: {
    textAlign: "center",
    fontFamily: "BlackOpsOne-Regular",
    lineHeight: 31,
    fontSize: 32,
    color: "#FFC400",
  },
});

export default CatchGoldScreen;
