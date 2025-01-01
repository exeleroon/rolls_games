import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GamesNavigationParamList } from "./GamesNavigation.types";
import GamesScreen from "../screens/GamesScreen/GamesScreen";
import MineQuestScreen from "../screens/MineQuestScreen/MineQuestScreen";
import CatchGoldScreen from "../screens/CatchGoldScreen/CatchGoldScreen";
import SpinTreasureScreen from "../screens/SpinTreasureScreen/SpinTreasureScreen";

const { Navigator, Screen } =
  createNativeStackNavigator<GamesNavigationParamList>();
export const GamesNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="GamesScreen" component={GamesScreen} />
      <Screen name="SpinTreasureScreen" component={SpinTreasureScreen} />
      <Screen name="MineQuestScreen" component={MineQuestScreen} />
      <Screen name="CatchGoldScreen" component={CatchGoldScreen} />
    </Navigator>
  );
};
