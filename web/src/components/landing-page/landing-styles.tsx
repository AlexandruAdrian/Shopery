import styled, { DefaultTheme } from "styled-components";

import { device } from "../../breakpoints/breakpoints";
import ThemeProps from "../../theme/theme-props.interface";

export const Description = styled.section<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 0 1.5em;

  @media ${device.tablet} {
    width: 75%;
    margin: 0 auto;
  }

  @media ${device.laptopL} {
    width: 60%;
  }

  h4 {
    margin-top: 3em;
    font-weight: 300;
    text-align: center;
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};

    @media ${device.tablet} {
      font-size: 0.9em;
    }

    @media ${device.laptop} {
      font-weight: 300;
    }

    span {
      font-weight: 900;
    }
  }
`;

export const ButtonsContainer = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  margin: 7em auto 0 auto;

  p {
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};
    margin: 1em 0;
    text-align: center;
    font-size: 0.85em;

    @media ${device.tablet} {
      font-size: 0.65em;
    }
  }
`;
