import "styled-components";
import { IDefaultTheme } from "./IDefaultTheme";

declare module "styled-components" {
  export interface DefaultTheme extends IDefaultTheme {}
}
