var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log("Msg recebida de um filhote: ", req.body)
  res.json({msg:"blz, to ligado!"});
});

module.exports = router;
