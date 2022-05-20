const router = require('express').Router();


router.get("/", (req, res) => {
  res.send("Travel's root");
});

module.exports = router;