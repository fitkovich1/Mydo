import styled from "styled-components";

export const FormInputContainer = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  margin: 25px 0;
`;

export const FormInputLabel = styled.label`
  position: absolute;
  top: -15px;
  left: 15px;
  width: max-content;
  background-color: #fff;
  padding: 0 5px;
  font-weight: 500;
  font-size: 1rem;
  color: #595959;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const FormInputField = styled.input`
  width: 100%;
  height: 30px;
  padding: 20px 10px;
  outline: none;
  background: transparent;
  font-size: 1rem;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  color: #595959;

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }

  &.no-autofill-bkg:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

export const FormInputFieldError = styled.p`
  font-size: 0.9rem;
  color: red;
  margin: 3px 0 0 7px;
`;
