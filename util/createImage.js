/* eslint-disable no-unused-vars */
/* eslint-disable unicorn/prefer-default-parameters */
const { createCanvas, GlobalFonts } = require("@napi-rs/canvas");

const calculateTextWidth = (text, fontSetting) => {
    const ctx = createCanvas(1, 1).getContext("2d");
    ctx.font = fontSetting;
    const { width } = ctx.measureText(text);
    return width;
};

const createImage = (input, fontSize, fontFamily, textColor, backgroundColor) => {
    GlobalFonts.registerFromPath(`${__dirname}/font/DS-DIGI.ttf`, "dsdigi");
    GlobalFonts.registerFromPath(`${__dirname}/font/DS-DIGII.ttf`, "dsdigii");
    GlobalFonts.registerFromPath(`${__dirname}/font/Electrolize.ttf`, "electrolize");

    const fontSetting = `${fontSize}px '${fontFamily}'`;
    const textWidth = calculateTextWidth(input, fontSetting);

    const height = fontSize * 1.15;
    const width = textWidth + (textWidth * (4 / 100)) + 12;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = /(\d)/g.test(backgroundColor) ? `#${backgroundColor}` : backgroundColor;
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSetting;
    ctx.fillStyle = /(\d)/g.test(textColor) ? `#${textColor}` : textColor;

    ctx.fillText(input, (width - textWidth) / 2, height / 1.3);
    ctx.textAlign = "center";

    const buffer = canvas.toBuffer("image/png");

    return buffer;
};

module.exports = createImage;
