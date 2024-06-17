import Button from "../Button/Button";

import { ErrorContainer } from "./Error.style";

type ErrorProps = {
  title?: string;
  description?: string;
};

const Error = ({
  title = "發生了一點問題",
  description = "薩諾斯可能彈指了...",
}: ErrorProps) => {
  return (
    <ErrorContainer>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button
        onClick={() => {
          location.href = "/heroes";
        }}
      >
        回到英雄列表
      </Button>
    </ErrorContainer>
  );
};

export default Error;
