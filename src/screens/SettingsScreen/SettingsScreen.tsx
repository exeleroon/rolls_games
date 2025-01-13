import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ScreenWrapper from "../wrappers/ScreenWrapper/ScreenWrapper";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import SettingController from "../../components/SettingController/SettingController";
import ButtonBottom from "../../core/ButtonBottom/ButtonBottom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addCoins, selectCoins } from "../../store/features/slot";
import {
  getFocusedRouteNameFromRoute,
  useRoute,
} from "@react-navigation/native";
import { MenuStackScreenProps } from "../../navigation/MenuNavigation.types";
import {
  changeFVXVolume,
  changeSoundVolume,
  selectVFXVolume,
  selectSoundVolume,
} from "../../store/features/setting";

const SettingsScreen = () => {
  const volumeMusic = useAppSelector(selectSoundVolume);
  const volumeVFX = useAppSelector(selectVFXVolume);
  const dispatch = useAppDispatch();
  const coins = useAppSelector(selectCoins);
  const onResetScore = useCallback(() => {
    dispatch(changeSoundVolume(0));
    dispatch(changeFVXVolume(0));

    coins === 0 && dispatch(addCoins(5000));
  }, [coins]);

  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
        <HeaderScreen title="settings" />
        <SettingController
          title="Music"
          volume={(volumeMusic * 10) / 3}
          onChangeVolume={(volume) => {
            dispatch(changeSoundVolume(volume * 3));
          }}
        />
        <SettingController
          title="VFX"
          volume={volumeVFX}
          onChangeVolume={(volume) => {
            dispatch(changeFVXVolume(volume));
          }}
        />
      </View>
      <ButtonBottom label="RESET SCORE" onPress={onResetScore} />
    </ScreenWrapper>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
