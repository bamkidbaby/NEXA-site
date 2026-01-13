import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000; // Vercel will set PORT automatically

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from "Public" folder
app.use(express.static(path.join(__dirname, "Public")));

// Parse URL-encoded bodies (for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// --- ROUTES ---
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/services", (req, res) => res.render("services"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/pricing", (req, res) => res.render("pricing"));
app.get("/testimonials", (req, res) => res.render("testimonials"));
app.get("/faqs", (req, res) => res.render("faqs"));
app.get("/team", (req, res) => res.render("team"));
app.get("/error", (req, res) => res.render("error"));
app.get("/comingSoon", (req, res) => res.render("comingSoon"));
app.get("/styleGuide", (req, res) => res.render("styleGuide"));

// Catch-all route for undefined paths -> redirect to /error
app.use((req, res) => {
  res.status(404).render("error");
});

// Error handling middleware for internal server errors
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err);
  res.status(500).render("error", { message: "Internal Server Error" });
});

// --- START SERVER ---
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
