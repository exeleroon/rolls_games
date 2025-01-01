import type { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  StartScreen: undefined;
  MenuScreen: undefined;
};
export type RootStackScreenProps = StackScreenProps<RootStackParamList>;
export type RootStackMenuScreenProps = StackScreenProps<
  RootStackParamList,
  "MenuScreen"
>;
