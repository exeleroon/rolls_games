import { useEffect, useRef, useState } from "react";
interface TimerProps {
  isStart: boolean;
  setIsFinish: () => void;
  duration?: number;
}
export const useTimer = ({
  isStart,
  setIsFinish,
  duration = 30,
}: TimerProps) => {
  const [time, setTime] = useState<number>(duration || 10);

  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (time === 0) {
      setIsFinish();
    }
  }, [time]);

  useEffect(() => {
    if (isStart) {
      timerInterval.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerInterval.current as NodeJS.Timeout);
            setIsFinish();
            return 30;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    };
  }, [isStart]);

  return {
    time,
  };
};
