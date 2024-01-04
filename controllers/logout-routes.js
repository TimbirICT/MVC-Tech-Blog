const router = require("express").Router();

// POST route for handling logout
router.post("/logout", (req, res) => {
  // Clear the session data
  req.session.destroy(() => {
    res.redirect("/login"); // Redirect to the login page after logout
  });
});

module.exports = router;
