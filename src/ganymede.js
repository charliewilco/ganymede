// '#1B2B34',
// '#EB606B',
// '#7ED4F8',
// '#E9C062',
// '#96CBFE',
// '#BB80B3',
// '#5FB3B3',
// '#D0D0D0',
// '#808080',
// '#F25A55',
// '#7ED4F8',
// '#FFBA00',
// '#3c71bf',
// '#be67e7',
// '#6699CC',
// '#FFFFFF'

const Ganymede = {
  colors: {
    cyan: '#5FB3B3',
    blue: '#7ED4F8',
    purple: '#7450B6',
    green: '#DBD36E',
    red: '#F25A55',
    orange: '#DB8958',
    pink: '#FFB899', // Formerly lightOrange
    yellow: '#FFBA00'
  },

  grays: {
    gray0: '#022538',
    gray1: '#093750',
    gray2: '#3881A8',
    gray3: '#1c7db1',
    gray4: '#a2d9f5',
    gray5: '#C5D4DD',
    gray6: '#E6EEF3'
  }
}

const colorValues = Ganymede

export default colorValues

export const uiGroups = {
  userActionNeeded: colorValues.colors.red,
  userCurrentState: colorValues.colors.cyan,
  backgroundShade: colorValues.grays.gray0,
  background: colorValues.grays.gray1,
  foreground: colorValues.grays.gray5,
  ...colorValues.grays
}

export const syntaxGroups = {
  constant: colorValues.colors.cyan,
  identifier: colorValues.colors.blue,
  statement: colorValues.colors.yellow,
  type: colorValues.colors.green,
  global: colorValues.colors.purple,
  emphasis: colorValues.colors.pink,
  special: colorValues.colors.orange,
  trivial: colorValues.grays.gray4
}

export const versionControlGroups = {
  added: colorValues.colors.green,
  modified: colorValues.colors.orange,
  removed: colorValues.colors.red,
  renamed: colorValues.colors.blue
}

export const ansiGroups = {
  normal: {
    black: uiGroups.background,
    red: colorValues.colors.red,
    green: colorValues.colors.green,
    yellow: colorValues.colors.yellow,
    blue: colorValues.colors.blue,
    magenta: colorValues.colors.purple,
    cyan: colorValues.colors.cyan,
    white: uiGroups.foreground
  },
  bright: {
    black: colorValues.grays.gray4,
    red: colorValues.colors.orange,
    green: colorValues.colors.green,
    yellow: colorValues.colors.yellow,
    blue: colorValues.colors.blue,
    magenta: colorValues.colors.pink,
    cyan: colorValues.colors.cyan,
    white: colorValues.grays.gray6
  }
}
