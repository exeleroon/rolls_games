import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import ButtonBottom from "../../core/ButtonBottom/ButtonBottom";
import StatusSpin from "../../components/StatusSpin/StatusSpin";
import Card from "../../components/Card/Card";

import { useData } from "./useData";
const MineQuestScreen = () => {
  const {
    cards,
    selectedCards,
    matchedCards,
    isStartTimer,
    statusSpin,
    setIsStartTimer,
    handleCardPress,
    onPressAgain,
  } = useData();

  return (
    <ImageBackground
      style={{ flex: 1, paddingTop: 32 }}
      source={require("../../assets/images/mineQuestBg.png")}
    >
      <HeaderScreen
        title=""
        visibleGamesBtns
        visibleTimer
        timerProps={{
          isStart: isStartTimer,
          setIsFinish: () => {
            setIsStartTimer(false);
          },
        }}
      />
      {["WIN", "LOSE"].includes(statusSpin) ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <StatusSpin status={statusSpin} />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <FlatList
            numColumns={3}
            data={cards as unknown as (string | { img: string; id: "man" })[]}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: 10,
            }}
            renderItem={({
              item,
              index,
            }: {
              item: string | { img: string; id: string };
              index: number;
            }) =>
              item?.id !== "man" ? (
                <Card
                  symbol={item as string}
                  isFlipped={
                    matchedCards.includes(index) ||
                    selectedCards.includes(index)
                  }
                  onPress={() => handleCardPress(index)}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  style={{
                    height: Dimensions.get("window").width / 3 - 20,
                    width: Dimensions.get("window").width / 3 - 20,
                    margin: 2,
                  }}
                  source={item.img as ImageSourcePropType}
                />
              )
            }
          />
        </View>
      )}

      <ButtonBottom label="AGAIN" onPress={onPressAgain} />
    </ImageBackground>
  );
};

export default MineQuestScreen;

const styles = StyleSheet.create({});
