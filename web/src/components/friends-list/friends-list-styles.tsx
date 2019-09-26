import styled, { DefaultTheme } from "styled-components";

export const FriendsListHead = styled.div`
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid
    ${props => (props.theme as DefaultTheme).colors.tertiary};

  h4 {
    width: 60px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const FriendsIconWrapper = styled.div`
  float: left;
  width: 20px;
  height: 20px;
  font-size: 0.9em;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
