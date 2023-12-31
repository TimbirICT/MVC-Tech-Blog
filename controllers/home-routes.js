// controllers/home-routes.js
const router = require('express').Router();
const { Post } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll();

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('partials/homepage', { posts });
    // Change 'homepage' to 'partials/homepage'
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    const post = dbPostData.get({ plain: true });
    res.render('partials/post', { post });
    // Change 'post' to 'partials/post'
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
