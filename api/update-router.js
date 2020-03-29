const router = require("express").Router();

const Prayer = require("../database/db-models/prayer-model.js");

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Prayer.updateTime(id, req.body)
    .then(updatedTime => {
      res.json(updatedTime);
    })
    .catch(err => res.status(500).json({ message: "error updating time" }));
});

module.exports = router;
