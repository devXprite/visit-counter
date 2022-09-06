const { createCanvas, GlobalFonts } = require('@napi-rs/canvas');

// const {
//   writeFileSync,
// } = require('fs');

const createImage = (input, fontSize, fontName, color) => {
  const CanvasFontSize = fontSize || 40;
  const fontFamily = fontName || 'DS_DIGI';
  const textColor = color || '#00ff00';
  const fontSetting = `${CanvasFontSize}px '${fontFamily}'`;

  const height = CanvasFontSize * 1.2;
  const width = input.length * (CanvasFontSize / 1.8);

  GlobalFonts.registerFromPath(`${__dirname}/font/DS-DIGI.TTF`, 'DS_DIGI');

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.font = fontSetting;
  ctx.fillStyle = textColor;

  ctx.fillText(input, CanvasFontSize / 20, canvas.height / 1.3);
  ctx.textAlign = 'center';

  const buffer = canvas.toBuffer('image/png');
  //   writeFileSync(join(__dirname, 'demo.png'), buffer);

  return buffer;
};

// createImage('00008', 24, null, '#0ff');
module.exports = createImage;
