const express = require("express");

const configureMiddleware = require("./configure-middleware.js");

const server = express();
configureMiddleware(server);

//===============Authentication================
const authRouter = require("../auth/auth-router.js");
server.use("/api/auth", authRouter);
//===============end of auth===================

//=============prayer route====================
const restrictedMiddleware = require("../auth/restricted-middleware");
const updateRouter = require("./update-router.js");
server.use("/api/update", restrictedMiddleware, updateRouter);
//==========end of prayer route===============

//=========public prayer api call=============
const prayer = require("../database/db-models/prayer-model.js");
server.get("/api/prayers", (req, res) => {
  prayer
    .getPrayers()
    .then(myPrayers => {
      res.json(myPrayers);
    })
    .catch(err =>
      res.status(500).json({ message: "error getting prayer times" })
    );
});
//=========end of public prayer api call=======

server.get("/", (req, res) => res.send("server is up and running"));
module.exports = server;

// server.get("/api/prayers", (req, res) => {
//     prayer
//       .getPrayers()
//       .then(myClasses => {
//         res.json(myClasses);
//       })
//       .catch(err =>
//         res.status(500).json({ message: "Failed to get lists of classes" })
//       );
//   });
