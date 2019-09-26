import styled from "styled-components";
import ThemeProps from "../../../../../theme/theme-props.interface";
import { device } from "../../../../../breakpoints/breakpoints";

export const ListOptionsWrapper = styled.div<ThemeProps>`
  display: inline-block;
  width: 25%;
  height: auto;

  @media ${device.mobileL} {
    width: 21%;
    margin-left: 15px;
  }

  @media ${device.customXL} {
    margin-left: 17px;
  }

  @media ${device.tablet} {
    display: inline-block;
    width: 90px;
    marign-top: 15px;
    margin-left: 5px;
  }

  @media ${device.laptop} {
    width: 140px;
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  font-size: 0.9em;
  margin-left: 20%;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  @media ${device.tablet} {
    margin-left: 25px;
  }

  @media ${device.laptop} {
    margin-left: 45px;
  }
`;
