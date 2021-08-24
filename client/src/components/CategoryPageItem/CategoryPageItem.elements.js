import styled, { css } from "styled-components";

const baseUrl = process.env.BASE_URL || "http://localhost:1337";

export const Container = styled.div`
  /* border: 2px dashed; */
  flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto 10rem auto;
  > * {
    flex: 1;
    /* border: 1px dashed green; */
  }
`;

export const ImageWrapper = styled.div`
  padding-bottom: 49%;
  position: relative;
`;

export const ItemImage = styled.div`
  background: url(${props => `${baseUrl}${props.desktopImgUrl}`});
  /* max-height: 560px;
  max-width: 540px; */
  padding-bottom: 40%;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* transform: translate(-50%, -50%); */
`;
export const ItemDetails = styled.div`
  display: flex;
  align-items: center;

  ${props => {
    if (props.index % 2 === 0) {
      return css`
        margin-left: 8rem;
      `;
    } else {
      return css`
        margin-right: 8rem;
      `;
    }
  }}

  .details-wrapper {
    margin-top: -3rem;
    .new-product {
      color: ${props => props.theme.colors.primary};
      letter-spacing: 10px;
      font-size: 0.875rem;
    }

    h2 {
      margin-top: 0;
    }

    button {
      margin-top: 2rem;
    }
  }
`;
