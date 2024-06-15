import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 10rem;
  min-height: 100dvh;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    padding: 2rem 1rem;
  }
`;
