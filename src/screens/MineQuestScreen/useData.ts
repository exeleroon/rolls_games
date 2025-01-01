import { useCallback, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addCoins, removeCoins } from "../../store/features/balance";
interface Slot {
  img: string;
  id: string;
}
export const useData = () => {
  const dispatch = useAppDispatch();
  const [slots, setSlots] = useState<Slot[]>([
    {
      id: "train",
      img: require("../../assets/images/slots/train.png"),
    },
    {
      id: "wagon",
      img: require("../../assets/images/slots/wagon.png"),
    },
    {
      id: "train",
      img: require("../../assets/images/slots/train.png"),
    },
    {
      id: "piramida",
      img: require("../../assets/images/slots/piramida.png"),
    },

    {
      id: "diger",
      img: require("../../assets/images/slots/diger.png"),
    },
    {
      id: "wagon",
      img: require("../../assets/images/slots/wagon.png"),
    },
    {
      id: "piramida",
      img: require("../../assets/images/slots/piramida.png"),
    },
    {
      id: "diger",
      img: require("../../assets/images/slots/diger.png"),
    },
  ]);
  const [selectedSlots, setSelectedSlots] = useState<Slot["id"][]>([]);
  const [resetFlips, setResetFlips] = useState<boolean>(false);
  const [statusSpin, setStatusSpin] = useState<string>("");
  const onSelectSlot = useCallback(
    (slotId: Slot["id"]) => {
      if (selectedSlots.length === 0) setSelectedSlots([slotId]);
      else {
        if (
          !selectedSlots.find((slotID) =>
            slotID.toLowerCase().includes(slotId.toLowerCase())
          ) &&
          selectedSlots.length > 1
        ) {
          setTimeout(() => {
            setStatusSpin("LOSE");
          }, 500);

          setSelectedSlots([]);
          dispatch(removeCoins(100));
        } else {
          setTimeout(() => {
            setStatusSpin("WIN");
          }, 500);
          dispatch(addCoins(200));
          // setSelectedSlots([]);
          setSelectedSlots((prev) => [...prev, slotId]);
        }
        setTimeout(() => {
          setStatusSpin(" ");
        }, 1000);
      }
    },
    [selectedSlots]
  );
  const onPressAgain = useCallback(() => {
    setStatusSpin("");
    setResetFlips(true);
    setSlots(
      slots
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  }, []);
  return {
    slots: [
      ...slots.slice(0, 4),
      {
        id: "man",
        img: require("../../assets/images/man.png"),
      },
      ...slots.slice(4),
    ],
    statusSpin,
    onSelectSlot,
    setResetFlips,
    onPressAgain,
    resetFlips,
  };
};
