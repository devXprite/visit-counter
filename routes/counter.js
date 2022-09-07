/* eslint-disable no-unused-vars */
const express = require("express");
const createImage = require("../util/createImage");

const router = express.Router();

router.get("/", (req, res) => {
    const {
        s: fontSize = 40,
        url: ID = "default",
        c: textColor = "00ff00",
        ff: fontFamily = "dsdigi",
        bg: backgroundColor = "00000000",
    } = req.query;

    const counter = String(Math.floor(Math.random() * 1000000000));
    // const counter = String(8);
    const image = createImage(counter, fontSize, fontFamily, textColor, backgroundColor);
    res.writeHead(200, { "Content-Type": "image/png" });

    res.end(image);
});

module.exports = router;
