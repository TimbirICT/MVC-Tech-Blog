const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');

// GET route for the login page
// GET route for the login page
router.get('/login', (req, res) => {
  res.render('partials/login'); // Corrected from 'paritals' to 'partials'
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
      console.log('Invalid login credentials');
      res.redirect('/login');
      return;
    }

    // Set a session variable to indicate the user is logged in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      console.log('Login successful');
      res.redirect('/'); // Change this to the actual route you want to redirect to
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



module.exports = router;
