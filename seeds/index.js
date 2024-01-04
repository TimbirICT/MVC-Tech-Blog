const sequelize = require("../config/connection");
const seedPosts = require("./postData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // Add the seeding process for blog posts
  await seedPosts();

  process.exit(0);
};

seedAll();
