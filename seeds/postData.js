// seeds/postData.js

const { Post } = require('../models');

const postData = [
  {
    title: 'Introduction to Blogging',
    content: 'This is the content of the first blog post.',
    user_id: 1,
    author: '',
  },
  {
    title: 'Best Practices for Writing Blogs',
    content: 'Explore the tips and tricks for writing engaging blog posts.',
    user_id: 2,
    author: '',
  },
  // Add more posts as needed
];
const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

// Function to add a new post
const addPost = (newPost) => {
  postData.push(newPost);
};

module.exports = { seedPosts, addPost, postData };