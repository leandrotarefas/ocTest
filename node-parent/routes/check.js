router.get('/', function(req, res, next) {
  res.json({msg:"ok, I'm alive!"});
});