import styled, { css } from "styled-components";

export const Container = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    li a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.25s color;
      font-size: 0.8125rem;
      letter-spacing: 2px;
      font-weight: bold;
      padding: 0 1rem;
      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
    li:first-of-type {
      a {
        padding: 0 1rem 0 0;
      }
    }
    li:last-of-type {
      a {
        padding: 0 0 0 1rem;
      }
    }
  }
  @media (max-width: 800px) {
    display: ${props => (props.footer ? "inline-block" : "none")};
  }
`;
