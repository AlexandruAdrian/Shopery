import "styled-components";
import { string } from "prop-types";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    logoFont: string;
    borderRadius: string;
    dashboardBorderRadius: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
    };
  }
}
