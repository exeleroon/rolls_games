import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuStackParamList } from "./MenuNavigation.types";
import PrivacyScreen from "../screens/PrivacyScreen/PrivacyScreen";
import MenuScreen from "../screens/MenuScreen/MenuScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import GamesScreen from "../screens/GamesScreen/GamesScreen";
import { GamesNavigation } from "./GamesNavigation";
const { Navigator, Screen } = createNativeStackNavigator<MenuStackParamList>();
export const MenuNavigation = () => {
  return (
    <Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
      <Screen name="Menu" component={MenuScreen} />
      <Screen name="GamesNavigation" component={GamesNavigation} />
      <Screen name="SettingsScreen" component={SettingsScreen} />
      <Screen name="PrivacyScreen" component={PrivacyScreen} />
    </Navigator>
  );
};
