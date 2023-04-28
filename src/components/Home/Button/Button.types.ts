export type ButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
};
