import type { StackScreenProps } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

export type RootStackParamList = {
  SplashScreen: undefined;
  StartScreen: undefined;
  MenuScreen: undefined;
};
export type RootStackScreenProps = StackScreenProps<RootStackParamList>;
export type RootStackMenuScreenProps = StackScreenProps<
  RootStackParamList,
  "MenuScreen"
>;
