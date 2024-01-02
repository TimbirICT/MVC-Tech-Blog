// controllers/dashboard-routes.js
const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');
const { addPost, postData } = require('../seeds/postData');

// GET route for the dashboard page
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    res.render('partials/dashboard', {
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/api/posts', async (req, res) => {
    try {
      // Extract data from the request body
      const { title, content, author } = req.body;
  
      // Assuming you have a User model and can get the username like this
      const username = req.session.username;
  
      // Add the new post to the postData array
      addPost({
        title,
        content,
        author: username,
      });
  
      // Redirect to the homepage with the updated postData array
      res.render('partials/homepage', { posts: postData, logged_in: req.session.logged_in });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;