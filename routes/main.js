const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => res.send("Hello World!"));
router.get("/about", (_req, res) => res.send("<h1>This is the about page</h1>"));
router.get("/contact", (_req, res) => res.send("<p>Contact: your.name@university.ac.uk</p>"));
router.get("/date", (_req, res) => res.send(new Date().toString()));

module.exports = router;
