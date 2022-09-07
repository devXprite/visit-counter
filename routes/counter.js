/* eslint-disable no-unused-vars */
const express = require("express");
const counter = require("../util/counter");
const createImage = require("../util/createImage");

const router = express.Router();

router.get("/", async (req, res) => {
    const {
        s: fontSize = 40,
        url: ID = "default",
        c: textColor = "00ff00",
        ff: fontFamily = "digii",
        bg: backgroundColor = "00000000",
    } = req.query;

    const visits = await counter(ID);
    const image = createImage(String(visits), fontSize, fontFamily, textColor, backgroundColor);
    res.writeHead(200, { "Content-Type": "image/png" });

    res.end(image);
});

module.exports = router;
