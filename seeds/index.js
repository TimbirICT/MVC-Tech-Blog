// seeds/index.js
const sequelize = require('../config/connection');
const seedPosts = require('./postData'); // Update the import to your new file

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // Comment out the gallery and painting seeding
  // await seedGallery();
  // await seedPaintings();

  // Add the seeding process for blog posts
  await seedPosts();

  process.exit(0);
};

seedAll();
