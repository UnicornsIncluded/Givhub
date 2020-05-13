const express = require("express");
const { User } = require("../database/schemas");

const router = express.Router();

module.exports = router;

router.get("/", async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      res.status(400).send({ message: "Couldn't get users" });
    } else {
      res.send(users);
    }
  }).select("-password");
});

router.get("/:linkedUserId", async (req, res) => {
  await User.findOne({ user: req.params.linkedUserId }, (err, users) => {
    if (err) {
      res.status(400).send({ message: "Couldn't get user" });
    } else {
      res.send(users);
    }
  }).select("-password");
});

router.put("/:linkedUserId", async (req, res) => {
  try {
    req.body.updated_at = Date.now();
    console.log('in the put route')
    await User.findOneAndUpdate(
      { user: req.params.linkedUserId },
      req.body,
      { new: true },
      (err, user) => {
        if (err) {
          res.status(400).send({ err, message: "Error updating user" });
        }
        console.log("success!");
        res.status(200).send({
          message: "User successfully updated",
          user: user.hidePassword(),
        });
      }
    );
  } catch (err) {
    next(err);
  }
});
router.get("/:username/cart", async (req, res, next) => {
  try {
    const userData = await User.find({ username: req.params.username });

    res.json(userData[0]);
  } catch (err) {
    next(err);
  }
});
router.put("/:username/cart", async (req, res, next) => {
  try {
    await User.update(
      { username: req.params.username },
      { $push: { "donationCart.items": req.body } }
    );

    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
});

router.delete("/:username/cart", async (req, res, next) => {
  try {
    console.log("don't leave me behind pls TYLER <3 REQ.BODY", req.body)
    await User.update({username: req.params.username}, {$pull: {"donationCart.items": req.body}})
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.post("/checkusername", (req, res) => {
  const username = req.body.username.toLowerCase();

  User.find({ username }, (err, users) => {
    if (err) {
      res.status(400).send({ message: "Check username failed", err, username });
    }
    if (users && users[0]) {
      res.send({ available: false, message: "Username exists", username });
    } else {
      res.send({ available: true, message: "Username available", username });
    }
  });
});
