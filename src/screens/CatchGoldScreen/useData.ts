import { useCallback, useEffect, useMemo, useState } from "react";

export const useData = () => {
  const [list, setList] = useState([
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
  ]);
  const generateLargeList = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => {
        const item = list[i % list.length]; // Циклічний доступ до елементів шаблону
        return {
          id: `${item.id}-${Date.now()}-${i}`, // Унікальний ID
          img: item.img,
        };
      }),
    [list]
  );

  // Генерація великого списку (наприклад, 100 елементів)
  useEffect(() => {
    setList(generateLargeList);
  }, []);

  const [selectedSlot, setSelectedSlot] = useState<string[]>([""]);
  return { list, setList, selectedSlot, setSelectedSlot };
};
