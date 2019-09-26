import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../../../../../theme/theme-props.interface";
import { device } from "../../../../../../breakpoints/breakpoints";

export const StyledItem = styled.li<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 5px;
  font-size: 0.9em;
  margin-top: 5px;
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  p {
    padding-right: 7px;
  }

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ItemDetails = styled.div<ThemeProps>`
  width: ${props => (props.historyList ? "100%" : "55%")};
  height: auto;
  font-size: 0.9em;
  font-weight: 600;
  padding-left: 2px;
  float: ${props => (props.historyList ? "none" : "left")};
  &:hover p {
    text-decoration: ${props => (props.historyList ? "none" : "line-through")};
  }

  &:hover {
    cursor: ${props => (props.historyList ? "default" : "pointer")};
  }
`;

export const ItemOptions = styled.div`
  float: right;
  width: 45%;
  height: auto;
  font-size: 0.9em;

  @media ${device.mobileL} {
    width: 150px;
  }

  @media ${device.tablet} {
    width: 160px;
  }
`;
