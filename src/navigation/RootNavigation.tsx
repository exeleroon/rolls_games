import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootNavigation.types";

import StartScreen from "../screens/StartScreen/StartScreen";
import { MenuNavigation } from "./MenuNavigation";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import { useTimer } from "../hooks/useTimer";
import { useState } from "react";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const [isStart, setIsStart] = useState<boolean>(true);
  const { time } = useTimer({
    isStart: isStart,
    setIsFinish: () => {
      setIsStart(false);
    },
    duration: 10,
  });
  return (
    <Navigator
      initialRouteName={time < 1 ? "MenuScreen" : "SplashScreen"}
      screenOptions={{ headerShown: false }}
    >
      {isStart ? (
        <Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <>
          <Screen name="StartScreen" component={StartScreen} />
          <Screen name="MenuScreen" component={MenuNavigation} />
        </>
      )}
    </Navigator>
  );
};
