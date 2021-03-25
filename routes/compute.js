var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let random=Math.random()*200+1
    let data=req.query.x
  res.render('compute', { result1: `round applied to ${random} is ${Math.round(random)}`,
   result2: `round applied to ${data} is ${Math.round(data)}`});
});

module.exports = router;
