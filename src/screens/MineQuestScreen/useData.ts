import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addCoins, removeCoins } from "../../store/features/balance";
import { shuffle } from "../../utilits/shuffle";

interface Slot {
  img: string;
  id: string;
}
type IStatusSpin = "LOSE" | "WIN" | "";
export const useData = () => {
  const dispatch = useAppDispatch();
  const [slots, setSlots] = useState<Slot[]>(() =>
    shuffle(
      [
        { id: "train", img: require("../../assets/images/slots/train.png") },
        { id: "wagon", img: require("../../assets/images/slots/wagon.png") },
        {
          id: "piramida",
          img: require("../../assets/images/slots/piramida.png"),
        },
        { id: "diger", img: require("../../assets/images/slots/diger.png") },
      ].concat([
        { id: "train", img: require("../../assets/images/slots/train.png") },
        { id: "wagon", img: require("../../assets/images/slots/wagon.png") },
        {
          id: "piramida",
          img: require("../../assets/images/slots/piramida.png"),
        },
        { id: "diger", img: require("../../assets/images/slots/diger.png") },
      ])
    )
  );

  const [openCards, setOpenCards] = useState<string[]>([]);
  const [clearedCards, setClearedCards] = useState<Record<string, boolean>>({});
  const [moves, setMoves] = useState<number>(0);
  const [statusSpin, setStatusSpin] = useState<IStatusSpin>("");
  const [resetFlips, setResetFlips] = useState<boolean>(false);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const evaluate = useCallback(() => {
    const [first, second, third] = openCards;
    console.log(
      "🚀 ~ evaluate ~ openCards:",
      openCards[moves - 1],
      openCards[moves],
      moves
    );

    if (openCards[moves] === openCards[moves + 1]) {
      // setClearedCards((prev) => ({ ...prev, [second]: true }));
      setClearedCards({});
      setOpenCards([]);
      dispatch(addCoins(200)); // Додати монети за успішний збіг
    } else {
      setStatusSpin("LOSE");
      dispatch(removeCoins(100)); // Зняти монети за помилку
    }

    // Очистити відкриті карти після перевірки
    setOpenCards([]);
  }, [openCards, dispatch]);

  const onSelectSlot = useCallback(
    (slotId: string) => {
      console.log(
        "🚀 ~ evaluate ~ openCards:",
        openCards[moves],
        openCards,

        openCards[moves + 1],
        moves
      );
      // Заборона вибору карт, поки вже відкриті дві
      if (openCards.length === 2) return;

      // Якщо карта вже відкрито або знайдено пару, блокувати вибір
      if (clearedCards[slotId] || openCards.includes(slotId)) return;

      if (openCards.length === 1) {
        // Додати другу карту та збільшити кількість ходів
        setOpenCards((prev) => [...prev, slotId]);
        setMoves((prev) => prev + 1);
      } else {
        // Очистити попередній таймер та встановити нову карту
        if (timeout.current) clearTimeout(timeout.current);
        setOpenCards([slotId]);
      }
    },
    [openCards, clearedCards]
  );

  useEffect(() => {
    if (openCards.length !== 0 && openCards.length % 2 === 0) {
      timeout.current = setTimeout(() => {
        evaluate();
      }, 500);
    }

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [openCards, evaluate]);

  const checkIsFlipped = useCallback(
    (id: string) => openCards.includes(id),
    [openCards]
  );

  const checkIsInactive = useCallback(
    (slot: Slot) => Boolean(clearedCards[slot.id]),
    [clearedCards]
  );

  const onPressAgain = useCallback(() => {
    setStatusSpin("");
    setResetFlips(true);
    setSlots((prevSlots) => shuffle(prevSlots));
    setClearedCards({});
    setOpenCards([]);
    setMoves(0);
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
    checkIsFlipped,
    checkIsInactive,
    onSelectSlot,
    onPressAgain,
    resetFlips,
    moves,
  };
};
