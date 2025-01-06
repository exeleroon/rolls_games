import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addCoins, removeCoins } from "../../store/features/slot";
import { shuffle } from "../../utils/shuffle";

interface Slot {
  img: string;
  id: string;
  type: string;
}
type IStatusSpin = "LOSE" | "WIN" | "";
export const useData = () => {
  const dispatch = useAppDispatch();
  const [cards, setSlots] = useState<Slot[]>(() =>
    shuffle(
      [
        {
          type: "train",
          id: "train",
          img: require("../../assets/images/slots/train.png"),
        },
        {
          type: "wagon",
          id: "wagon",
          img: require("../../assets/images/slots/wagon.png"),
        },
        {
          type: "piramida",
          id: "piramida",
          img: require("../../assets/images/slots/piramida.png"),
        },
        {
          type: "diger",
          id: "diger",
          img: require("../../assets/images/slots/diger.png"),
        },
      ].concat([
        {
          type: "train",
          id: "train",
          img: require("../../assets/images/slots/train.png"),
        },
        {
          type: "wagon",
          id: "wagon",
          img: require("../../assets/images/slots/wagon.png"),
        },
        {
          type: "piramida",
          id: "piramida",
          img: require("../../assets/images/slots/piramida.png"),
        },
        {
          type: "diger",
          id: "diger",
          img: require("../../assets/images/slots/diger.png"),
        },
      ])
    )
  );

  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [moves, setMoves] = useState<number>(0);
  const [statusSpin, setStatusSpin] = useState<IStatusSpin>("");
  const [resetFlips, setResetFlips] = useState<boolean>(false);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const evaluate = useCallback(() => {
    const [first, second, third, fourth] = openCards;
    if (cards[first]?.type === cards[second]?.type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      dispatch(addCoins(200));
      setOpenCards([]);
      return;
    } else {
      dispatch(removeCoins(100));
      setStatusSpin("LOSE");
    }
    // Flip cards after a 500ms duration
    setOpenCards([]);
  }, [openCards, dispatch]);

  const onSelectSlot = useCallback(
    (index: string | number) => {
      if (openCards.length === 1) {
        setOpenCards((prev) => [...prev, index]);
        // increase the moves once we opened a pair
        setMoves((moves) => moves + 1);
      } else {
        // If two cards are already open, we cancel timeout set for flipping cards back
        clearTimeout(timeout.current);
        setOpenCards([index]);
      }
    },
    [openCards, clearedCards]
  );

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluate, 500);
    }
  }, [openCards]);
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
      ...cards.slice(0, 4),
      {
        id: "man",
        img: require("../../assets/images/man.png"),
      },
      ...cards.slice(4),
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
