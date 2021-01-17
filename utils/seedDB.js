const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config")

// This file empties the Books collection and inserts the books below


//mongoose.connect(process.env.ATLAS_URL || "mongodb://localhost/mern",
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern",
   mongoOptions
);

const userSeed = 
   {
      username: "Admin",
      email: "admin@contact.us",
      password: "1"
   }
;
const commentsSeeds = [
   {
      title: "🚀 initial seed",
      detail: "Detail your post",
      status: "A",
      offer: "Explain your offer to members with maximum details",
      category: "art",
      username: "Admin"
   },
   {
      title: "👾 another",
      detail: "Explain your post",
      status: "A",
      offer: "Explain your offer to members",
      category: "home",
      username: "Admin"
   },

];

// remove all comments
db.Comment.deleteMany({})
// remove all users
  .then(() => db.User.deleteMany({}))
  // add user
  .then(() => db.User.create(userSeed))
  // add comments seeds
  .then((user) => db.Comment.create(commentsSeeds[0])
      // add comment ref to user
      .then(({_id}) => db.User.findOneAndUpdate({_id: user._id}, { $push: { comments: _id } }, { new: true }))
  )
  .then((user) => db.Comment.create(commentsSeeds[1])
      // add comment ref to user
      .then(({_id}) => db.User.findOneAndUpdate({_id: user._id}, { $push: { comments: _id } }, { new: true }))
  )
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
