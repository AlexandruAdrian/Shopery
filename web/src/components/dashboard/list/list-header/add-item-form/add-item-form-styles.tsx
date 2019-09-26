import styled, { DefaultTheme } from "styled-components";
import { device } from "../../../../../breakpoints/breakpoints";
import ThemeProps from "../../../../../theme/theme-props.interface";

export const InputWrapper = styled.div<ThemeProps>`
  float: left;
  width: ${props => (props.itemName ? "40%" : props.itemQty ? "20%" : "12%")};
  height: 50px;
  padding-top: ${props => (props.setShare ? "2px" : "0")};

  @media ${device.mobileM} {
    width: ${props => (props.itemName ? "40%" : props.itemQty ? "20%" : "10%")};
    margin-left: ${props =>
      props.setShare ? "-10px" : props.itemQty ? "5px" : "0"};
  }

  @media ${device.tablet} {
    width: ${props =>
      props.itemName ? "170px" : props.itemQty ? "60px" : "50px"};
    margin-left: 0;
  }
`;

export const ListItemLabel = styled.label<ThemeProps>`
  display: block;
  font-size: 1.1em;
  margin-bottom: ${props => (props.setShare ? "8.5px" : "5px")};
  padding-left: ${props =>
    props.itemName ? "10px" : props.setShare ? "16.5px" : "15px"};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
  font-weight: 650;
`;

export const ListItemInput = styled.input<ThemeProps>`
  display: block;
  width: ${props => (props.itemName ? "90%" : "55px")};
  text-align: ${props => (props.itemName ? "left" : "center")};
  border: ${props => (props.styleError ? ".8px solid #ee0000" : "none")};
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  padding: 5px 10px;
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
`;

export const AddButton = styled.button<ThemeProps>`
  float: left;
  width: 25%;
  padding: 5px 10px;
  margin-top: 20px;
  margin-left: 5px;
  display: block;
  text-align: center;
  border: none;
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  
  &:hover {
    opacity: 0.9
    cursor: pointer; 
  }

  @media ${device.mobileM} {
    margin-left: 15px;
  }

  @media ${device.tablet} {
    width: 100px;
    margin-left: 0;
  }

  @media ${device.laptop} {
    width: 200px;
    margin-left: 15px;
  }
`;
