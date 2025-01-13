import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addCoins, removeCoins, selectBeta } from "../../store/features/slot";
import { findCommonElements } from "../../utils/findCommonElements";
import Sound from "react-native-sound";

interface ISlotOptions {
  id: string;
  position: number;
  isScroll: boolean;
}
export const useData = () => {
  let maxScroll = 0;
  const [slotOptions, setSlotOptions] = useState<ISlotOptions[]>([]);
  const [winCoins, setWinCoins] = useState<number>(0);
  const [disabledActions, setDisabledActions] = useState<boolean>(false);
  const beta = useAppSelector(selectBeta);
  const soundSlot = new Sound(require("../../assets/audio/slot.mp3"));

  const [positions, setPositions] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const visiblePositions = useMemo(() => {
    return (
      !slotOptions.at(-1)?.isScroll &&
      positions.map((position, index) => position)
    );
  }, [positions, slotOptions]);

  const onSpinSlots = useCallback(() => {
    setPositions([]);
    setDisabledActions(true);
    setWinCoins(0);
    let interval = setInterval(() => {
      if (maxScroll <= 51) {
        setSlotOptions((prev) => [
          ...prev,
          {
            id: maxScroll.toString(),
            isScroll: true,
            position: Math.floor(Math.random() * 50) + 3,
          },
        ]);
        maxScroll++;
      } else {
        clearInterval(interval);
        maxScroll = 0;
        setSlotOptions([]);
      }
    }, 100);
    soundSlot.setVolume(0.2);
    soundSlot.play();
    setTimeout(() => {
      soundSlot.pause();
    }, 2400);
  }, [soundSlot]);
  useEffect(() => {
    if (!slotOptions.at(-1)?.isScroll) {
      setDisabledActions(false);
      console.log("FINISH");
    }

    return () => {};
  }, [slotOptions]);

  useEffect(() => {
    if (
      typeof visiblePositions !== "boolean" &&
      Array.isArray(visiblePositions) &&
      visiblePositions.length >= 3
    ) {
      console.log(
        "🚀 ~ useEffect ~ visiblePositions:",
        visiblePositions.slice(visiblePositions.length - 4)
      );
      console.log(
        "findCommonElements(visiblePositions)",
        findCommonElements(findCommonElements(visiblePositions.map((i) => i)))
      );
      if (
        findCommonElements(
          ...visiblePositions.slice(visiblePositions.length - 4).map((i) => i)
        )
      ) {
        dispatch(addCoins(beta + 100));
        setWinCoins(beta + 100);
      } else {
        dispatch(removeCoins(beta));
      }
    }
    return () => {};
  }, [visiblePositions]);

  return {
    winCoins,
    disabledActions,
    setSlotOptions,
    setPositions,
    slotOptions,
    beta,
    onSpinSlots,
  };
};
