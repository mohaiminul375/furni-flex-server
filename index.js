const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

// server testing
app.get("/", (req, res) => {
  res.send("furni-flex server is working");
});

app.listen(port, () => {
  console.log(`server is running on port${port}`);
});
