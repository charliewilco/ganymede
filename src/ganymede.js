const Ganymede = {
  colors: {
    cyan: '#00B7ED',
    blue: '#00B7ED',
    yellow: '#FFBA00',
    green: '#F1D677',
    purple: '#F25A55',
    red: '#F25A55',
    orange: '#F25A55',
    pink: '#F5837F'
  },

  grays: {
    gray0: '#022538',
    gray1: '#093750',
    gray2: '#055682',
    gray3: '#1C7DB1',
    gray4: '#A2D9F5',
    gray5: '#DCEBF5',
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
    magenta: colorValues.colors.pink,
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
