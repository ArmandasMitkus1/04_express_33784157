const express = require("express");
const app = express();
const port = 8000;

const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

app.listen(port, () => console.log(`Node server is running on port ${port}...`));
