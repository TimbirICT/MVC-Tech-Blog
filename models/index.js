// models/index.js

const User = require('./User');
const Post = require('./Post');
const Painting = require('./Painting');

Post.hasMany(Painting, {
  foreignKey: 'post_id',
});

Painting.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Painting };
