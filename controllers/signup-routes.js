const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");

router.get("/signup", (req, res) => {
  res.render("partials/signup");
});

// POST route for handling signup form submissions
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // Redirect after sending the JSON response
    res.redirect("/");
  } catch (err) {
    // Handle errors and send a response
    console.error("Error creating user:", err);
    res.status(500).json(err);
  }
});

module.exports = router;
