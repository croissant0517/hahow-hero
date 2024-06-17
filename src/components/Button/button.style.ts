import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  padding: 2rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  text-align: center;
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.01);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    color: #fff;
  }
`;
