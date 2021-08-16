import styled from "styled-components";

import fbIcon from "../../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";

export const Container = styled.div`
  background: ${props => props.theme.colors.black600};
  color: white;
  padding: 4rem 2.5rem 2rem 2.5rem;

  .footer-top,
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-top {
    margin-bottom: 0.5rem;
  }

  .about {
    width: 50%;
    max-width: 540px;
    color: #878787;
    &__main {
      margin-bottom: 3.5rem;
    }
    &__copyright {
      font-weight: bold;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1rem;

  > * {
    height: 1.5rem;
    width: 1.5rem;
    &:hover {
      cursor: pointer;
      filter: brightness(0) saturate(100%) invert(74%) sepia(17%)
        saturate(3346%) hue-rotate(322deg) brightness(86%) contrast(95%);
    }
  }
  .icon-fb {
    background: url(${fbIcon});
  }
  .icon-twitter {
    background: url(${twitterIcon});
    height: 1.25rem;
    margin: 0 1.25rem;
  }
  .icon-instagram {
    background: url(${instagramIcon});
  }
`;
