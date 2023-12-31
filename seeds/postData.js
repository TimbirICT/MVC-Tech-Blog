// seeds/postData.js

const { Post } = require('../models');

const postData = [
  {
    title: 'Introduction to Blogging',
    content: 'This is the content of the first blog post.',
  },
  {
    title: 'Best Practices for Writing Blogs',
    content: 'Explore the tips and tricks for writing engaging blog posts.',
  },
  // Add more posts as needed
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
