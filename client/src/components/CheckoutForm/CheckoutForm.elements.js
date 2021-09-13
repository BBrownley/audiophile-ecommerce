import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 3.25rem;

  h3 {
    margin: 0;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 2.5rem;

  .section-label {
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.93px;
  }

  .fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  label {
    .field-header {
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .form-label {
        font-size: 0.75rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .form-error {
        font-size: 0.75rem;
        color: red;
      }
    }
  }
  input {
    flex: 1;
    box-sizing: inherit;
    font-size: 0.875rem;
    font-weight: bold;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #cfcfcf;
    &:focus {
      outline: none;
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }

  ${props => {
    if (props.fullwidth) {
      return css`
        grid-column: 1 / -1;
      `;
    }
  }}
`;
