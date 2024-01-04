const withAuth = require("../utils/auth");
const router = require("express").Router();
const { Post, Comments, User } = require("../models");

// GET all posts for homepage
router.get("/", withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data and comments
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comments,
          attributes: ["name", "content"],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into the template
    res.render("partials/homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/post/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    const post = dbPostData.get({ plain: true });
    res.render("partials/post", { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/comments/:postId", async (req, res) => {
  try {
    const { name, content } = req.body;
    const postId = req.params.postId;

    // Create a new comment
    await Comments.create({
      name,
      content,
      post_id: postId,
    });

    // Redirect back to the homepage after adding a comment
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
