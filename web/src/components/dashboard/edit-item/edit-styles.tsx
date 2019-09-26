import styled, { DefaultTheme } from "styled-components";
import { device } from "../../../breakpoints/breakpoints";
import ThemeProps from "../../../theme/theme-props.interface";

export const EditForm = styled.form<ThemeProps>`
  width: 90%;
  height: auto;
  padding: 5px 10px 10px 10px;
  background-color: ${props => (props.theme as DefaultTheme).colors.secondary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  margin: 0 auto;

  @media ${device.customXL} {
    width: 75%;
  }

  @media ${device.tablet} {
    width: 400px;
    margin: 0 auto;
  }

  @media ${device.laptop} {
    width: 500px;
  }
`;

export const EditHeader = styled.div<ThemeProps>`
  width: 100%;
  height: 30px;
  color: ${props => (props.theme as DefaultTheme).colors.primary};

  div {
    width: 11px;
    height: auto;
    float: right;
    cursor: pointer;
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const EditBody = styled.div<ThemeProps>`
  width: 100%;
  padding: 0;
`;

export const EditInputWrapper = styled.div<ThemeProps>`
  display: inline-block;
  margin-left: 7.5px;
  margin-bottom: 5px;
  width: ${props => (props.itemName ? "60%" : props.itemQty ? "20%" : "10%")};
  text-align: ${props => (props.itemName ? "left" : "center")};
  height: auto;
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  font-size: 0.8em;
`;

export const EditLabel = styled.label<ThemeProps>`
  display: block;
  padding-left: ${props =>
    props.itemName ? "10px" : props.setShare ? "1.5px" : "0"};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
  margin-bottom: ${props => (props.setShare ? "7px" : "5px")};
  font-weight: 600;
`;

export const EditInput = styled.input<ThemeProps>`
  width: ${props => (props.setShare ? "15px" : "95%")};
  height: ${props => (props.setShare ? "15px" : "auto")};
  padding: 5px 10px;
  border: ${props => (props.styleError ? "0.6px solid #ee0000" : "none")};
  text-align: ${props => (props.itemQty ? "center" : "left")};
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  margin-left: ${props => (props.setShare ? "3px" : "0")};
  cursor: ${props => (props.setShare ? "pointer" : "normal")};
`;

export const EditButton = styled.button<ThemeProps>`
  display: block;
  width: 95%;
  border: none;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  padding: 4px 0;
  margin: 8px auto 0 auto;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media ${device.mobileL} {
    width: 50%;
  }
`;
