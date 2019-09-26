import styled from "styled-components";

export const StyledSharedBodyHeader = styled.div`
  width: 100%;
  height: auto;
  font-size: 0.8em;
  font-weight: 600;
  padding-left: 5px;

  p {
    display: inline-block;
  }

  p:last-child {
    float: right;
    margin-right: 10px;
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;
