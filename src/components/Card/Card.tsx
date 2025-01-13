import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface CardProps {
  symbol: string;
  isFlipped: boolean;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ symbol, isFlipped, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.card]}
        onPress={onPress}
        disabled={isFlipped}
      >
        {isFlipped ? (
          <Image
            style={styles.card}
            resizeMode="contain"
            source={symbol as ImageSourcePropType}
          />
        ) : (
          <Image
            resizeMode="contain"
            style={styles.card}
            source={require("../../assets/images/chest.png")}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
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
  innerCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 5,
  },
  flippedCard: {
    backgroundColor: "#FFD700",
  },
  text: {
    fontSize: 32,
  },
});
