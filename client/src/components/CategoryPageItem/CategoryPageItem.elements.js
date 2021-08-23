import styled from "styled-components";

const baseUrl = process.env.BASE_URL || "http://localhost:1337";

export const Container = styled.div`
  /* border: 2px dashed; */
  margin-bottom: 10rem;
  flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  display: flex;
  justify-content: space-between;
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
  margin-left: 3rem;
  .details-wrapper {
    margin-top: -3rem;
  }
`;
