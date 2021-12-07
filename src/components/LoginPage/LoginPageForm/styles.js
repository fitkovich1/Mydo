import styled from "styled-components";

export const LoginForm = styled.form`
  width: 450px;
  height: max-content;
  padding: 0 30px;
  margin-bottom: 20px;
  
  @media (max-width: 500px){
    width: 100%;
    
  }
`;

export const LoginFormButton = styled.button`
  width: max-content;
  padding: 10px 15px;
  border: 1px solid #ffd543;
  border-radius: 5px;
  cursor: pointer;
  font-size: .9rem;
  font-weight: 600;
  color: #595959;
  background-color: transparent;
  transition: all .5s linear;
  
  &:active{
    position: relative;
    top: 2px;
  }
`;