"use strict";
exports.__esModule = true;
var vscode_theme_generator_1 = require("vscode-theme-generator");
var path = require("path");
var colorSet = {
    base: {
        background: '#12171F',
        foreground: '#EFEFEF',
        color1: '#399EF4',
        color2: '#DA6771',
        color3: '#4EB071',
        color4: '#FFF099'
    }
};
vscode_theme_generator_1.generateTheme('Ganymede', colorSet, path.join(__dirname, 'theme.json'));
