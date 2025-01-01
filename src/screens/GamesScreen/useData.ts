import { useNavigation } from "@react-navigation/native";
import {
  GamesStackScreenProps,
  GamesNavigationParamList,
} from "../../navigation/GamesNavigation.types";
import { useCallback, useState } from "react";

export const useData = () => {
  const navigation = useNavigation<GamesStackScreenProps["navigation"]>();
  const [selectedGame, setSelectedGame] = useState<number>(4);
  const listGames = [
    {
      img: require("../../assets/images/spin.png"),
      img_active: require("../../assets/images/spin_active.png"),
      route: "SpinTreasureScreen",
    },
    {
      img: require("../../assets/images/mine.png"),
      img_active: require("../../assets/images/mine_active.png"),
      route: "MineQuestScreen",
    },
    {
      img: require("../../assets/images/catch.png"),
      img_active: require("../../assets/images/catch_active.png"),
      route: "CatchGoldScreen",
    },
  ];
  const onPressNext = useCallback(() => {
    navigation.navigate(
      listGames[selectedGame].route as keyof GamesNavigationParamList
    );
  }, [selectedGame]);
  return { listGames, selectedGame, setSelectedGame, onPressNext };
};
