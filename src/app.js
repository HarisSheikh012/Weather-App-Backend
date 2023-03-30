const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
// Joining Path
const publicPath = path.join(__dirname, "../public");
// For Attaching the Path With Express
app.use(express.static(publicPath));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "../partials"));
// Routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("404");
});
app.listen(port, () => {
  console.log(`Listening to the port at ${port}`);
});
