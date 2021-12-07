import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 100px;
  border-top: 1px solid #E7E7E7;
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
`;

const NavbarItemLink = styled(Link)`
  width: max-content;
  align-self: center;
  justify-self: center;
  top: -26px;
  left: 50%;
  cursor: pointer;
  border-radius: 50%;
  position: ${props => props.absolute ? "absolute" : "static"};
  transform: ${props => props.absolute ? "translateX(-50%)" : "translateX(0)"};
  font-weight: ${props => props.active ? "600" : "400"};
  text-decoration: none;

  &:before {
    display: ${props => props.absolute ? "block" : "none"};
    box-shadow: ${props => props.absolute ? "0px 5px 20px #C4C4C4" : "0"};
    background-color: ${props => props.active ? "#ffd543" : "#C4C4C4"};
    content: "";
    width: 66px;
    height: 33px;
    opacity: .5;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    border-radius: 0 0 80px 80px;
    z-index: -1;
  }
`;

const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavbarItemName = styled.p`
  text-align: center;
  line-height: 1;
  font-size: 1rem;
  color: #000;
  &:first-letter{
    text-transform: uppercase;
  }
`;

export const Nav = {
    NavbarContainer,
    NavbarItemLink,
    NavbarItem,
    NavbarItemName
}