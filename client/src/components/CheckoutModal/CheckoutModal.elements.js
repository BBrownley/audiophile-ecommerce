import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
`;

export const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 33.75rem;
  padding: 3rem;
  background: white;
  border-radius: 0.5rem;

  a button {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const Summary = styled.div`
  display: flex;

  > * {
    padding: 2rem;
  }

  .items {
    background: #f1f1f1;
    flex: 7;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .view-less-more {
    text-align: center;
    border-top: 1px solid rgba(0,0,0,.08);
    padding-top: 1rem;
    &:hover {
      cursor: pointer;
    }
  }

  .grand-total {
    background: black;
    flex: 3;
    color: white;
    text-transform: uppercase;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    p {
      margin: 0;
      &:first-of-type {
        margin-bottom: 0.5rem;
        color: #808080;
      }
    }
  }
`;
