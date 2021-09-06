import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    margin: 0 1rem;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const Item = styled.div`
  img {
    width: 100%;
    max-width: 350px;
    height: auto;
  }
`;
