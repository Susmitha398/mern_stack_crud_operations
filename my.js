const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/ok", (req, res) => {
  res.send("OK");
});

app.get("/done", (req, res) => {
  res.send("Done");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
