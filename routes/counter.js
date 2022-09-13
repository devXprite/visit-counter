/* eslint-disable no-unused-vars */
const express = require("express");
const counter = require("../util/counter");
const createImage = require("../util/createImage");

const router = express.Router();

const zeroPad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = `0${num}`;
    return num;
};

router.get("/", async (req, res) => {
    const {
        s: fontSize = 40,
        page = "default",
        c: textColor = "00ff00",
        ff: fontFamily = "digii",
        bg: backgroundColor = "00000000",
        no: NoOfDigits = "0000",
    } = req.query;

    const visits = await counter(page);
    const image = createImage(zeroPad(visits, NoOfDigits.length), fontSize, fontFamily, textColor, backgroundColor);
    res.writeHead(200, { "Content-Type": "image/png" });

    res.end(image);
});

module.exports = router;
