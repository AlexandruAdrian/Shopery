import styled, { DefaultTheme } from "styled-components";
import { device } from "../../breakpoints/breakpoints";
import ThemeProps from "../../theme/theme-props.interface";

export const IconWrapper = styled.div<ThemeProps>`
  display: inline-block;
  width: ${props =>
    props.liOption ? "20%" : props.footer ? "33.33%" : "20px"};
  font-size: ${props =>
    props.footer ? "1.3em" : props.liOption ? "1em" : "0.8em"};
  color: ${props =>
    props.footer
      ? (props.theme as DefaultTheme).colors.secondary
      : props.trash
      ? "#DC143C"
      : (props.theme as DefaultTheme).colors.primary};
  text-align: center;
  line-height: ${props => (props.footer ? "50px" : "0px")};
  margin-left: ${props => (props.liOption ? "5px" : "0")};
  & :hover {
    opacity: 0.9;
    cursor: pointer;
  }

  @media ${device.mobileL} {
    margin-left: ${props => (props.liOption ? "7px" : "0")};
  }

  @media ${device.tablet} {
    color: ${props =>
      props.footer
        ? (props.theme as DefaultTheme).colors.primary
        : props.trash
        ? "#DC143C"
        : (props.theme as DefaultTheme).colors.primary};
    display: ${props => (props.footer ? "block" : "inline-block")};
    width: ${props =>
      props.liOption ? "20%" : props.footer ? "100px" : "20px"};
    margin-left: ${props =>
      props.footer ? "5px" : props.liOption ? "5px" : "0"};

    font-size: ${props =>
      props.footer ? "0.9em" : props.liOption ? "1em" : "0.8em"};

    &::after {
      clear: both;
      content: " ";
      display: table;
    }
  }
`;

export const Text = styled.p<ThemeProps>`
  margin-left: 5px;
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  font-size: 0.8em;
  float: left;
`;

export const Wrap = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 20px;
    float: left;
    margin-left: 5px;
  }
`;
