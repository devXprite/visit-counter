const express = require("express");
const createImage = require("../util/createImage");

const router = express.Router();

router.get("/", (req, res) => {
    const input = String(Math.floor(Math.random() * 5000000000));

    const image = createImage(input);
    res.writeHead(200, { "Content-Type": "image/png" });

    res.end(image);
});

module.exports = router;
