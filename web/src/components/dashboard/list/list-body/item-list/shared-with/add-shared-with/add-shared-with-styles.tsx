import styled, { DefaultTheme } from "styled-components";
import { device } from "../../../../../../../breakpoints/breakpoints";
import ThemeProps from "../../../../../../../theme/theme-props.interface";

export const FormContainer = styled.div<ThemeProps>`
  width: 90%;
  height: auto;
  padding: 5px 0px
  background-color: ${props => (props.theme as DefaultTheme).colors.secondary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  margin: 0 auto;
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
  
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

export const FormHeader = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  border-bottom: 1px solid
    ${props => (props.theme as DefaultTheme).colors.tertiary};
  padding-bottom: 5px;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const CloseBtn = styled.div<ThemeProps>`
  float: right;
  margin-right: 10px;
  cursor: pointer;
  display: block;
`;

export const Title = styled.h5<ThemeProps>`
  width: 100%;
  display: block;
  text-align: center;
  clear: both;
`;
