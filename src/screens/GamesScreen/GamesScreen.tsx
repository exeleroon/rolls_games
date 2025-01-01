import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ScreenWrapper from "../wrappers/ScreenWrapper/ScreenWrapper";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import ButtonBottom from "../../core/ButtonBottom/ButtonBottom";
import { useData } from "./useData";

const GamesScreen = () => {
  const { listGames, selectedGame, setSelectedGame, onPressNext } = useData();
  return (
    <ScreenWrapper>
      <HeaderScreen title="games" />
      <View style={{ flex: 1, paddingHorizontal: 32 }}>
        {listGames.map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => setSelectedGame(index)}
            style={[
              index % 2 === 0 && {
                paddingLeft: 84,
              },
            ]}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 132,
                width: 240,
              }}
              source={index === selectedGame ? item.img_active : item.img}
            />
          </TouchableOpacity>
        ))}
      </View>
      <ButtonBottom label="NEXT" onPress={onPressNext} />
    </ScreenWrapper>
  );
};

export default GamesScreen;

const styles = StyleSheet.create({});
