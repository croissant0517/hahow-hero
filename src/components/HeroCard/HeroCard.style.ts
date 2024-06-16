import styled from "styled-components";
import css from "styled-jsx/css";

export const HeroCardContainer = styled.div`
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 1rem;
  padding: 1rem;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }

  img: {
    border-radius: 1rem;
  }

  h2 {
    margin-top: 0.5rem;
  }
`;

export const ImageSkeleton = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ccc;
  border-radius: 0.5rem;
  animation: loading 1.5s infinite;
`;

export const NameSkeleton = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 20px;
  background-color: #ccc;
  border-radius: 0.5rem;
  animation: loading 1.5s infinite;
`;
