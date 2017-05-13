import { generateTheme, IColorSet } from 'vscode-theme-generator'
import Ganymede from 'ganymede'
import * as path from 'path'

const colors: IColorSet = {
  base: {
    background: '#12171F',
    foreground: '#EFEFEF',
    color1: '#399EF4',
    color2: '#DA6771',
    color3: '#4EB071',
    color4: '#FFF099',
  }
}

generateTheme('Ganymede', colors, path.join(__dirname, 'theme.json'));
