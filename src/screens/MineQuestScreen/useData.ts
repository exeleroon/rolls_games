import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addCoins, removeCoins } from "../../store/features/slot";
import { shuffle } from "../../utils/shuffle";
import CardFlip from "react-native-card-flip";

interface Slot {
  img: string;
  id: string;
  type: string;
}
type IStatusSpin = "LOSE" | "WIN" | "";
export const useData = () => {
  const dispatch = useAppDispatch();
  const [cards, setCards] = useState<string[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [statusSpin, setStatusSpin] = useState<IStatusSpin>("");
  const [isStartTimer, setIsStartTimer] = useState<boolean>(true);
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const images = [
      require("../../assets/images/slots/train.png"),
      require("../../assets/images/slots/wagon.png"),
      require("../../assets/images/slots/piramida.png"),
      require("../../assets/images/slots/diger.png"),
    ]; // Символи для пар
    const shuffledCards = shuffle([
      ...images.concat([
        require("../../assets/images/slots/train.png"),
        require("../../assets/images/slots/wagon.png"),

        require("../../assets/images/slots/piramida.png"),

        require("../../assets/images/slots/diger.png"),
      ]),
    ]);
    setCards([
      ...shuffledCards.slice(0, 4),
      { id: "man", img: require("../../assets/images/man.png") },
      ...shuffledCards.slice(4),
    ]);
    setSelectedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  const handleCardPress = (index: number) => {
    if (
      selectedCards.length === 2 ||
      selectedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    setSelectedCards((prev) => [...prev, index]);

    if (selectedCards.length === 1) {
      const firstCardIndex = selectedCards[0];
      const secondCardIndex = index;

      if (cards[firstCardIndex] === cards[secondCardIndex]) {
        setMatchedCards((prev) => [...prev, firstCardIndex, secondCardIndex]);
      }

      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);

      setMoves((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (isStartTimer === false && matchedCards.length < 8) {
      setStatusSpin("LOSE");
      dispatch(removeCoins(100));
    } else if (matchedCards.length === 8) {
      setStatusSpin("WIN");
      dispatch(addCoins(200));
    }
  }, [matchedCards, isStartTimer]);
  const onPressAgain = useCallback(() => {
    setStatusSpin("");
    setIsStartTimer(true);
    // setClearedCards({});
    setMoves(0);
  }, []);

  return {
    cards,
    moves,
    selectedCards,
    matchedCards,
    isStartTimer,
    statusSpin,
    setIsStartTimer,
    handleCardPress,
    onPressAgain,
  };
};
