var express = require('express');
var router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {

  const INFO = process.env.INFO || "Hello, world!";

  console.log("ENV",process.env)
  console.log("INFO",process.env.INFO)

  res.send(
    { "greeting info": INFO }
  );
});

module.exports = router;
