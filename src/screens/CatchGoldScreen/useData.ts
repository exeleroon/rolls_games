import { useCallback, useDeferredValue, useEffect, useState } from "react";
import { addCoins, removeCoins, updateLife } from "../../store/features/slot";
import {
  Easing,
  ReduceMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppDispatch } from "../../store/hooks";
import { useTimer } from "../../hooks/useTimer";
const list = [
  {
    id: "train1" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "train2" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },

  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },
  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
  {
    id: "train3" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "train4" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },

  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },
  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
  {
    id: "train2" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "train2" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },

  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },
  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
  {
    id: "train2" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "train2" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },

  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },
  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
  {
    id: "train2" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "train2" + new Date().valueOf(),
    img: require("../../assets/images/slots/train.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },

  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
  {
    id: "wagon" + new Date().valueOf(),
    img: require("../../assets/images/slots/wagon.png"),
  },
  {
    id: "piramida" + new Date().valueOf(),
    img: require("../../assets/images/slots/piramida.png"),
  },
  {
    id: "diger" + new Date().valueOf(),
    img: require("../../assets/images/slots/diger.png"),
  },
];
export const useData = () => {
  const dispatch = useAppDispatch();

  const offsetY = useSharedValue<number>(0);

  const [statusSpin, setStatusSpin] = useState<"WIN" | "LOSE" | "">("");
  const [selectedSlot, setSelectedSlot] = useState<string[]>([]);
  const [isStart, setIsStart] = useState<boolean>(false);
  console.log("🚀 ~ useData ~ isStart:", isStart);
  const [wastedLife, setWastedLife] = useState<number>(0);
  const [scrolledOutItems, setScrolledOutItems] = useState<
    { id: string; img: string }[]
  >([]);
  const { time } = useTimer({
    isStart: isStart,
    setIsFinish: () => {
      setIsStart(false);
    },
    duration: 10,
  });
  const life = useDeferredValue(
    scrolledOutItems.filter(
      (i) => !selectedSlot.includes(i.id) && i.id.slice(0, 4) !== "dead"
    ).length
  );

  const scrollToIndex = useCallback((index: number) => {
    offsetY.value = withTiming(list.length - 1, {
      duration: 5000,
      easing: Easing.linear,
      reduceMotion: ReduceMotion.Never,
    });
  }, []);
  const onPressAgain = useCallback(() => {
    setSelectedSlot([]);
    setWastedLife(0);
    setScrolledOutItems([]);
    setIsStart(true);
    setStatusSpin("");
  }, []);

  useEffect(() => {
    if (selectedSlot.find((item) => item === "dead")) {
      setStatusSpin("WIN");
      dispatch(removeCoins(selectedSlot.length * 100));
    }
  }, [selectedSlot]);

  useEffect(() => {
    setIsStart(true);
  }, []);

  useEffect(() => {
    if (isStart) scrollToIndex(list.length - 1);
  }, [isStart]);

  useEffect(() => {
    if (wastedLife >= 3) {
      setStatusSpin("LOSE");
      dispatch(removeCoins(100));
    }
  }, [wastedLife]);

  useEffect(() => {
    if (time < 2 && wastedLife < 3) {
      setStatusSpin("WIN");
      dispatch(addCoins(selectedSlot.length * 100));
    }
  }, [time]);

  useEffect(() => {
    setWastedLife(life);
  }, [life]);

  useEffect(() => {
    dispatch(updateLife(wastedLife));
  }, [wastedLife]);

  return {
    list,
    isStart,
    scrolledOutItems,
    selectedSlot,
    statusSpin,
    setIsStart,
    setScrolledOutItems,
    setSelectedSlot,
    onPressAgain,
  };
};
