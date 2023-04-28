import React from "react";
import * as S from "./Clock.styles";
import { ClockProps } from "./Clock.types";
import { formatTimeToClock } from "@/utils/formatTimeToClock";

export default function Clock({ timer = 0 }: ClockProps) {
  const { tenMinutes, unitMinutes, tenSeconds, unitSeconds } =
    formatTimeToClock(timer);

  return (
    <S.Container>
      <S.ClockNumber>{tenMinutes}</S.ClockNumber>
      <S.ClockNumber>{unitMinutes}</S.ClockNumber>
      <S.ClockDivider>:</S.ClockDivider>
      <S.ClockNumber>{tenSeconds}</S.ClockNumber>
      <S.ClockNumber>{unitSeconds}</S.ClockNumber>
    </S.Container>
  );
}
