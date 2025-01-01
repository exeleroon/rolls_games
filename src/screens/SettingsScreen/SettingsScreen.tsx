import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ScreenWrapper from "../wrappers/ScreenWrapper/ScreenWrapper";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import SettingController from "../../components/SettingController/SettingController";
import ButtonBottom from "../../core/ButtonBottom/ButtonBottom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addCoins, selectCoins } from "../../store/features/balance";
import {
  getFocusedRouteNameFromRoute,
  useRoute,
} from "@react-navigation/native";
import { MenuStackScreenProps } from "../../navigation/MenuNavigation.types";

const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const [volumeMusic, setVolumeMusic] = useState<number>(0);
  const [volumeVFX, setVolumeFVX] = useState<number>(0);
  const coins = useAppSelector(selectCoins);
  const onResetScore = useCallback(() => {
    setVolumeFVX(3);
    setVolumeMusic(3);
    coins === 0 && dispatch(addCoins(5000));
  }, [coins]);

  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
        <HeaderScreen title="settings" />
        <SettingController
          title="Music"
          volume={volumeMusic}
          onChangeVolume={setVolumeMusic}
        />
        <SettingController
          title="VFX"
          volume={volumeVFX}
          onChangeVolume={setVolumeFVX}
        />
      </View>
      <ButtonBottom label="RESET SCORE" onPress={onResetScore} />
    </ScreenWrapper>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
