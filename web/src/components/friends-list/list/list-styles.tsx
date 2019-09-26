import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  height: auto;
  padding: 10px 10px 0px 10px;
  list-style-type: none;
  font-size: 0.9em;

  li {
    margin-bottom: 10px;
    height: 30px;
    &::after {
      content: "";
      display: table;
      clear: both;
    }
  }
`;

export const RemoveFriendBtn = styled.div`
  float: right;
  height: 15px;
  width: 15px;
  text-align: center;
  margin-top: 7.5px;
  margin-right: 5px;
  color: red;

  & :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
