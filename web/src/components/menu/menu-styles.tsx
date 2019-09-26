import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../theme/theme-props.interface";
import { Link } from "react-router-dom";
import { device } from "../../breakpoints/breakpoints";

export const MenuContainer = styled.div<ThemeProps>`
  position: absolute;
  top: 0;
  left: ${props => (props.visible ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  z-index: 5;
  transition: left 0.4s ease-in-out;

  @media ${device.tablet} {
    width: 175px;
    position: fixed;
  }
`;

export const Content = styled.section<ThemeProps>`
  margin-top: 110px;
`;

export const Options = styled.section<ThemeProps>`
  margin: 100px auto 0 auto;
  width: 160px;
  height: 300px;
  text-align: center;

  @media ${device.tablet} {
    width: 130px;
  }
`;

export const Option = styled.div<ThemeProps>`
  margin-top: 10px;
  text-align: left;
  cursor: pointer;
  font-size: 0.9em;

  @media ${device.tablet} {
    font-size: 0.7em;
  }

  p {
    display: inline-block;
    margin-left: 10px;

    &: hover {
      text-decoration: underline;
    }
  }
`;

export const StyledLink = styled(Link)<ThemeProps>`
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
`;
