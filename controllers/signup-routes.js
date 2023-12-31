const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');


router.get('/signup', (req, res) => {
    res.render('partials/signup'); // Update with your actual signup template name
  });


// POST route for handling signup form submissions
router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      // Log a success message
      console.log('User created successfully:', userData);
  
      // Send a response
      res.json({ user: userData, message: 'Account created successfully!' });
      res.redirect('/');
    } catch (err) {
      // Handle errors and send a response
      console.error('Error creating user:', err);
      res.status(500).json(err);
    }
  });

  module.exports = router;