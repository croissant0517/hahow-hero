import { ButtonContainer } from "./Button.style";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
