import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const CategoryHeader = styled.div`
  background: black;
  color: white;
  margin-left: -100vw;
  margin-right: -100vw;
  margin-top: -5.75rem;
  height: 21rem;
  text-align: center;
  position: relative;
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 1.5rem;
  }
`;
