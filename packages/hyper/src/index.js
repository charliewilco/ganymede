import { uiGroups, ansiGroups } from 'ganymede'

// rgba(9, 55, 80, 1) = ui.background

const AlphaBkg = 'rgba(9, 55, 80, 0.925)'

exports.onWindow = browserWindow => browserWindow.setVibrancy('dark')
exports.decorateConfig = (config) => Object.assign({}, config, {
  cursorColor: uiGroups.userCurrentState,
  foregroundColor: uiGroups.foreground,
  backgroundColor: AlphaBkg,
  colors: {
    black: ansiGroups.normal.black,
    red: ansiGroups.normal.red,
    green: ansiGroups.normal.green,
    yellow: ansiGroups.normal.yellow,
    blue: ansiGroups.normal.blue,
    magenta: ansiGroups.normal.magenta,
    cyan: ansiGroups.normal.cyan,
    white: ansiGroups.normal.white,
    lightBlack: ansiGroups.bright.black,
    lightRed: ansiGroups.bright.red,
    lightGreen: ansiGroups.bright.green,
    lightYellow: ansiGroups.bright.yellow,
    lightBlue: ansiGroups.bright.blue,
    lightMagenta: ansiGroups.bright.magenta,
    lightCyan: ansiGroups.bright.cyan,
    lightWhite: ansiGroups.bright.white
  },
  termCSS: `
    ${config.termCSS},
    x-screen a { color: ${ansiGroups.bright.magenta}; }
  `,
  css: `
    ${config.css},
    .tab_first {
      margin-left: 0 !important;
    }
    .tab_tab {
      background-color: transparent !important;
      color: ${uiGroups.gray5};
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: ${uiGroups.gray1};
    }

    .tab_tab.tab_active {
      border-bottom-color: ${uiGroups.userCurrentState} !important;
    }
    .tab_tab.tab_active::before {
      border: none !important;
    }

    .tab_text {
      border: none !important;
    }

    .tabs_title,
    .tab_textActive {
      color: ${uiGroups.userCurrentState} !important;
    }

    .tabs_title,
    .tab_textInner {
      font-size: 14px;
      font-weight: bold;
    }

    .splitpane_divider {
      background-color: rgba(4, 9, 15, 0.35) !important;
    }

    .splitpane_divider_horizontal,
    .splitpane_divider_vertical {
      border-width: 0 !important;
    }

    .splitpane_divider_horizontal {
      height: 2px !important;
      margin: 0 !important;
    }

    .splitpane_divider_vertical {
      width: 2px !important;
      margin: 0 !important;
    }
  `
})
