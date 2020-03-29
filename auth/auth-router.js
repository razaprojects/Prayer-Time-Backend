const router = require("express").Router();
const bcrypt = require("bcryptjs");
const getToken = require("../config/token.js");

const User = require("../database/db-models/user-model.js");

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  User.addUser(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => res.status(500).json({ message: "error adding the user" }));
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const myToken = getToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}`,
          token: myToken
        });
      } else {
        res.status(401).json({ message: "invalid credential" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "unknown error occurred. please try again" })
    );
});

module.exports = router;
