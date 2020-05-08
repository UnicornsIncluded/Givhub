const User = require("../server/database/schemas/User");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/givhub", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const users = [
  new User({
    userType: "donor",
    username: "bella@email.com",
    firstName: "Bella",
    lastName: "Hadid",
    password: "123456",
    address: "1624 Fairford Dr, Fullerton CA 92833",
    email: "bella@email.com",
    donationCart: {
      items: [{ name: "carrot" }, { name: "banana" }, { name: "bagel" }],
      status: "active",
    },
    // donationCartHistory
  }),
  new User({
    userType: "courier",
    username: "gigi@email.com",
    firstName: "Gigi",
    lastName: "Hadid",
    password: "123456",
    address: "1625 Fairford Dr, Fullerton CA 92833",
    email: "gigi@email.com",
    donationCart: {
      items: [{ name: "vitamins" }, { name: "strawberries" }, { name: "tea" }],
      status: "active",
    },
    // donationCartHistory
  }),
];

async function syncUsers() {
  let done = 0;
  for (let i = 0; i < users.length; i++) {
    await users[i].save(function (err, result) {
      done++;
      if (done === users.length) {
        exit();
      }
    });
  }
}

function exit() {
  mongoose.disconnect();
}

syncUsers();
