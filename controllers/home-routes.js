
const router = require('express').Router();
const { Post } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll();

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('partials/homepage', { posts });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    const post = dbPostData.get({ plain: true });
    res.render('partials/post', { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
