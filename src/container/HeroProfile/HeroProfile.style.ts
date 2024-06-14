import styled from "styled-components";

export const HeroProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 1rem;
  margin-top: 1rem;

  @media screen and (max-width: 300px) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;

  span {
    font-size: 1.25rem;
    width: 4rem;
    text-align: center;
  }

  @media screen and (max-width: 300px) {
    span {
      font-size: 1rem;
      width: auto;
    }
  }
`;

export const Controller = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Submit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
`;
