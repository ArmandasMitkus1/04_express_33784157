// Main router for Lab 4
const express = require("express");
const router = express.Router();

// GET /
router.get("/", (_req, res) => res.send("Hello World!"));

// GET /about
router.get("/about", (_req, res) =>
  res.send(`
    <h1>About this app</h1>
    <p>This is my Lab 4 Express app for <strong>Dynamic Web Applications</strong>.</p>
    <ul>
      <li>VM ID: <code>428</code> (served via the DOC proxy on port <code>8000</code>)</li>
      <li>Routes: <code>/</code>, <code>/about</code>, <code>/contact</code>, <code>/date</code></li>
      <li>Process manager: <code>forever</code> (keeps the app running in the background)</li>
      <li>Repository: <code>04_express_33784157</code></li>
    </ul>
  `)
);

// GET /contact
router.get("/contact", (_req, res) =>
  res.send(
    '<p>Contact: <a href="mailto:amitk002@campus.goldsmiths.ac.uk">amitk002@campus.goldsmiths.ac.uk</a></p>'
  )
);

// GET /date
router.get("/date", (_req, res) => res.send(new Date().toString()));

module.exports = router;
