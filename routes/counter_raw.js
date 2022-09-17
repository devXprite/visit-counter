const express = require("express");

const router = express.Router();
const counter = require("../util/counter");

router.get("/", async (req, res) => {
    const {
        page = "example",
    } = req.query;

    const visits = await counter(page);
    res.set("Content-Type", "text/plain").send(String(visits));
});
module.exports = router;
