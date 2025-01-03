import { StackActions, useNavigation } from "@react-navigation/native";
import { RootStackMenuScreenProps } from "../../navigation/RootNavigation.types";
import { useAppSelector } from "../../store/hooks";
import { useCallback } from "react";
import { selectCoins, selectLife } from "../../store/features/slot";

export const useData = () => {
  const badges: Record<string, any> = {
    ["menu"]: require("../../assets/images/menu.png"),
    ["privacy"]: require("../../assets/images/privacy.png"),
    ["settings"]: require("../../assets/images/settings.png"),
    ["games"]: require("../../assets/images/games.png"),
  };
  const navigation = useNavigation<RootStackMenuScreenProps["navigation"]>();
  const coins = useAppSelector(selectCoins);
  const life = useAppSelector(selectLife);

  const onPressSettings = useCallback(() => {
    navigation.dispatch(
      StackActions.popTo("MenuScreen", {
        screen: "SettingsScreen",
      })
    );
  }, []);

  const onGoBack = useCallback(() => {
    navigation.pop();
  }, []);
  return { badges, coins, life, onGoBack, onPressSettings };
};
