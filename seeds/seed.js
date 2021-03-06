// const sequelize = require('../config/connection');

// const { User, Post,Comment} = require('../models');
// const postData = require('./postData.json');
// const commentData = require('./commentData.json')

// const userData = require('./userData.json')



// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const post of postData) {
//     const newPost=await Post.create({
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     ...post,
//     });
//   }

  

//   for (const comment of commentData) {
//     const newComment = await Comment.create({
//       ...comment,
//       // Attach a random reader ID to each book
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();


const sequelize = require('../config/connection');

const userData = require("./userData");
const postData = require("./postData");
const commentData = require("./commentData")

const {User, Post, Comment}=require("../models");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  //create all users
  const user = await User.bulkCreate(userData, {
       individualHooks: true,
       returning: true,
      });
  for (const user of postData) {
    await Post.create({
      ...user,
     user_id: userData[Math.floor(Math.random() * userData.length)].id,
    });
  }

  for (const user of commentData) {
    await Comment.create({
       ...user,
       
      user_id: userData[Math.floor(Math.random() * userData.length)].id,
     });
      }
  process.exit(0);
};

seedAll();
