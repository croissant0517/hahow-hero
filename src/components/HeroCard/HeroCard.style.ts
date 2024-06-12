import styled from "styled-components";

export const HeroCardContainer = styled.div`
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 1rem;
  padding: 1rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }

  img: {
    border-radius: 1rem;
  }
`;
