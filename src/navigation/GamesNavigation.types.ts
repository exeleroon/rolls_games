import { StackScreenProps } from "@react-navigation/stack";
import GamesScreen from "../screens/GamesScreen/GamesScreen";

export type GamesNavigationParamList = {
  GamesScreen: undefined;
  SpinTreasureScreen: undefined;
  MineQuestScreen: undefined;
  CatchGoldScreen: undefined;
};
export type GamesStackScreenProps = StackScreenProps<GamesNavigationParamList>;
