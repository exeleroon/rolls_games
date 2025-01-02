import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { FC, useEffect, useRef } from "react";

import CardFlip from "react-native-card-flip";

interface FlipSlotProps {
  img: string | ImageSourcePropType;
  slotId: string;
  resetFlips: boolean;
  isFlipped: boolean;
  isInactive: boolean;
  _index: number;
  onSelectSlot: (slotId: string) => void;
}
const FlipSlot: FC<FlipSlotProps> = ({
  img,
  slotId,
  _index,
  isFlipped,
  isInactive,
  resetFlips,
  onSelectSlot,
}) => {
  console.log("🚀 ~ isInactive:", isInactive);
  const refCard = useRef<Array<CardFlip | null>>([]); // Array of refs
  useEffect(() => {
    if (resetFlips)
      refCard.current[_index]?.state.side === 1 &&
        refCard.current[_index]?.flip();
  }, [resetFlips, slotId]);
  const handleClick = (slotId: string) => {
    !isFlipped && !isInactive && onSelectSlot(slotId);
  };
  return (
    <CardFlip
      style={styles.cardContainer}
      ref={(el) => (refCard.current[_index] = el)} // Assign ref to the index
    >
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card1]}
        onPress={() => {
          refCard.current[_index]?.flip(); // Use the index-specific ref
          handleClick(slotId);
        }}
      >
        <Image
          resizeMode="contain"
          style={styles.card}
          source={require("../../assets/images/chest.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card2]}
        onPress={() =>
          !isFlipped && !isInactive && refCard.current[_index]?.flip()
        }
      >
        <Image
          resizeMode="contain"
          style={styles.card}
          source={img as ImageSourcePropType}
        />
      </TouchableOpacity>
    </CardFlip>
  );
};

export default FlipSlot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  cardContainer: {
    width: 100,
    height: 100,
    margin: 10,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {},
  card2: {},
  label: {
    lineHeight: 470,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
