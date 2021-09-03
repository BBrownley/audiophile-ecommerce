import styled, { css } from "styled-components";

const imgStyle = () => css`
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.div`
  display: flex;

  .gallery-img {
    border-radius: 0.5rem;
  }

  .side-images {
    flex: 4;
  }

  .side-image-wrapper {
    position: relative;
    padding-bottom: 62.9%;
    &:first-of-type {
      margin-bottom: 2rem;
    }
    &:last-of-type {
      margin-top: 2rem;
    }
  }

  .main-image-wrapper {
    position: relative;
    padding-bottom: 50.2%;
    flex: 6;
    margin-left: 2rem;
  }
`;

export const Image1 = styled.div`
  background-image: url(${props => props.desktopImg});
  ${imgStyle()}
`;

export const Image2 = styled.div`
  background-image: url(${props => props.desktopImg});
  ${imgStyle()}
`;

export const ImageMain = styled.div`
  background-image: url(${props => props.desktopImg});
  ${imgStyle()}
`;
