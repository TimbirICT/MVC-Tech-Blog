const router = require('express').Router();
const { User } = require('../models');

// GET route for the login page
router.get('/login', (req, res) => {
  res.render('login'); // Update with your actual login template name
});

// POST route for handling login form submissions
router.post('/login', async (req, res) => {
  try {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Find the user in the database
    const userData = await User.findOne({ where: { username } });

    // If user not found or password is incorrect, redirect back to login
    if (!userData || !userData.checkPassword(password)) {
      res.redirect('/login');
      return;
    }


    res.redirect('/'); // Change this to the actual route you want to redirect to
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
