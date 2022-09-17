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
    GlobalFonts.registerFromPath(`${__dirname}/font/Digi.ttf`, "digi");
    GlobalFonts.registerFromPath(`${__dirname}/font/Digi-Italic.ttf`, "digii");
    GlobalFonts.registerFromPath(`${__dirname}/font/Electrolize.ttf`, "electrolize");
    GlobalFonts.registerFromPath(`${__dirname}/font/Alien.ttf`, "alien");
    GlobalFonts.registerFromPath(`${__dirname}/font/Linebeam.ttf`, "linebeam");
    GlobalFonts.registerFromPath(`${__dirname}/font/Ledboardev.ttf`, "ledboard");

    const fontSetting = `${fontSize}px '${fontFamily}'`;
    const textWidth = calculateTextWidth(input, fontSetting);

    const height = fontSize * 1.15;
    const width = textWidth + (textWidth * (4 / 100)) + 12;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g.test(backgroundColor) ? `#${backgroundColor}` : backgroundColor;
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSetting;
    ctx.fillStyle = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g ? `#${textColor}` : textColor;
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 0;

    ctx.fillText(input, (width - textWidth) / 2, height / 1.3);
    ctx.textAlign = "center";

    const buffer = canvas.toBuffer("image/png");

    return buffer;
};

module.exports = createImage;
