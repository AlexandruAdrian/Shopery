import { DefaultTheme } from "styled-components";

export default interface ThemeProps {
  theme?: DefaultTheme;
  reversed?: boolean;
  styleError?: boolean;
  formButton?: boolean;
  recover?: boolean;
  dashboard?: boolean;
  shared?: boolean;
  footer?: boolean;
  liOption?: boolean;
  trash?: boolean;
  listHeader?: boolean;
  itemName?: boolean;
  itemQty?: boolean;
  setShare?: boolean;
  itemForm?: boolean;
  editForm?: boolean;
  friendForm?: boolean;
  friendResult?: boolean;
  historyList?: boolean;
  visible?: boolean;
  changePass?: boolean;
}
