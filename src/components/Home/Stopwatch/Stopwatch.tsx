import Button from "../Button/Button";
import { useEffect, useState } from "react";
import * as S from "./Stopwatch.styles";
import { StopwatchProps } from "./Stopwatch.types";
import { timeToSeconds } from "@/utils/timeToSeconds";
import Clock from "./Clock";

export default function Stopwatch({ selected, finishTask }: StopwatchProps) {
  const [timer, setTimer] = useState<number>();

  useEffect(() => {
    if (selected?.timer) {
      setTimer(timeToSeconds(selected.timer));
    }
  }, [selected]);

  function countdown(timer: number = 0) {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        return countdown(timer - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <S.Stopwatch className="stopwatch">
      <p>Escolha um card e inicie o cronômetro</p>
      <S.ClockWrapper>
        <Clock timer={timer} />
      </S.ClockWrapper>
      <Button onClick={() => countdown(timer)}>Começar!</Button>
    </S.Stopwatch>
  );
}
