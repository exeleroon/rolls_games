import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootNavigation.types";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen/StartScreen";
import MenuScreen from "../screens/MenuScreen/MenuScreen";
import { MenuNavigation } from "./MenuNavigation";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <Navigator
      initialRouteName="StartScreen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="StartScreen" component={StartScreen} />
      <Screen name="MenuScreen" component={MenuNavigation} />
    </Navigator>
  );
};
