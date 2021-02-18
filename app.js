const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("listening on port", port);
});
