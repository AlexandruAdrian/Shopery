import styled from "styled-components";
import ThemeProps from "../../../../theme/theme-props.interface";

export const ListBodyWrapper = styled.section<ThemeProps>`
  width: 100%;
  height: auto;
  margin-top: ${props => (props.historyList ? "0px" : "10px")};
  padding: 0px 9px 5px 9px;
`;

export const ListBodyHeader = styled.div`
  width: 100%;
  height: auto;
  padding: 0 5px;
`;

export const FloatedContent = styled.div<ThemeProps>`
  width: ${props => (props.historyList ? "100%" : "55%")};
  height: auto;
  font-size: 0.8em;
  font-weight: 600;
  padding-left: 2px;
  padding-top: ${props => (props.historyList ? "5px" : "0")};
`;

export const NameWrapper = styled.p<ThemeProps>`
  display: inline-block;
  width: ${props => (props.historyList ? "77%" : "80%")};
`;

export const QtyWrapper = styled.p<ThemeProps>`
  float: right;
  width: 25px;
  margin-right: ${props => (props.historyList ? "2px" : "0")};
  text-align: ${props => (props.historyList ? "center" : "right")};
`;

export const NoItems = styled.p<ThemeProps>`
  font-size: ${props => (props.shared ? "0.7em" : "0.9em")};
  padding-top: ${props => (props.shared ? "5px" : "0")};
  text-align: center;
  margin-top: ${props => (props.historyList ? "5px" : "0")};
`;
