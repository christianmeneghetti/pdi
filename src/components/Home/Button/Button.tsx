import * as S from "./Button.styles";
import { ButtonProps } from "./Button.types";

export default function Button({ onClick, type, children }: ButtonProps) {
  return (
    <S.Button onClick={onClick} type={type}>
      {children}
    </S.Button>
  );
}
