var express = require('express');
var router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {

  const INFO = process.env.INFO || "Hello, world!";

  res.send(
    { "greeting": INFO }
  );
});

module.exports = router;
