import { useEffect, useRef, useState } from "react";

export const useData = (isStart: boolean, setIsFinish: () => void) => {
  const [time, setTime] = useState<number>(30);
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
            return 30; // Reset to 60 when time reaches 0
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
    time, // Format time as 00:XX
  };
};
