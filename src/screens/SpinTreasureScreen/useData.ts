import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectBeta } from "../../store/features/slot";

interface ISlotOptions {
  id: string;
  position: number;
  isScroll: boolean;
}
export const useData = () => {
  const [slotOptions, setSlotOptions] = useState<ISlotOptions[]>([]);
  const beta = useAppSelector(selectBeta);

  let maxScroll = 0;
  const onSpinSlots = useCallback(() => {
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

  return { setSlotOptions, slotOptions, beta, onSpinSlots };
};
