import { generateTheme, IColorSet } from "vscode-theme-generator";
import { ansiGroups } from "../ganymede";
import * as path from "path";

const colors: IColorSet = {
  base: {
    background: ansiGroups.normal.black,
    foreground: ansiGroups.normal.white,
    color1: ansiGroups.normal.blue,
    color2: ansiGroups.normal.red,
    color3: ansiGroups.normal.green,
    color4: ansiGroups.normal.yellow
  }
};

generateTheme("Ganymede", colors, path.join(__dirname, "theme.json"));
