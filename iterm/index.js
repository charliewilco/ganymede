const hexRGB = require("hex-rgb");
const {
  ansiGroups: { normal, bright }
} = require("../ganymede");

const def = hex => {
  let color = {};

  const colors = hexRGB(hex).map(color => color / 255);

  let color = {
    red: colors[0],
    green: colors[1],
    blue: colors[2]
  };

  return `
    <dict>
      <key>Color Space</key>
      <string>sRGB</string>
      <key>Blue Component</key>
      <real>${color.blue}</real>
      <key>Green Component</key>
      <real>${color.green}</real>
      <key>Red Component</key>
      <real>${color.red}</real>
    </dict>
    `;
};

const iterm = `
  <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
      <dict>
        <key>Ansi 0 Color</key>
        ${def(normal.black)}
        <key>Ansi 1 Color</key>
        ${def(normal.red)}
        <key>Ansi 10 Color</key>
        ${def(normal.green)}
        <key>Ansi 11 Color</key>
        ${def(normal.yellow)}
        <key>Ansi 12 Color</key>
        ${def(normal.blue)}
        <key>Ansi 13 Color</key>
        ${def(bright.magenta)}
        <key>Ansi 14 Color</key>
        ${def(normal.cyan)}
        <key>Ansi 15 Color</key>
        ${def(bright.white)}
        <key>Ansi 2 Color</key>
        ${def(normal.green)}
        <key>Ansi 3 Color</key>
        ${def(normal.yellow)}
        <key>Ansi 4 Color</key>
        ${def(normal.blue)}
        <key>Ansi 5 Color</key>
        ${def(normal.magenta)}
        <key>Ansi 6 Color</key>
        ${def(normal.cyan)}
        <key>Ansi 7 Color</key>
        ${def(normal.white)}
        <key>Ansi 8 Color</key>
        ${def(bright.black)}
        <key>Ansi 9 Color</key>
        ${def(bright.red)}
        <key>Background Color</key>
        ${def(normal.black)}
        <key>Badge Color</key>
        ${def(bright.red)}
        <key>Bold Color</key>
        ${def(bright.white)}
        <key>Cursor Color</key>
        ${def(normal.cyan)}
        <key>Cursor Guide Color</key>
        ${def(bright.white)}
        <key>Cursor Text Color</key>
        ${def(normal.black)}
        <key>Foreground Color</key>
        ${def(normal.white)}
        <key>Link Color</key>
        ${def(normal.blue)}
        <key>Selected Text Color</key>
        ${def(bright.black)}
        <key>Selection Color</key>
        ${def(bright.white)}
        <key>Tab Color</key>
        <dict>
          <key>Blue Component</key>
          <real>0.37518101930618286</real>
          <key>Green Component</key>
          <real>0.33311048150062561</real>
          <key>Red Component</key>
          <real>0.2656099796295166</real>
        </dict>
      </dict>
    </plist>`;

process.stdout.write(iterm);
