import { StyleSheet, Text, View } from "react-native";
import React, { FC, memo, PropsWithoutRef } from "react";
import * as Progress from "react-native-progress";
import { useTimer } from "../../hooks/useTimer";

interface TimerProps {
  isStart: boolean;
  setIsFinish: () => void;
}
const Timer: FC<PropsWithoutRef<TimerProps>> = memo(function Timer(props) {
  const { isStart, setIsFinish } = props;
  const { time } = useTimer({ isStart, setIsFinish, duration: 10 });

  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>{`00:${
        time < 10 ? `0${time}` : time
      }`}</Text>
      <Progress.Bar
        animated={true}
        progress={Number((time * 3.3) / 100)}
        width={100}
        borderWidth={0}
        style={{ height: 12 }}
        height={12}
        color="#FFC400"
        unfilledColor="#FFC40040"
      />
    </View>
  );
});

export default Timer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 36,
    width: 100,
    height: 12,
    flex: 1,
    justifyContent: "center",
  },
  textTimer: {
    fontSize: 8,
    lineHeight: 11,
    position: "absolute",
    zIndex: 1,
    fontWeight: "700",
    textAlign: "center",
    alignSelf: "center",
  },
});
