const User = require('./User');
const Post = require('./Post');
const Painting = require('./Painting');

Post.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Post, {
  foreignKey: 'Post_id',
});

module.exports = { User, Post, Painting };
