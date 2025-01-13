import { ImageBackground, StyleSheet, Text, View } from "react-native";

import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import CatchSlot from "../../components/CatchSlot/CatchSlot";

import { useData } from "./useData";
import StatusSpin from "../../components/StatusSpin/StatusSpin";
import ButtonBottom from "../../core/ButtonBottom/ButtonBottom";
const CatchGoldScreen = () => {
  const {
    list,
    isStart,
    scrolledOutItems,
    selectedSlot,
    statusSpin,
    setIsStart,

    setScrolledOutItems,
    setSelectedSlot,
    onPressAgain,
  } = useData();

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../assets/images/catchGoldBg.png")}
    >
      <HeaderScreen title="" visibleGamesBtns visibleLifeCounts />
      <View style={{ flex: 1 }}>
        {["LOSE", "WIN"].includes(statusSpin) ? (
          <StatusSpin
            status={statusSpin}
            winCoins={selectedSlot.length * 100}
          />
        ) : (
          <View style={styles.slotContainer}>
            <CatchSlot
              slots={list.concat([
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
              ])}
              isScroll={isStart}
              position={list.length - 1}
              visibleIndexes={2}
              selectedSlot={selectedSlot}
              setSelectedSlot={setSelectedSlot}
              scrolledOutItems={scrolledOutItems}
              setScrolledOutItems={setScrolledOutItems}
            />
            <CatchSlot
              slots={list.concat([
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
              ])}
              isScroll={isStart}
              position={list.length - 1}
              visibleIndexes={5}
              selectedSlot={selectedSlot}
              setSelectedSlot={setSelectedSlot}
              scrolledOutItems={scrolledOutItems}
              setScrolledOutItems={setScrolledOutItems}
            />
            <CatchSlot
              slots={list.concat([
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
                {
                  id: "dead",
                  img: require("../../assets/images/slots/dead.png"),
                },
              ])}
              isScroll={isStart}
              position={list.length - 1}
              visibleIndexes={9}
              selectedSlot={selectedSlot}
              setSelectedSlot={setSelectedSlot}
              scrolledOutItems={scrolledOutItems}
              setScrolledOutItems={setScrolledOutItems}
            />
          </View>
        )}
      </View>
      {statusSpin === "" ? (
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
      ) : (
        <ButtonBottom label="AGAING" onPress={onPressAgain} />
      )}
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
