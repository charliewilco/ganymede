"use strict";
exports.__esModule = true;
var vscode_theme_generator_1 = require("vscode-theme-generator");
var ganymede_1 = require("../ganymede");
var path = require("path");
var colors = {
    base: {
        background: ganymede_1.ansiGroups.normal.black,
        foreground: ganymede_1.ansiGroups.normal.white,
        color1: ganymede_1.ansiGroups.normal.blue,
        color2: ganymede_1.ansiGroups.normal.red,
        color3: ganymede_1.ansiGroups.normal.green,
        color4: ganymede_1.ansiGroups.normal.yellow
    }
};
vscode_theme_generator_1.generateTheme("Ganymede", colors, path.join(__dirname, "theme.json"));
