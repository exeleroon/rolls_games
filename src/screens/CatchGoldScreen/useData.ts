import { useState } from "react";

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

  const [selectedSlot, setSelectedSlot] = useState<string[]>([""]);
  return { list, setList, selectedSlot, setSelectedSlot };
};
