import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/services", (req, res) => {
  res.render("services.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/pricing", (req, res) => {
  res.render("pricing.ejs");
});

app.get("/testimonials", (req, res) => {
  res.render("testimonials.ejs");
});

app.get("/faqs", (req, res) => {
  res.render("faqs.ejs");
});

app.get("/team", (req, res) => {
  res.render("team.ejs");
});

app.get("/error", (req, res) => {
  res.render("error.ejs");
});

app.get("/comingSoon", (req, res) => {
  res.render("comingSoon.ejs");
});

app.get("/styleGuide", (req, res) => {
  res.render("styleGuide.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
