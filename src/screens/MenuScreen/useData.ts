import { useNavigation } from "@react-navigation/native";
import { RootStackMenuScreenProps } from "../../navigation/RootNavigation.types";
import { MenuStackScreenProps } from "../../navigation/MenuNavigation.types";

export const useData = () => {
  const navigation = useNavigation<MenuStackScreenProps["navigation"]>();
  const listMenu = [
    {
      label: "GAMES",
      onPress: () => navigation.navigate("GamesNavigation"),
    },
    {
      label: "SETTINGS",
      onPress: () => navigation.navigate("SettingsScreen"),
    },
    {
      label: "PRIVACY",
      onPress: () => navigation.navigate("PrivacyScreen"),
    },
  ];

  return { listMenu };
};
