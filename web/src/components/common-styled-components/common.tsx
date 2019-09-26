import styled, { DefaultTheme } from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../breakpoints/breakpoints";
import ThemeProps from "../../theme/theme-props.interface";

export const Container = styled.div<ThemeProps>`
  position: relative;
  min-height: 100%;
  padding-top: ${props => (props.dashboard ? "0" : "3em")};
  background-color: ${props =>
    props.dashboard
      ? (props.theme as DefaultTheme).colors.tertiary
      : (props.theme as DefaultTheme).colors.primary};
`;

export const FormContainer = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 1.5em;
  margin-top: ${props => (props.changePass ? "25px" : "40px")};

  h2 {
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};
    text-align: center;
    font-weight: 450;
    font-size: ${props => (props.changePass ? "1em" : "default")};
  }

  hr {
    width: 5em;
    margin: ${props => (props.changePass ? "0.5em" : "0.2em")} auto 0 auto;
    border: 0.2px solid
      ${props => (props.theme as DefaultTheme).colors.secondary};
    background-color: ${props =>
      (props.theme as DefaultTheme).colors.secondary};
  }
`;

export const StyledForm = styled.form<ThemeProps>`
  text-align: ${props => (props.listHeader ? "left" : "center")};
  font-size: 0.7em;
  padding: 0 ${props => (props.listHeader ? "0 0 0" : "1.5em 1.5em 1.5em")};
  margin-top: ${props =>
    props.recover ? "9em" : props.changePass ? "40px" : "2em"};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};

  & ::after {
    content: "";
    clear: both;
    display: table;
  }

  @media ${device.tablet} {
    margin: ${props => (props.recover ? "9em" : "2em")} auto 0 auto;
  }

  @media ${device.laptop} {
    width: 85%;
  }
`;

export const StyledLabel = styled.label<ThemeProps>`
  display: "block"
  width: 100%;
  font-size: 1em;
  color: ${props =>
    props.listHeader
      ? (props.theme as DefaultTheme).colors.primary
      : (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  margin: 0.5em 0 0.2em 0;

`;

export const StyledInput = styled.input<ThemeProps>`
  width: 15em;
  height: 25px;
  display: ${props => (props.listHeader ? "inline-block" : "block")};
  margin: 0 auto 3px auto;
  text-align: center;
  padding: 0 ${props => (props.listHeader ? "10px" : "5px")};
  border: ${props => (props.styleError ? "1.2px solid #ee0000" : "none")};
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props => (props.theme as DefaultTheme).borderRadius};
`;

export const StyledButton = styled.button<ThemeProps>`
  width: 15em;
  height: 25px;
  border: ${props =>
    props.reversed
      ? `1px solid ${(props.theme as DefaultTheme).colors.secondary}`
      : "none"};
  border-radius: 20px;
  display: block;
  margin: ${props =>
    props.formButton || props.changePass
      ? "1.5em auto 0 auto"
      : "0 auto 0.3em auto"};
  vertical-align: middle;
  font-weight: bold;
  font-weight: ${props => (props.reversed ? "450" : "600")};
  background-color: ${props =>
    props.reversed
      ? (props.theme as DefaultTheme).colors.primary
      : (props.theme as DefaultTheme).colors.secondary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  color: ${props =>
    props.reversed
      ? (props.theme as DefaultTheme).colors.secondary
      : (props.theme as DefaultTheme).colors.primary};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    text-decoration: underline;
  }

  @media ${device.tablet} {
    width: 15em;
    height: 25px;
    font-size: ${props =>
      props.formButton || props.changePass ? "1.2em" : "0.8em"};
  }
`;

/* This component will display after server responds to the request */
export const ResponseMessage = styled.p<ThemeProps>`
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  text-align: center;
  font-size: 0.8em;
  margin-top: 120px;
  margin-bottom: 40px;
`;

export const StyledLink = styled(Link)<ThemeProps>`
  text-decoration: none;
  color: ${props => (props.theme as DefaultTheme).colors.secondary};

  p {
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};
    font-size: 0.65em;
    text-align: center;
    margin-top: 0.2em;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const StyledFormError = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  color: #ee0000;
  text-align: ${props =>
    props.itemForm || props.editForm || props.friendForm ? "left" : "center"};
  padding-left: ${props => (props.friendForm ? "10px" : "0")};
  margin-top: ${props => (props.friendForm ? "5px" : "0")};

  p {
    font-weight: 600;
    font-size: 10px;
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  }
`;
// This component will style and encapsulate spinner animation
export const LoadingAnimation = styled.div<ThemeProps>`
  margin-top: 1.5em;
  font-size: 1.5em;
`;

export const ErrorsContainer = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  clear: both;
`;

export const Wrapper = styled.section<ThemeProps>`
  padding: 50px 10px;
  height: auto;
  width: 100%;
`;

export const Overlay = styled.div<ThemeProps>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(175, 175, 175, 0.6);
  width: 100%;
  height: 100%;
  z-index: 99;
  padding: 45% 0;

  @media ${device.mobileL} {
    padding: 30% 0;
  }

  @media ${device.customXL} {
    padding-top: 20%;
  }

  @media ${device.tablet} {
    padding-top: 100px;
  }
`;

export const OverlayForm = styled.form<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 10px 10px 0px 10px;

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const OverlayInput = styled.input<ThemeProps>`
  width: 80%;
  height: 25px;
  padding: 5px 8px;
  display: inline-block;
  background: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};

  border: ${props => (props.styleError ? "1.2px solid #ee0000" : "none")};
`;

export const OverlaySearchBtn = styled.button<ThemeProps>`
  width: 40px;
  height: 25px;
  float: right;
  background: ${props => (props.theme as DefaultTheme).colors.primary};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ResultContainer = styled.ul`
  width: 100%;
  height: auto;
  list-style: none;
  padding-bottom: 10px;
`;

export const ResultItem = styled.li`
  width: 100%;
  height: 35px;
  padding-left: 10px;
  margin-top: 5px;
  line-height: 35px;
`;

export const ResultError = styled.p`
  padding-top: 10px;
  text-align: center;
`;

export const FloatedIconWrapper = styled.div<ThemeProps>`
  width: 11px;
  float: right;
  margin-right: ${props => (props.friendResult ? "19px" : "5px")};
`;
