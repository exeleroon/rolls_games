import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addCoins, removeCoins, selectBeta } from "../../store/features/slot";
import { findCommonElements } from "../../utils/findCommonElements";

interface ISlotOptions {
  id: string;
  position: number;
  isScroll: boolean;
}
export const useData = () => {
  let maxScroll = 0;
  const [slotOptions, setSlotOptions] = useState<ISlotOptions[]>([]);
  const beta = useAppSelector(selectBeta);
  const [positions, setPositions] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const visiblePositions = useMemo(() => {
    return (
      !slotOptions.at(-1)?.isScroll &&
      positions.map((position, index) => [position, position - 2, position - 1])
    );
  }, [positions, slotOptions]);

  const onSpinSlots = useCallback(() => {
    setPositions([]);
    let interval = setInterval(() => {
      if (maxScroll <= 51) {
        setSlotOptions((prev) => [
          ...prev,
          {
            id: maxScroll.toString(),
            isScroll: true,
            position: Math.floor(Math.random() * (51 - 3 + 1)) + 3,
          },
        ]);
        maxScroll++;
      } else {
        clearInterval(interval);
        maxScroll = 0;
        setSlotOptions([]);
      }
    }, 100);
  }, []);
  useEffect(() => {
    onSpinSlots();
  }, []);
  useEffect(() => {
    if (
      typeof visiblePositions !== "boolean" &&
      Array.isArray(visiblePositions) &&
      visiblePositions.length >= 3
    ) {
      console.log("🚀 ~ useEffect ~ visiblePositions:", visiblePositions);
      console.log(
        "findCommonElements(visiblePositions)",
        findCommonElements(findCommonElements(visiblePositions.map((i) => i)))
      );
      if (findCommonElements(...visiblePositions.map((i) => i))) {
        dispatch(addCoins(beta + 100));
      } else {
        dispatch(removeCoins(beta));
      }
    }
    return () => {};
  }, [visiblePositions]);

  return { setSlotOptions, setPositions, slotOptions, beta, onSpinSlots };
};
