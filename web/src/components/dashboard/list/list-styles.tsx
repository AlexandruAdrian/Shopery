import styled, { DefaultTheme } from "styled-components";
import { device } from "../../../breakpoints/breakpoints";
import ThemeProps from "../../../theme/theme-props.interface";

export const ListWrapper = styled.section<ThemeProps>`
  width: 100%;
  height: auto;
  display: block;
  margin-top: 15px;
  padding-bottom: 5px;
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  background-color: ${props => (props.theme as DefaultTheme).colors.secondary};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};

  @media ${device.customXL} {
    width: 75%;
    margin: 15px auto 0 auto;
  }

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.laptop} {
    width: 600px;
  }
`;
