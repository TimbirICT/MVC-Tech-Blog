// models/index.js

const User = require('./User');
const Post = require('./Post'); // Import the Post model

// Update the associations
Post.hasMany(User, {
  foreignKey: 'post_id',
});

User.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Post };
